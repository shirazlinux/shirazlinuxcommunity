import React from "react";
import Navbar from "../PageHeader/navbar/Navbar";
import TeamHeaderInfoBox from "./TeamHeaderInfoBox/TeamHeaderInfoBox";
import "./TeamHeader.css";
export default function TeamHeader() {
  return (
    <header className="team__header">
      <h1 className="team__header-title">تیم اجرایی همایش</h1>
      <div className="team__header-container">
        <div className="team__header-container__right">
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد
          </p>
          <div className="team__header-container__right-buttons">
            <TeamHeaderInfoBox text={"طراحی سایت"} />
            <TeamHeaderInfoBox text={"برگزاری رویداد‌ها"} />
            <TeamHeaderInfoBox text={"کارگاه آموزشی"} />
          </div>
        </div>
        <div className="team__header-container__left">
          <img src="team/teamPic.webp" alt="" />
        </div>
      </div>
    </header>
  );
}
