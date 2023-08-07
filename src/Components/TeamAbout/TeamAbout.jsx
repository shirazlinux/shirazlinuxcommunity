import React from "react";
import TeamAboutInfo from "./TeamAboutInfo/TeamAboutInfo";
import "./TeamAbout.css";
import NavBar from "../PageHeader/navbar/Navbar";
export default function TeamAbout() {
  return (
    <>
      <div className="navbar-container">
        <NavBar navBarColor={"#000"} />
      </div>

      <header className="team__about">
        <div className="team__about-right">
          <img src="team/team_photo.webp" alt="" />
        </div>
        <div className="team__about-left">
          <h2 className="team__about-left_title">
            همایش بزرگ گنو/لینوکس شیراز
          </h2>
          <p className="team__about-left_description">
            {" "}
            گنو/لینوکس یعنی آزادی، یعنی حق انتخاب و علاقه‌مندی به یادگیری و
            پیشرفت بدون حد و مرز!<br></br>
            گنو/لینوکس با هدف ترویج آزادی، این امکان را فراهم می‌کند که کاربران
            با توجه به نیاز خود، سیستم عامل خود را شخصی سازی کنند و بدون هیچ
            محدودیتی، آن را کنترل کنند. <br></br>
            همایش گنو/لینوکس با هدف گردآوری فعالان و علاقه‌مندان به این حوزه، در
            شهر شیراز مهد فرهنگ و هنر ایران زمین، میزبان شما خواهد بود تا ضمن
            افتخار دیدار با شما بتوانیم در فضای به وجود آمده خالق تجربه‌ای
            سودمند و کم نظیر باشیم. <br></br>
            منتظر شما هستیم برای کاهش فاصله‌ها و افزایش دانسته‌ها.
          </p>
          <div className="team__about-left_container">
            <TeamAboutInfo innerText={"+۱۲ کارگاه"} />
            <TeamAboutInfo innerText={"+۱۸ مربی"} />
            <TeamAboutInfo innerText={"+۱۰۰۰ نفر دانش‌پذیز"} />
          </div>
        </div>
      </header>
    </>
  );
}
