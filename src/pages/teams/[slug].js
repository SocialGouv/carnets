import React from "react"
import Nav from "../../components/Nav"
import fetcher from "../../lib/fetcher"
import { TeamsContext } from "../../lib/teams"
import Content from "../../components/Content"

const Page = ({ teams }) => (
  <TeamsContext.Provider value={teams}>
    <Nav />
    <Content />
  </TeamsContext.Provider>
)

export async function getServerSideProps({ req, params, query }) {
  console.log("getServerSideProps:", params, query)
  const url = `http://localhost:${req.socket.localPort}/api/teams`
  const teams = await fetcher(url)
  return { props: { teams } }
}

export default Page
