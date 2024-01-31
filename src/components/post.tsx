"use client";

import Image from "next/image";
import { format } from "date-fns";
import remarkGfm from "remark-gfm";
import Markdown from "react-markdown";
import Button from "@codegouvfr/react-dsfr/Button";
import KPIs, { type KPI } from "@/components/common/kpis";
import { createModal } from "@codegouvfr/react-dsfr/Modal";
import Mood, { type Mood as MoodType } from "@/components/common/mood";
import TabPanel, { Tab, Tabs, Panels } from "@/components/common/tab-panel";

export interface Post {
  mood: MoodType;
  id?: string;
  team?: Team;
  kpis?: KPI[];
  term: string;
  needs: string;
  author?: string;
  created_at?: Date;
  team_slug?: string;
  priorities: string;
}

const modal = createModal({
  id: "foo-modal",
  isOpenedByDefault: false,
});

export default function Post({
  data,
  editable,
  hideLogo,
  handlePostDeletion,
}: {
  data: Post;
  editable: boolean;
  hideLogo: boolean;
  handlePostDeletion: () => void;
}) {
  return (
    <>
      <modal.Component title="Suppression">
        <p className="my-8">
          Êtes-vous sur de vouloir supprimer cette publication ?
        </p>
        <Button
          title="supprimer"
          priority="primary"
          iconId="fr-icon-delete-line"
          // className="bg-[#c9191e] dark:bg-[#f95c5e] dark:text-[#2b1919] text-[#fef4f4] hover:dark:text-[#f95c5e] hover:dark:bg-[#f95c5e] hover:text-[#c9191e] hover:bg-[#c9191e]"
          onClick={handlePostDeletion}
        >
          Supprimer
        </Button>
      </modal.Component>

      <article className="post">
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
            <Tab disabled={!data.priorities.length}>Priorités</Tab>
            <Tab disabled={!data.needs.length}>Besoins</Tab>
            <Tab disabled={!data.term.length}>Échéances</Tab>
          </Tabs>
          <Panels>
            <div className="markdown-body">
              <Markdown remarkPlugins={[remarkGfm]}>{data.priorities}</Markdown>
            </div>
            <div className="markdown-body">
              <Markdown remarkPlugins={[remarkGfm]}>{data.needs}</Markdown>
            </div>
            <div className="markdown-body">
              <Markdown remarkPlugins={[remarkGfm]}>{data.term}</Markdown>
            </div>
          </Panels>
        </TabPanel>
        <div className="footer">
          {editable && (
            <div className="actions divide-x">
              <Button
                title="editer"
                iconId="fr-icon-draft-line"
                priority="tertiary no outline"
                linkProps={{ href: `/team/${data.team_slug}/post/${data.id}` }}
              />
              <Button
                title="supprimer"
                iconId="fr-icon-delete-line"
                priority="tertiary no outline"
                nativeButtonProps={modal.buttonProps}
              />
            </div>
          )}
          <div className="info">
            Publié le{" "}
            {data.created_at && format(new Date(data.created_at), "dd/MM/yyyy")}{" "}
            par&nbsp;
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://github.com/${data.author}`}
            >
              {data.author}
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
