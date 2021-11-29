import { useSession } from "next-auth/client"

const User = () => {
  const [session] = useSession()

  return (
    <>
      {session?.user && (
        <div
          title={session.user.name}
          className="w-8 h-8 bg-cover rounded shadow"
          style={{ backgroundImage: `url(${session.user.image})` }}
        ></div>
      )}
    </>
  )
}

export default User
