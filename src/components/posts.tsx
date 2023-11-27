// import { useSession } from "next-auth/client";

import Post, { type Post as PostType } from "@/components/post";
import fetcher from "@/utils/fetcher";
// import useToken from "@/hooks/use-token";
import { deletePost as deletePostQuery } from "../queries";
import { fetchTeams } from "./teams";
import { getLastPosts, getTeamPosts } from "@/queries/index";

// const Posts = ({ posts }: { posts: Post[] }) => {
// const [token] = useToken();
// const [session] = useSession();

// const isAuthorized = (slug: string) =>
//   session?.user.role === "admin" || session?.user.teams.includes(slug)
//     ? true
//     : false;

// const deletePost = async (id: string | undefined) => {
//   if (id) {
//     await fetcher(deletePostQuery, token, { id });
//   }
// };

type Data = Record<"posts", []>;

async function fetchLastPosts(): Promise<PostType[]> {
  const teams = await fetchTeams();
  const slugs = teams?.map(({ slug }: { slug: string }) => slug);
  console.log({ slugs });
  const data = (await fetcher(getLastPosts, undefined, {
    slugs,
  })) as Data;

  return Array.isArray(data) ? data : data?.posts;
}

async function fetchTeamPosts(slug: string): Promise<PostType[]> {
  const data = (await fetcher(getTeamPosts, undefined, {
    slug,
  })) as Data;

  return Array.isArray(data) ? data : data?.posts;
}

export default async function Posts({ slug }: { slug?: string }) {
  const posts = slug ? await fetchTeamPosts(slug) : await fetchLastPosts();
  // console.log({ posts });

  return (
    <section className="posts grid lg:grid-cols-1 xl:grid-cols-2">
      {posts &&
        posts.map((post, i) => (
          <Post
            key={i}
            data={post}
            editable={false}
            handlePostDeletion={() => ({})}
            // editable={isAuthorized(String(post.team_slug))}
            // handlePostDeletion={() => deletePost(post.id)}
          />
        ))}
    </section>
  );
}

// export default Posts;
