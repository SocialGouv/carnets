import Posts from "@components/stats/Posts"
import Teams from "@components/stats/Teams"
import fetcher from "@lib/fetcher"
import React from "react"

const Page = ({ teams, postsStat, teamsStatus }) => (
  <>
    <div className="content">
      <div className="stats">
        <Posts data={postsStat} />
        <Teams teams={teams} data={teamsStatus} />
      </div>
    </div>
  </>
)

export async function getServerSideProps({ req }) {
  const baseUrl = `http://localhost:${req.socket.localPort}`
  const { postsStat, teamsStatus } = await fetcher(`${baseUrl}/api/stats`)
  return { props: { postsStat, teamsStatus } }
}

export default Page
