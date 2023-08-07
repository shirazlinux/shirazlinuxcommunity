import React from "react";
import "./FooterMiddle.css";
export default function FooterMiddle() {
  return (
    <div className="footer__middle">
      <img src="main/EventLogu.png" alt="" className="footer__logo" />
      <div className="footer__news">
        <h2 className="news__title">ایمیل خود را وارد کنید</h2>

        <h3 className="news__desc">
          با عضویت در خبرنامه از جدیدترین اخبار همایش مطلع شوید
        </h3>
        <div className="input__container">
          <input
            type="text"
            id="news"
            className="news__input"
            placeholder="ایمیل"
          />
          <label htmlFor="news" className="news__label">
            ارسال
          </label>
        </div>
      </div>
    </div>
  );
}
