import React from "react";
import "./TeamMember.css";

function TeamMember(props) {
  const { editMember, member } = props;

  return (
    <div className="member">
      <div>
        <p>
          <span className="bold">Name:</span> {member.name}
        </p>
        <p>
          <span className="bold">Email:</span> {member.email}
        </p>
        <p>
          <span className="bold">Role:</span> {member.role}
        </p>
        <button onClick={editMember} id={member.id} className="btn">
          Edit
        </button>
      </div>
    </div>
  );
}
export default TeamMember;
