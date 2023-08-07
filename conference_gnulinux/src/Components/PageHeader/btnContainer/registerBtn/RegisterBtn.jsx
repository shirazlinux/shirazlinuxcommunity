import React from "react";
import "./RegisterBtn.css";
import { Link } from "react-router-dom";
export default function RegisterBtn() {
  return (
    <Link to={"/team"}>
      <div className="btn-register">
        <img src="main/registerIcon.svg" alt="" />
        اعضای تیم
      </div>
    </Link>
  );
}
