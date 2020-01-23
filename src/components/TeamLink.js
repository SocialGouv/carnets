import React from "react";
import Link from "next/link";
import teams from "../lib/teams";

const NewsCard = ({ name, id }) => {
  return (
    <Link href="/teams/[team]" as={`/teams/${id}`} passHref>
      <a>{name || (teams.getById(id) || {}).name || id}</a>
    </Link>
  );
};

export default NewsCard;
