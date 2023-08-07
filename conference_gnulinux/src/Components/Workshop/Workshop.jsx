import React from "react";
import WorkshopTitle from "./WorkshopTitle/WorkshopTitle";
import WorkshopRtl from "./WorkshopRtl/WorkshopRtl";
import Workshopltr from "./WorkshopLtr/WorkshopLtr";

import "./Workshop.css";
export default function Workshop() {
  return (
    <div className="workshop">
      <WorkshopTitle />
      <WorkshopRtl
        workShop={"آشنایی با گو (Go)"}
        icon={"main/golangB.svg"}
        workShopDescription={
          "گو (Go) زبان برنامه نویسی ساخت گوگل که در نوامبر 2009 معرفی شده و حالا در چند سیستم اجرایی گوگل استفاده میشه. شباهت زیادی با C داره و البته در توسعه بلاکچین هم کاربرد زیادی داره."
        }
      />
      <Workshopltr
        workShop={"ابزارهایی برای تبدیل شدن به full stack developer"}
        icon={"main/stack.png"}
        workShopDescription={
          "معمولا یک تیم یا یک نفر کار ظاهر رو انجام میده و یک تیم یا یک نفر کار منطق پشتش رو، اگر یک نفر این دو کار رو با هم انجام بده، بهش توسعه دهنده Fullstack میگن. مشخصا باید از ابزار‌هایی استفاده کرد، اینجا بررسی می‌کنیم."
        }
      />
      <WorkshopRtl
        workShop={"توسعه نرم افزار با رویکرد test driven Development"}
        icon={"main/backend.png"}
        workShopDescription={
          "TDD یا Test Driven Development پارادایمی در دنیای نرم‌افزار است که مبتنی بر Unit test است اما نباید با آن اشتباه گرفته شود. جالب این که، عزیزان برنامه نویس در رویکرد TDD قبل از نوشتن کد نویسی تست نویسی می‌کنند…!!!"
        }
      />
      <Workshopltr
        workShop={"نصب پیکربندی و بکارگیری QEMU/KVM"}
        icon={"main/Qemu_logo.svg"}
        workShopDescription={
          "در دنیای Open Source برنامه‌های مهمی تحت عنوان هایپروایزر وجود دارند که برای مدیریت امور مجازی سازی استفاده میشن. برنامه QEMU/KVM هم از بهترین مجازی‌ساز‌های متن‌باز موجود هست."
        }
      />
      <WorkshopRtl
        workShop={"راه اندازی کلاستر کوپرنیتز با استوریج سف"}
        icon={"main/Kubernetes_logo.svg"}
        workShopDescription={
          "K8S یا به قول حرفه‌ای‌ها Kubernetes پلتفرمی متن‌باز است که فرآیند‌های خودکارسازی و کانفیگ اپلیکیشن‌ها رو ساده‌تر میکنه، اسمش ریشه یونانی داره به معنی سکان‌دار. تمام اجزاء کوبرنتیس در کلاستر پیکربندی میشه و بنظر استفاده از نرم‌افزار ذخیره‌ساز متن‌باز در این ترکیب نتیجه جالبی داشته باشه. اینجا Ceph همون ذخیره سازی هست که در موردش صحبت خواهیم کرد."
        }
      />
      <Workshopltr
        workShop={"سفر درون DNS ها"}
        icon={"main/dns.png"}
        workShopDescription={
          "اگر شما سایتی ایجاد کنید، برای اشاره به آن باید یک نام انتخاب کنید و برای معرفی آن به کامپیوترها باید یک IP داشته باشد، پروتکل DNS یا Domain Name System وظیفه تبدیل اسم دامنه به آدرس IP یا عکس این عملیات را دارد که البته در تعریف ساده و در عمل پیچیده است."
        }
      />
      <WorkshopRtl
        workShop={"لینوکس برای مبتدیان"}
        icon={"main/linuxicon.png"}
        workShopDescription={
          "پنگوئن داستان ما Linux سیستم عامل متن‌باز محبوب برنامه نویسان هست که جانشین نسخه گران قیمت‌تر یعنی Unix شد و شناختن اون امروز برای اهل فناوری یک‌جورایی الزام محسوب میشه."
        }
      />

      {/* <Workshopltr workShop={''} icon={''} workShopDescription={''}/> */}
    </div>
  );
}
