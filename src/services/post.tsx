import useSWR from "swr"
import { useEffect } from "react"

import fetcher from "@/utils/fetcher"
import useToken from "@/services/token"
import {
  getPost,
  updatePost as updatePostQuery,
  createPost as createPostQuery,
} from "@/queries/index"

const usePost = (
  id: string | undefined
): [Post, (data: Post) => void, (post: Post) => void, (post: Post) => void] => {
  const [token] = useToken()

  const { data: { posts: [post] = [] } = {}, mutate } = useSWR(
    [id, getPost, token],
    (id, getPost, token) => fetcher(getPost, token, { id }),
    { revalidateOnFocus: false }
  )

  useEffect(() => {
    mutate()
  }, [mutate])

  const setPost = (post: Post) => {
    mutate({ posts: [post] }, false)
  }

  const createPost = (post: Post) => fetcher(createPostQuery, token, { post })

  const updatePost = (post: Post) => {
    const { id } = post
    delete post.id
    delete post.kpis
    delete post.team
    delete post.author
    delete post.team_slug
    delete post.created_at
    return fetcher(updatePostQuery, token, { id: id, post })
  }

  return [post, setPost, updatePost, createPost]
}

export default usePost
