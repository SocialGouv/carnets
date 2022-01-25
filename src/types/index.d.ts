type Mood = "good" | "average" | "bad"

interface TeamStatus {
  mood: string
  kpis_count: number
  last_post: string
  team_slug: string
}
interface Stat {
  posts_stat: [
    {
      count: number
      week: number
      year: number
    }
  ]
  teams_status: TeamStatus[]
}

interface Request {
  url: string
  query: string
  token?: string
  params?: Record<string, unknown>
}

interface Team {
  name: string
  slug: string
  avatarUrl: string
  description: string
}

interface KPI {
  id?: string
  name: string
  value: string
}

interface Post {
  mood: Mood
  id?: string
  team?: Team
  kpis?: [KPI]
  term: string
  needs: string
  author?: string
  created_at?: Date
  team_slug?: string
  priorities: string
  editable: boolean
  handlePostDeletion: (
    id: string | undefined
  ) => MouseEventHandler<HTMLButtonElement> | undefined
}
