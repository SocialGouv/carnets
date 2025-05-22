import Image from "next/image";
import { format } from "date-fns";
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";
import Button from "@codegouvfr/react-dsfr/Button";
import KPIs, { type KPI } from "@/components/common/kpis";
import Mood, { type Mood as MoodType } from "@/components/common/mood";
import TabPanel, { Tab, Tabs, Panels } from "@/components/common/tab-panel";

export interface Post {
  id?: string;
  team?: Team;
  kpis?: KPI[];
  term: string;
  needs: string;
  mood: MoodType;
  author?: string;
  created_at?: Date;
  team_slug?: string;
  priorities: string;
}

export default function Post({
  data,
  editable,
  hideLogo,
  onDeletion,
}: {
  data: Post;
  editable: boolean;
  hideLogo: boolean;
  onDeletion: (id?: string) => void;
}) {
  return (
    <article className="post gap-y-4">
      <div className="header">
        <div className="avatar">
          {hideLogo ? (
            <Mood mood={data.mood} />
          ) : (
            <Image
              width={48}
              height={48}
              alt="Picture of the team"
              src={data.team?.avatarUrl || ""}
            />
          )}
        </div>
        <div className="text">{data.team?.name}</div>
        {!hideLogo && <Mood mood={data.mood} />}
      </div>
      <KPIs kpis={data.kpis?.slice(0, 3) || []}></KPIs>
      <TabPanel>
        <Tabs>
          <Tab disabled={!data.priorities.length} className="text-sm">Priorités</Tab>
          <Tab disabled={!data.needs.length} className="text-sm">Besoins</Tab>
          <Tab disabled={!data.term.length} className="text-sm">Échéances</Tab>
        </Tabs>
        <Panels>
          <div className="markdown-body leading-tight">
            <Markdown remarkPlugins={[remarkGfm]}>{data.priorities}</Markdown>
          </div>
          <div className="markdown-body leading-tight">
            <Markdown remarkPlugins={[remarkGfm]}>{data.needs}</Markdown>
          </div>
          <div className="markdown-body leading-tight">
            <Markdown remarkPlugins={[remarkGfm]}>{data.term}</Markdown>
          </div>
        </Panels>
      </TabPanel>
      <div className="footer">
        <div className="info">
          {data.created_at && format(new Date(data.created_at), "dd/MM/yyyy")}
          {" - "}
          <a
            target="_blank"
            rel="noreferrer"
            className="mr-2"
            href={`https://github.com/${data.author}`}
          >
            {data.author}
          </a>
        </div>
        {editable && (
          <div className="actions divide-x">
            <Button
              title="editer"
              iconId="fr-icon-draft-line"
              priority="tertiary no outline"
              linkProps={{
                href: `/${data.team_slug}/publish/${data.id}`,
              }}
            />
            <Button
              title="supprimer"
              iconId="fr-icon-delete-line"
              priority="tertiary no outline"
              onClick={() => onDeletion(data.id)}
            />
          </div>
        )}
      </div>
    </article>
  );
}
