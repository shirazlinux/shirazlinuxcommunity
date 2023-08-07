import React from "react";
import Date from "./date/Date";
import BtnContainer from "./btnContainer/BtnContainer";
import Info from "./info/Info";
import NavBar from "./navbar/Navbar";
import "./PageHeader.css";

export default function PageHeader() {
  return (
    <>
      <main className="page-header">
        <NavBar navBarColor={"#fff"} />
        <div className="header-contaienr">
          <Date />
          <BtnContainer />
        </div>
        <Info />
      </main>
    </>
  );
}
