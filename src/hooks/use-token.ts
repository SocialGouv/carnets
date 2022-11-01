import useSWR from "swr"
// import { useSession } from "next-auth/client"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const useToken = (): [string] => {
  // const [session] = useSession()

  // const { data = {} } = useSWR(session ? "/api/auth/token" : null, fetcher, {
  //   revalidateOnFocus: false,
  // })

  const { data = {} } = useSWR("/api/auth/token", fetcher, {
    revalidateOnFocus: false,
  })

  const { token } = data

  return [token]
}

export default useToken
