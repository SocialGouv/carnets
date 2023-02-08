import useSWRImmutable from "swr/immutable"

import fetcher from "@/utils/fetcher"
import { getStat } from "@/queries/index"

const useStats = (): Stats[] => {
  const { data = {} } = useSWRImmutable(getStat, fetcher)

  return [data] as Stats[]
}

export default useStats
