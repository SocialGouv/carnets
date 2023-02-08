import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/router"
import { useSession } from "next-auth/client"

import useSWR from "swr"
import fetcher from "@/utils/fetcher"
import useToken from "@/hooks/use-token"
import Loader from "@/components/common/loader"
import { createPost, updatePost, getPost } from "@/queries/index"
import Wizard, { Status } from "@/components/common/wizard"

const defaultValues = {
  mood: "good",
  kpis: [{ value: "42", name: "My First KPI" }],
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

const Success = ({ slug }: { slug: string }) => (
  <div className="flex flex-1 items-center justify-center">
    <div className="text-9xl text-success relative -top-4">✓</div>
    <div>
      <p>Votre publication a été enregitrée avec succès.</p>
      <p>
        Retrouvez cette publication en vous rendant sur{" "}
        <Link href={`/team/${slug}`}>la page dédiée à l&apos;équipe</Link>.
      </p>
    </div>
  </div>
)

const Failure = ({ slug }: { slug: string }) => (
  <div className="flex flex-1 items-center justify-center">
    <div className="text-9xl text-error relative -top-4">❌</div>
    <div>
      <p>
        Un problème est survenu empechant votre publication d&apos;être
        enregitrée.
      </p>
      <p>
        Veuillez essayer ultèrieurement en repartant de{" "}
        <Link href={`/team/${slug}`}>la page dédiée à l&apos;équipe</Link>.
      </p>
    </div>
  </div>
)

const PostForm = () => {
  const router = useRouter()
  const [token] = useToken()
  const [session] = useSession()
  const [status, setStatus] = useState<Status>("steps")

  const {
    query: { slug, id },
  } = router

  const { data: { posts: [data] } = { posts: [] } } = useSWR(
    id ? `post/${id[0]}` : null,
    () => fetcher(getPost, token, id && id[0] ? { id: id[0] } : undefined)
  )

  const create = async (post: Post) => {
    const kpis = {
      data: post.kpis?.filter((kpi: KPI) => kpi.name && kpi.name.length),
    }
    await fetcher(createPost, token, {
      post: { ...post, kpis, team_slug: slug, author: session?.user.login },
    })
    setStatus("success")
  }

  const update = async (post: Post) => {
    const {
      id,
      team,
      author,
      team_slug,
      created_at,
      kpis: rawKpis,
      ...rest
    } = post

    const kpis = rawKpis
      ?.filter((kpi: KPI) => kpi.name && kpi.name.length)
      .map(({ name, value }: KPI) => ({ name, value, post_id: id }))

    await fetcher(updatePost, token, { id: id, post: rest, kpis })
    setStatus("success")
  }

  const handleComplete = async (post: Post) => {
    setStatus("loading")
    try {
      return post.id ? await update(post) : await create(post)
    } catch (error) {
      setStatus("failure")
      throw error
    }
  }

  return (
    <form className="flex flex-col flex-1">
      {status === "loading" ? (
        <Loader size="lg" />
      ) : status === "success" ? (
        <Success slug={slug as string} />
      ) : status === "failure" ? (
        <Failure slug={slug as string} />
      ) : (
        <Wizard data={data || defaultValues} onComplete={handleComplete} />
      )}
    </form>
  )
}

export default PostForm
