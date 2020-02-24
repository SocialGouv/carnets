import React from "react";
import moment from "moment";

moment.locale("fr");

const Footer = ({ post }) => (
  <div className="card-footer">
    <span className="date">
      {moment(post.created_at).fromNow()}&nbsp;par&nbsp;
    </span>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://github.com/${post.author}`}
    >
      {post.author}
    </a>
  </div>
);

export default Footer;
