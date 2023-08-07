import React from "react";
import NavItem from "./navItem/navItem";
import "./Navbar.css";
import { FiPhoneCall } from "react-icons/fi";
export default function NavBar({ navBarColor }) {
  return (
    <>
      <nav className="navbar">
        <img src="/main/EventLogu.png" alt="event logo" />
        <div className="nav__item-container">
          <NavItem link={"/"} item="خانه" isSpa={true} navColor={navBarColor} />
          <NavItem
            link={"/team"}
            item="تیم اجرایی"
            isSpa={true}
            navColor={navBarColor}
          />
          <NavItem
            link={"#footer"}
            item="لینک‌های مفید"
            isSpa={false}
            navColor={navBarColor}
          />
        </div>
        <a className="nav__link" href="#form">
          <img src="/main/call-calling.svg" alt="" />
          تماس با ما
        </a>
      </nav>
      <nav className="navbar_phone">
        <NavItem link={"/"} item="خانه" isSpa={true} navColor={navBarColor} />
        <NavItem
          link={"/team"}
          item="تیم اجرایی"
          isSpa={true}
          navColor={navBarColor}
        />
        <NavItem
          link={"#footer"}
          item="لینک‌های مفید"
          isSpa={false}
          navColor={navBarColor}
        />
      </nav>
    </>
  );
}
