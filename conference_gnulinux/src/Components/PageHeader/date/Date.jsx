import React from "react";
import Timer from "./timer/Timer";
import "./Date.css";
export default function Date() {
  return (
    <div className="date-container">
      <h2 className="date">پنج‌شنبه ۱۴۰۲/۰۴/۲۲</h2>
      <Timer />
    </div>
  );
}
