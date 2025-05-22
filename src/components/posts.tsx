"use client";

import { useState } from "react";
import Post from "@/components/post";
import { useRouter } from "next/navigation";
import deletePost from "@/actions/delete-post";
import Button from "@codegouvfr/react-dsfr/Button";
import SpinnerIcon from "@/components/icons/spinner-icon";
import { createModal } from "@codegouvfr/react-dsfr/Modal";

const modal = createModal({
  id: "delete-post",
  isOpenedByDefault: false,
});

export default function Posts({
  posts,
  editable = false,
  hideLogos = false,
}: {
  posts: Post[];
  editable?: boolean;
  hideLogos?: boolean;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string>();

  async function handleDeletion() {
    setIsLoading(true);
    await deletePost(postToDelete);
    setPostToDelete(undefined);
    router.refresh();
    setIsLoading(false);
    modal.close();
  }

  function showModal(id?: string) {
    if (id) {
      setPostToDelete(id);
      modal.open();
    }
  }

  return (
    <section className="posts gap-y-4">
      <modal.Component title="Suppression">
        <div className="relative">
          <div className={`${isLoading ? "invisible" : ""}`}>
            <p className="my-8">
              Êtes-vous sur de vouloir supprimer cette publication ?
            </p>
            <Button
              title="supprimer"
              priority="primary"
              onClick={handleDeletion}
              iconId="fr-icon-delete-line"
              // TODO: make this button redish
              // className="bg-[#c9191e] dark:bg-[#f95c5e] dark:text-[#2b1919] text-[#fef4f4] hover:dark:text-[#f95c5e] hover:dark:bg-[#f95c5e] hover:text-[#c9191e] hover:bg-[#c9191e]"
            >
              Supprimer
            </Button>
          </div>
          {isLoading && (
            <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
              <div className="animate-spin w-24 h-24">
                <SpinnerIcon />
              </div>
            </div>
          )}
        </div>
      </modal.Component>
      {posts &&
        posts.map((post, i) => (
          <Post
            key={i}
            data={post}
            editable={editable}
            hideLogo={hideLogos}
            onDeletion={showModal}
          />
        ))}
    </section>
  );
}
