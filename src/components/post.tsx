import Link from "next/link"
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
    <div className="flex mb-5">
      <div className="flex-1">
        <h3>{data.team?.name}</h3>
        <div className="flex text-sm text-gray-500 items-end">
          <p>
            Publié le{" "}
            {data.created_at && format(new Date(data.created_at), "dd/MM/yyyy")}{" "}
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
        <Link href={`/team/${data.team_slug}/post/${data.id}`}>
          <a className="btn primary sm">
            <i className="ri-edit-fill ri-fw" />
            Editer
          </a>
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
