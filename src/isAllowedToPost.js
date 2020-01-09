import fetch from "isomorphic-unfetch";

const token = process.env.GH_TOKEN;
const allowedOrganisation = process.env.GH_ORG || "SocialGouv";

// https://developer.github.com/v3/orgs/members/#check-membership
export const isAllowedToPost = username => {
  return fetch(
    `https://api.github.com/orgs/${allowedOrganisation}/members/${username}?token=${token}`
  )
    .then(r => console.log(r.status) || r.status === 204)
    .catch(() => false);
};
