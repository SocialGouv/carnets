import { NextPage } from "next"

import PostForm from "@/components/post-form"

const PublishPage: NextPage = () => (
  <div className="flex flex-1 container mx-auto py-10">
    <main className="flex flex-1">
      <PostForm />
    </main>
  </div>
)

export default PublishPage
