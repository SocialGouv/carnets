import React from "react"

const Members = ({ members }) => (
  <div className="members">
    {members.map((member) => (
      <a
        className="member"
        href={member.url}
        key={member.login}
        rel="noopener noreferrer"
        target="_blank"
      >
        <div
          className="avatar"
          title={member.name || member.login}
          style={{ backgroundImage: `url(${member.avatarUrl})` }}
        />
      </a>
    ))}
  </div>
)

export default Members
