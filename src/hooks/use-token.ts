import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

const useToken = (): [string] => {
  const { data = {} } = useSWR("/api/auth/token", fetcher, {
    revalidateOnFocus: false,
  })

  const { token } = data

  return [token]
}

export default useToken