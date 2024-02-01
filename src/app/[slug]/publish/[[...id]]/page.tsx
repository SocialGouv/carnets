import getPost from "@/actions/get-post";
import Wizard from "./_components/wizard";
import { getServerSession } from "next-auth";
import authOptions from "@/app/api/auth/[...nextauth]/options";

import "./styles.css";

export default async function Page({
  params: { slug, id },
}: {
  params: { slug: string; id: string[] };
}) {
  const post = await getPost(id?.pop());
  const session = await getServerSession(authOptions);

  return (
    <main className="publish-page">
      {session && (
        <Wizard author={session.user.login} slug={slug} post={post} />
      )}
    </main>
  );
}
