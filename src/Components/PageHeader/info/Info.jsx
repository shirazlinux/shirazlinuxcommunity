import React from "react";
import InfoItem from "./InfoItem/InfoItem";
import "./Info.css";
export default function Info() {
  const datas = [
    {
      text: "ساعات همایش ",
      num: "۱۲",
    },
    {
      text: "تعداد کارگاه ها",
      num: "۸",
    },
    {
      text: "ظرفیت همایش",
      num: "۱۰۰۰",
    },
    {
      text: "تعداد روز های برگزاری",
      num: "۱",
    },
  ];
  return (
    <div className="info">
      {datas.map((data) => {
        return <InfoItem text={data.text} number={data.num} key={data.num} />;
      })}
    </div>
  );
}
