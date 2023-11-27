"use server";

// import { z } from 'zod'

import type { KPI } from "@/app/posts/[slug]/publish/_components/kpis";
import { defaultData } from "@/app/posts/[slug]/publish/_components/wizard";
import { createPost } from "@/queries";
import fetcher from "@/utils/fetcher";

import { auth } from "auth";

export async function addPost(prevState: any, formData: FormData) {
  // const values = formData.entries();
  // console.log("values", values);

  // const data = {} as typeof defaultData;
  // formData.forEach((value, key) => {
  //   data[key] = value;
  // });
  const session = await auth();
  console.log("SERVER SESSION", session);

  const post = {
    needs: formData.get("needs"),
    term: formData.get("term"),
    priorities: formData.get("priorities"),
    mood: formData.get("mood"),
  };

  const kpis = {
    data: JSON.parse(formData.get("kpis") as string).filter(
      (kpi: KPI) => kpi.name && kpi.name.length,
    ),
  };

  const slug = formData.get("slug");

  console.log("addPost - FormData", post, kpis, slug);

  await fetcher(createPost, undefined, {
    post: {
      ...post,
      kpis,
      team_slug: formData.get("slug"),
      author: "gary-van-woerkens",
      // author: session?.user.login,
    },
  });

  // const kpis = {
  //   data: JSON.parse(data.kpis || "[]").filter(
  //     (kpi: KPI) => kpi.name && kpi.name.length,
  //   ),
  // };
  // await fetcher(createPost, token, {
  //   post: { ...post, kpis, team_slug: slug, author: session?.user.login },
  // });

  // const schema = z.object({
  //   todo: z.string().min(1),
  // });
  // const parse = schema.safeParse({
  //   todo: formData.get("todo"),
  // });

  // if (!parse.success) {
  //   return { message: "Failed to create todo" };
  // }

  // const data = parse.data;

  // try {
  //   await sql`
  //   INSERT INTO todos (text)
  //   VALUES (${data.todo})
  // `;

  //   revalidatePath("/");
  //   return { message: `Added todo ${data.todo}` };
  // } catch (e) {
  //   return { message: "Failed to create todo" };
  // }
  return { message: "Votre publication a été enregistrée avec succès !" };
}
