import useSWRImmutable from "swr/immutable"

import fetcher from "@/utils/fetcher"
import useToken from "@/hooks/use-token"
import { getStat } from "@/queries/index"

const useStats = (): Stats[] => {
  const [token] = useToken()

  const { data = {} } = useSWRImmutable(
    token ? [getStat, token] : null,
    fetcher
  )

  return [data] as Stats[]
}

export default useStats
