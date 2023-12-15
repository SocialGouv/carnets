type Mood = "good" | "average" | "bad";

interface GithubTeam {
  id: string;
  name: string;
  slug: string;
}

interface Member {
  url: string;
  name: string;
  login: string;
  avatarUrl: string;
}
interface Team {
  name: string;
  slug: string;
  avatarUrl: string;
  description: string;
  members: {
    nodes: Member[];
  };
}

interface Post {
  mood: Mood;
  id?: string;
  team?: Team;
  kpis?: KPI[];
  term: string;
  needs: string;
  author?: string;
  created_at?: Date;
  team_slug?: string;
  priorities: string;
}

interface KPI {
  id?: string;
  name: string;
  value: string;
}
