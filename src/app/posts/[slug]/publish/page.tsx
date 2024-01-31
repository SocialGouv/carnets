import { getServerSession } from "next-auth";
import Wizard from "./_components/wizard";
import authOptions from "@/app/api/auth/[...nextauth]/options";

import "./styles.css";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const session = await getServerSession(authOptions);
  return (
    <main className="publish-page">
      <Wizard author={session?.user.login} slug={slug} />
    </main>
  );
}
