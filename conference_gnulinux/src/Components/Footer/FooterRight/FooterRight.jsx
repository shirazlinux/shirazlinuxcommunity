import React from "react";
import "./FooterRight.css";
export default function FooterRight() {
  return (
    <div className="footer__right">
      <div className="footer__phone">
        <img src="/main/call-calling.svg" alt="" className="phone__icon" />
        <p className="phone__text">
          شماره تلفن : <a href="tel:+989353554849">۰۹۳۵۳۵۵۴۸۴۹</a>
        </p>
      </div>
      <div className="footer__address">
        <img src="/main/location-footer.svg" alt="" />
        <p className="address__text">
          <a href="https://www.openstreetmap.org/export/embed.html?bbox=52.54342049360276%2C29.625877363735633%2C52.5468134880066%2C29.627915134027926&layer=mapnik&marker=29.62689625403386%2C52.54511699080467">
            شیراز - خیابان حر - تالار فرهنگیان
          </a>
        </p>
      </div>
      <div className="footer__mail">
        <img src="/main/sms-tracking.svg" alt="" />
        <p className="mail__text">
          <a href="mailto:contact@shirazlinuxcommunity.ir">
            contact@shirazlinuxcommunity.ir
          </a>
        </p>
      </div>
      <div className="footer__image">
        <div>
          <a href="https://www.openstreetmap.org/export/embed.html?bbox=52.54342049360276%2C29.625877363735633%2C52.5468134880066%2C29.627915134027926&layer=mapnik&marker=29.62689625403386%2C52.54511699080467"></a>
        </div>
        <div className="footer__image">
          <iframe
            className="footer__image"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=52.54342049360276%2C29.625877363735633%2C52.5468134880066%2C29.627915134027926&amp;layer=mapnik&amp;marker=29.62689625403386%2C52.54511699080467"
          ></iframe>
        </div>
      </div>
      <p className="footer__designed">
        <img src="/main/heart.svg" alt="" />
        طراحی شده با عشق
        <img src="/main/heart.svg" alt="" />
      </p>
    </div>
  );
}
