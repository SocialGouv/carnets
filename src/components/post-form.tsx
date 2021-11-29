import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/router"
import { useSession } from "next-auth/client"
import MarkdownEditor from "@/components/common/markdown-editor"

import useSWR from "swr"
import fetcher from "@/utils/fetcher"
import useToken from "@/services/token"
import Mood from "@/components/common/mood"
import Loader from "@/components/common/loader"
import { createPost, getPost } from "@/queries/index"
import Wizard, { Step, Status } from "@/components/common/wizard"

const defaultValues = {
  mood: "good",
  term: `### Nos prochaines échéances

- Mise en production de la version \`1.42.0\`
- Présentation FAST
  `,
  needs: `### Nos besoins immédiats

#### Besoins fonctionnels
- besoin numéro 1
- besoin numéro 2

#### Besoins techniques
- besoin numéro 1
- besoin numéro 2`,
  priorities: `### Exemple de titre

Un petit texte d'introduction. Lorem ipsum dolor sit amet. Est quidem sint sed accusamus molestias ea deleniti beatae. Quo laboriosam sequi qui dolor nisi et soluta velit et asperiores totam qui labore temporibus.

Un exemple de liste:
- élément 1
- élément 2
- sous élément 1
- sous élément 2`,
}

const MoodSelector = ({
  value,
  handleChange,
}: {
  value: Mood
  handleChange: (name: string, value: string) => void
}) => {
  const moods = [
    { value: "good", label: "bon" },
    { value: "average", label: "moyen" },
    { value: "bad", label: "mauvais" },
  ] as { value: Mood; label: string }[]

  return (
    <div className="mood-selector">
      {moods.map((mood, i) => (
        <div
          key={i}
          onClick={() => handleChange("mood", mood.value)}
          className={`mood${mood.value === value ? " selected" : ""}`}
        >
          <Mood mood={mood.value} />
          <p className="pt-5">{mood.label}</p>
        </div>
      ))}
    </div>
  )
}

const PostForm = () => {
  const router = useRouter()
  const [token] = useToken()
  const [session] = useSession()
  const [status, setStatus] = useState<Status>("steps")

  const {
    query: { slug, id },
  } = router

  const { data } = useSWR(id ? `post/${id[0]}` : null, () =>
    fetcher(getPost, token, id && id[0] ? { id: id[0] } : undefined)
  )

  const [post, setPost] = useState(data || defaultValues)

  const submit = async () => {
    console.log("ON SUBMIT", post)
    try {
      const result = await fetcher(createPost, token, {
        post: { ...post, team_slug: slug, author: session?.user.login },
      })
      console.log("result", result)
      setStatus("success")
    } catch (error) {
      setStatus("failure")
      throw error
    }
  }

  const handleChange = (name: string, value: string) =>
    setPost({ ...post, [name]: value })

  const handleComplete = () => {
    setStatus("loading")
    submit()
  }

  return (
    <form className="flex flex-col flex-1">
      <Wizard status={status} onComplete={handleComplete}>
        <Step>
          <h2 className="text-center pb-10">Vos priorités de la semaine:</h2>
          <MarkdownEditor
            name="priorities"
            value={post.priorities}
            handleChange={handleChange}
          />
        </Step>
        <Step>
          <h2 className="text-center pb-10">Vos besoins immédiats:</h2>
          <MarkdownEditor
            name="needs"
            value={post.needs}
            handleChange={handleChange}
          />
        </Step>
        <Step>
          <h2 className="text-center pb-10">Vos prochaines échéances:</h2>
          <MarkdownEditor
            name="term"
            value={post.term}
            handleChange={handleChange}
          />
        </Step>
        <Step>
          <h2 className="text-center pb-10">
            L&apos;état d&apos;esprit de l&apos;équipe:
          </h2>
          <MoodSelector value={post.mood} handleChange={handleChange} />
        </Step>
        <Step type="loading">
          <Loader size="lg" />
        </Step>
        <Step type="success">
          <div className="flex flex-1 items-center justify-center">
            <div className="text-9xl text-success relative -top-4">✓</div>
            <div>
              <p>Votre publication a été enregitrée avec succès.</p>
              <p>
                Retrouvez cette publication en vous rendant sur{" "}
                <Link href={`/team/${slug}`}>
                  <a>la page dédiée à l&apos;équipe</a>
                </Link>
                .
              </p>
            </div>
          </div>
        </Step>
        <Step type="failure">
          <div className="flex flex-1 items-center justify-center">
            <div className="text-9xl text-error relative -top-4">❌</div>
            <div>
              <p>
                Un problème est survenu empechant votre publication d&apos;être
                enregitrée.
              </p>
              <p>
                Veuillez essayer ultèrieurement en repartant de{" "}
                <Link href={`/team/${slug}`}>
                  <a>la page dédiée à l&apos;équipe</a>
                </Link>
                .
              </p>
            </div>
          </div>
        </Step>
      </Wizard>
    </form>
  )
}

export default PostForm
