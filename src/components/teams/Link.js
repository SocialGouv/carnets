import React from "react";
import Link from "next/link";

const NewsCard = ({ name, slug }) => {
  return (
    <Link href="/teams/[team]" as={`/teams/${slug}`} passHref>
      <a className="team flex-fill">{name}</a>
    </Link>
  );
};

export default NewsCard;
