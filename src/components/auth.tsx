import { withRouter } from "next/router"
import { signIn, signOut, useSession } from "next-auth/client"

import User from "@/components/user"

const Auth = () => {
  const [session] = useSession()

  return (
    <>
      {!session && (
        <a
          href={`/api/auth/signin`}
          onClick={(e) => {
            e.preventDefault()
            signIn()
          }}
        >
          <i className="ri-login-box-line" />
          Connexion
        </a>
      )}
      {session?.user && (
        <div className="flex items-center">
          <a
            className="mr-4"
            href={`/api/auth/signout`}
            onClick={(e) => {
              e.preventDefault()
              signOut()
            }}
          >
            <i className="ri-logout-box-r-line" />
            Déconnexion
          </a>
          <User />
        </div>
      )}
    </>
  )
}

export default withRouter(Auth)
