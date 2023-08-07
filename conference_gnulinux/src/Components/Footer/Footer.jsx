import React from "react";
import FooterRight from "./FooterRight/FooterRight";
import FooterMiddle from "./FooterMiddle/FooterMiddle";
import FooterLeft from "./FooterLeft/FooterLeft";

import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <section className="footer__container">
        <FooterRight />
        <section className="footer__container-left">
          <div className="footer__container-left__main">
            <FooterMiddle />
            <FooterLeft />
          </div>
          <div className="footer__rights-container">
            <p className="rights">
              کلیه حقوق مادی و معنوی این سایت متعلق به{" "}
              <a href="https://shirazlinuxcommunity.ir/" target="_blank">
                تیم اجرایی
              </a>{" "}
              می‌باشد
            </p>
            <div className="socials">
              <a href="https://www.instagram.com/shirazlinux/">
                <img src="main/instagram.svg" alt="اینستاگرام " />
              </a>

              <a href="https://t.me/gnulinux_ir">
                <img src="main/send-2.svg" alt="تلگرام جامعه لینوکس شیراز" />
              </a>
            </div>
          </div>
        </section>
      </section>
    </footer>
  );
}
