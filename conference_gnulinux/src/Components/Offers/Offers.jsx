import React, { useState } from "react";
import "./Offers.css";
export default function Offeers() {
  const [name, useName] = useState("");
  const [lastname, useLastname] = useState("");
  const [phoneNum, usePhoneNum] = useState("");
  const [desc, useDesc] = useState("");
  const submitHandeler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="offer">
      <form className="form" onSubmit={submitHandeler}>
        <label className="form__label"> نظرات و پیشنهادات</label>
        <h3 className="form__title">
          برای بهبود عملکرد ما هر‌ گونه پیشنهاد و نظری که دارید رو میتونید با ما
          به اشتراک بزارید
        </h3>

        <div className="form__container">
          <div className="form__right-input">
            <input
              className="form__input"
              onChange={(e) => useName(e.target.value)}
              type="text"
              placeholder="نام"
            />
            <input
              className="form__input"
              onChange={(e) => useLastname(e.target.value)}
              type="text"
              placeholder="نام خانوادگی"
            />
            <input
              className="form__input"
              onChange={(e) => usePhoneNum(e.target.value)}
              type="text"
              placeholder="ایمیل یا شماره موبایل"
            />
            <button className="form__input-submit" type="submit">
              ارسال
            </button>
          </div>
          <div className="form__left">
            <textarea
              className="form__textarea"
              placeholder="متن خود را وارد کنید"
              onChange={(e) => useDesc(e.target.value)}
            ></textarea>
          </div>
          <div className="form__phone">
            <input
              className="form__input"
              onChange={(e) => useName(e.target.value)}
              type="text"
              placeholder="نام"
            />
            <input
              className="form__input"
              onChange={(e) => useLastname(e.target.value)}
              type="text"
              placeholder="نام خانوادگی"
            />
            <input
              className="form__input"
              onChange={(e) => usePhoneNum(e.target.value)}
              type="text"
              placeholder="ایمیل یا شماره موبایل"
            />
            <textarea
              className="form__textarea"
              placeholder="متن خود را وارد کنید"
              onChange={(e) => useDesc(e.target.value)}
            ></textarea>
            <input className="form__input-submit" type="submit" value="ارسال" />
          </div>
        </div>
      </form>
    </div>
  );
}
