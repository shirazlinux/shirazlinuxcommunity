import React from "react";
import "./navItem.css";
import { Link } from "react-router-dom";
export default function NavItem({ item, link, isSpa, navColor }) {
  return !isSpa ? (
    <a href={link} className="nav-item" style={{ color: navColor }}>
      {item}
    </a>
  ) : (
    <Link to={link} className="nav-item" style={{ color: navColor }}>
      {item}
    </Link>
  );
}
