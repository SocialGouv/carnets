import auth0 from "../../../src/lib/auth0";
import { fetch } from "../../../src/lib/hasura";
import { isAllowedToPost } from "../../../src/isAllowedToPost";

export default async (req, res) => {
  try {
    if (req.method !== "POST") {
      res.status(405);
      throw new Error("Wrong method");
    }

    const { user } = (await auth0.getSession(req)) || {};

    console.log("USER:", user);

    if (!user) {
      res.status(401);
      throw new Error("Unknown user");
    }

    const granted = await isAllowedToPost(user.nickname);

    if (!granted) {
      res.status(401);
      throw new Error(`User ${user.name} not granted to SocialGouv`);
    }

    const query = `
      mutation insert_posts($objects: [posts_insert_input!]!) {
        insert_posts(objects: $objects) {
          returning {
            id
          }
        }
      }
    `;

    req.body.kpis = { data: req.body.kpis.filter(kpi => kpi.name.length) };

    const variables = {
      objects: [req.body]
    };

    await fetch(query, variables);
  } catch (e) {
    console.error(e);
    if (res.statusCode < 400) {
      res.status(500);
    }
  }

  res.send(null);
};
