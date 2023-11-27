import Button from "@codegouvfr/react-dsfr/Button";
import { SignIn } from "@/components/auth-components";
import { auth } from "auth";

// import jwt from "@auth/core/jwt";

export default async function Home() {
  const session = await auth();
  // const token = await jwt.getToken();
  console.log("SESSION", session);

  return (
    <>
      HOME
      <Button
        priority="secondary"
        // iconId="fr-icon-add-circle-line"
        linkProps={{ href: `/posts` }}
      >
        Go to POSTS !
      </Button>
      {session?.user ? <div>{session.user.name}</div> : <SignIn />}
      {/* <aside className="flex-initial w-80">
        <Teams />
      </aside>
      <main className="flex-1">
        <Posts />
      </main> */}
    </>
  );
}
