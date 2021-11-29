import useSWRImmutable from "swr/immutable"

import fetcher from "@/utils/fetcher"
import useToken from "@/services/token"
import { getStat } from "@/queries/index"

const useStat = (): [Stat] => {
  const [token] = useToken()

  const { data = {} } = useSWRImmutable(
    token ? [getStat, token] : null,
    fetcher
  )

  return [data] as [Stat]
}

export default useStat
