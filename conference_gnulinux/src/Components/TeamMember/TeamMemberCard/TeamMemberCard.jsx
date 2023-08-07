import React from "react";
import "./TeamMemberCard.css";
import { GrMail } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
export default function TeamMemberCard({
  gmail,
  linkedin,
  name,
  job,
  photo,
  isActive,
}) {
  return (
    <div
      className={isActive ? "team-section_card active" : "team-section_card"}
    >
      <div className="team-section_card-image-container">
        <img className="team-section_card-image" src={photo} alt={name} />
        <div className="team-section_card-socialmedia_container">
          {gmail && (
            <a
              href={`mailto:${gmail}`}
              target="_blank"
              className="team-section_card-socialmedia"
            >
              <GrMail className="socialmedia_icon" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              className="team-section_card-socialmedia"
            >
              <FaLinkedinIn className="socialmedia_icon" />
            </a>
          )}
        </div>
      </div>
      <h4 className="team-section_card-header">{name}</h4>
      <p className="team-section_card-text">{job}</p>
    </div>
  );
}
