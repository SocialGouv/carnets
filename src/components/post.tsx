import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import ReactMarkdown from "react-markdown"

import KPIs from "@/components/common/kpis"
import Mood from "@/components/common/mood"
import TabPanel, { Tab, Tabs, Panels } from "@/components/common/tab-panel"

const Post = ({
  data,
  editable,
  handlePostDeletion,
}: {
  data: Post
  editable: boolean
  handlePostDeletion: () => void
}) => (
  <article className="post">
    <div className="header">
      <div className="title">
        <div className="team-avatar">
          <Image
            width={48}
            height={48}
            alt="Picture of the team"
            src={data.team?.avatarUrl || ""}
          />
          <div className="ml-3">
            <h3>{data.team?.name}</h3>
            <div className="info">
              <p>
                Publié le{" "}
                {data.created_at &&
                  format(new Date(data.created_at), "dd/MM/yyyy")}{" "}
                par&nbsp;
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://github.com/${data.author}`}
              >
                {data.author}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Mood mood={data.mood} />
    </div>
    <KPIs kpis={data.kpis || []}></KPIs>
    <TabPanel>
      <Tabs>
        <Tab disabled={!data.priorities.length}>Priorités</Tab>
        <Tab disabled={!data.needs.length}>Besoins</Tab>
        <Tab disabled={!data.term.length}>Échéances</Tab>
      </Tabs>
      <Panels>
        <ReactMarkdown className="prose prose-sm">
          {data.priorities}
        </ReactMarkdown>
        <ReactMarkdown className="prose prose-sm">{data.needs}</ReactMarkdown>
        <ReactMarkdown className="prose prose-sm">{data.term}</ReactMarkdown>
      </Panels>
    </TabPanel>
    {editable && (
      <div className="flex justify-end">
        <Link
          passHref
          className="btn primary sm"
          href={`/team/${data.team_slug}/post/${data.id}`}
        >
          <i className="ri-edit-fill ri-fw" />
          Editer
        </Link>
        <button
          className="primary sm ml-2"
          onClick={() => handlePostDeletion()}
        >
          <i className="ri-delete-bin-7-fill ri-fw" />
          Supprimer
        </button>
      </div>
    )}
  </article>
)

export default Post
