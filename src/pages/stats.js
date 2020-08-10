import Footer from "@components/Footer"
import Nav from "@components/nav/Nav"
import Posts from "@components/stats/Posts"
import Teams from "@components/stats/Teams"
import fetcher from "@lib/fetcher"
import { TeamsContext } from "@lib/teams"
import React from "react"

const Page = ({ teams, postsStat, teamsStatus }) => (
  <TeamsContext.Provider value={teams}>
    <Nav />
    <div className="content">
      <div className="stats">
        <Posts data={postsStat} />
        <Teams teams={teams} data={teamsStatus} />
      </div>
    </div>
    <Footer />
  </TeamsContext.Provider>
)

export async function getServerSideProps({ req }) {
  const baseUrl = `http://localhost:${req.socket.localPort}`
  const { teams } = await fetcher(`${baseUrl}/api/teams`)
  const { postsStat, teamsStatus } = await fetcher(`${baseUrl}/api/stats`)

  return { props: { postsStat, teams, teamsStatus } }
}

export default Page
