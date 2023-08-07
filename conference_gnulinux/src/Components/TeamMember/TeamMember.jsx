import React from "react";
import "./TeamMember.css";
import TeamMemberCard from "./TeamMemberCard/TeamMemberCard";
export default function TeamMember() {
  return (
    <section className="team-section">
      <h2 className="team-section_header">تیم برگزار کننده همایش</h2>
      <p>
        تیم اجرایی همایش گنو/لینوکس به عنوان یک تیم داوطلبانه با هدف برگزاری یک
        همایش با محوریت نرم افزار متن باز تشکیل شده است. این همایش با هدف ارتقای
        دانش و آگاهی در حوزه نرم افزار متن باز، به ارائه راهکارها و تجربیات
        برترین کارشناسان این حوزه می‌پردازد.
      </p>
      <div className="team-section_founder">
        <h3 className="team-section_card-container_header">تیم مدیریت همایش</h3>
        <TeamMemberCard
          linkedin={"https://www.linkedin.com/in/abbas-davarpanah-498013170"}
          name={"عباس داورپناه"}
          job={"برگزار کننده همایش"}
          photo={"/team/abbas-davarpanah.webp"}
          isActive={true}
        />
        <div className="team-section_founder-cards">
          <TeamMemberCard
            linkedin={"https://www.LinkedIn.com/in/farshadfallah"}
            name={"فرشاد فلاح"}
            job={"مدیریت سالن"}
            photo={"/team/farshad-fallah.webp"}
            isActive={false}
          />
          <TeamMemberCard
            name={"علی شاکیان"}
            job={"تیم صحنه"}
            photo={"/team/ali-shakian.webp"}
            isActive={false}
            linkedin={"https://www.linkedin.com/in/ali-shakian/"}
          />

          <TeamMemberCard
            linkedin={"https://www.linkedin.com/mwlite/in/hamoon-gh-174b07168"}
            name={"امیرعباس قهرمانی"}
            job={"مدیریت تیم پذیرش"}
            photo={"/team/amir-abas-ghahremani.webp"}
            isActive={false}
          />
        </div>
      </div>
      <div className="team-section_website">
        <h3 className="team-section_card-container_header">تیم توسعه سایت</h3>
        <div className="team-section_website-cards">
          <TeamMemberCard
            name={"محمدرضا عسکری"}
            job={"طراح سایت"}
            photo={"/team/mohammadreza-askari.webp"}
            isActive={false}
          />
          <TeamMemberCard
            gmail={"poriw.hjt@proton.me"}
            name={"پوریا حاجتی"}
            job={"توسعه دهنده فرانت‌اند"}
            photo={"/team/pouria-hajati.webp"}
            isActive={true}
          />
          <TeamMemberCard
            linkedin={"https://www.linkedin.com/in/amir-khalili-405b531b8"}
            name={"امیر خلیلی"}
            job={"توسعه دهنده بک‌اند"}
            photo={"/team/amir-khalili.webp"}
            isActive={false}
          />
        </div>
      </div>
      <div className="team-section_saloon">
        <h3 className="team-section_card-container_header">تیم سالن</h3>
        <TeamMemberCard
          linkedin={"https://www.LinkedIn.com/in/farshadfallah"}
          name={"فرشاد فلاح"}
          job={"مدیریت سالن"}
          photo={"/team/farshad-fallah.webp"}
          isActive={true}
        />
        <div className="team-section_saloon-cards">
          <TeamMemberCard
            name={"محمد زارع"}
            job={"تیم سالن"}
            photo={"/team/mohammad-zare.webp"}
            linkedin={"https://www.linkedin.com/in/mohammad-zare-7a2288260/"}
            isActive={false}
          />
          <TeamMemberCard
            name={"محمد مهدی میرمحمود"}
            job={"تیم سالن"}
            photo={"/team/mehdi-mir-mahmood.webp"}
            isActive={false}
          />
          <TeamMemberCard
            name={"فاطمه نگهداری"}
            job={"تیم سالن"}
            photo={"/team/fateme-negahdari.webp"}
            linkedin={"https://www.linkedin.com/in/fatemeh-negahdari-1375a4237"}
            isActive={false}
          />
          <TeamMemberCard
            name={"شایان میرزایی"}
            job={"تیم سالن"}
            photo={"/team/shayan-mirzaie.webp"}
            linkedin={"https://www.linkedin.com/in/shayan-mirzaei-13b72527b"}
            isActive={false}
          />
          <TeamMemberCard
            name={"علیرضا فیض آبادی"}
            job={"تیم ورودی سالن"}
            photo={"/team/alireza-feiz-abadi.webp"}
            linkedin={
              "https://www.linkedin.com/in/alireza-feyzabadi-farahani-5a4735209"
            }
            isActive={false}
          />
          <TeamMemberCard
            name={"ساناز نادری"}
            job={"تیم سالن، گرافیست تیم"}
            photo={"/team/sanaz-naderi.webp"}
            linkedin={"https://www.linkedin.com/in/marziye-naderi-a77525262"}
            isActive={false}
          />
          <TeamMemberCard
            name={"علیرضا زارع"}
            job={"تیم سالن"}
            photo={"/team/alireza-zare.webp"}
            linkedin={"https://www.linkedin.com/in/alireza-zare-40b4521b6"}
            isActive={false}
          />
          <TeamMemberCard
            name={"یاسمین کاویانی"}
            job={"تیم سالن"}
            photo={"/team/yasamin-kaviani.webp"}
            linkedin={"https://www.linkedin.com/in/yasaman-kaviani-58a1771a0"}
            isActive={false}
          />
          <TeamMemberCard
            name={"بیتا بیگی"}
            job={"تیم سالن"}
            photo={"/team/bita-beigi.webp"}
            isActive={false}
          />
          <TeamMemberCard
            name={"علی شعبانپور حقیقی"}
            job={"تیم سالن"}
            photo={"/team/ali-shabanpoor.webp"}
            isActive={false}
          />{" "}
          <TeamMemberCard
            name={"سالار خواجه"}
            job={"تیم سالن"}
            photo={"/team/salar-khaje.webp"}
            linkedin={"https://www.linkedin.com/in/salar-khajeh-59482a225"}
            gmail={"salar.khajeh82@gmail.com "}
            isActive={false}
          />
          <TeamMemberCard
            name={"محمدرضا آرین صفت"}
            job={"تیم سالن"}
            photo={"/team/mohammadreza-arian-sefat.webp"}
            isActive={false}
          />{" "}
          <TeamMemberCard
            name={"امیرحسین قائمی"}
            job={"تیم سالن"}
            photo={"/team/amirhosein-ghaemi.webp"}
            isActive={false}
          />
          <TeamMemberCard
            name={"پارسا جوانشیر"}
            job={"تیم سالن"}
            photo={"/team/salar-khaje.webp"}
            linkedin={"https://www.linkedin.com/in/parsa-javanshir-b3aa75239"}
            isActive={false}
          />
          <TeamMemberCard
            name={"فاطمه گشتیل"}
            job={"تیم سالن"}
            photo={"/team/fateme-ghashtil.webp"}
            linkedin={"https://www.linkedin.com/in/fatemeh-gashtil-748616258"}
            isActive={false}
          />
          <TeamMemberCard
            name={"محمد اکرمی"}
            job={"تیم سالن"}
            photo={"/team/mohammad-akrami.webp"}
            instagram={"https://instagram.com/akrami_official4"}
            isActive={false}
          />
        </div>
      </div>
      <div className="team-section_kargah">
        <h3 className="team-section_card-container_header">
          تیم مدیریت کارگاه
        </h3>
        <div className="team-section_kargah-cards">
          <TeamMemberCard
            name={"مهدیه پناهیان"}
            job={"تیم کارگاه"}
            photo={"/team/mahdie-panahian.webp"}
            linkedin={"https://www.linkedin.com/in/mahdie-panahian-a8b4b41a9/"}
            isActive={false}
          />
          <TeamMemberCard
            linkedin={"https://www.linkedin.com/in/amir-khalili-405b531b8"}
            name={"امیر خلیلی"}
            job={"تیم کارگاه"}
            photo={"/team/amir-khalili.webp"}
            isActive={false}
          />
        </div>
      </div>
      <div className="team-section_scene">
        <h3 className="team-section_card-container_header">تیم صحنه</h3>

        <TeamMemberCard
          name={"علی شاکیان"}
          job={"تیم صحنه"}
          photo={"/team/ali-shakian.webp"}
          isActive={true}
          linkedin={"https://www.linkedin.com/in/ali-shakian/"}
        />
        <div className="team-section_scene-cards">
          <TeamMemberCard
            name={"بردیا راسخ"}
            job={"تیم صحنه"}
            photo={"/team/bardia-rasekh.webp"}
            isActive={false}
          />
          <TeamMemberCard
            name={"محمد اقبال"}
            job={"مدیریت تیم صحنه"}
            photo={"/team/mohammad-eghbal.webp"}
            isActive={false}
          />
          <TeamMemberCard
            name={"مهدی ارمی"}
            job={"تیم صحنه"}
            photo={"/team/mehdi-erami.webp"}
            isActive={false}
          />
        </div>
      </div>
      <div className="team-section_reception">
        <h3 className="team-section_card-container_header">تیم پذیرش</h3>
        <TeamMemberCard
          linkedin={"https://www.linkedin.com/in/hamoon-gh-174b07168"}
          name={"امیرعباس قهرمانی"}
          job={"مدیریت تیم پذیرش"}
          photo={"/team/amir-abas-ghahremani.webp"}
          isActive={true}
        />
        <div className="team-section_reception-cards">
          <TeamMemberCard
            linkedin={"https://www.linkedin.com/in/hamoon-gh-174b07168"}
            name={"الهام فیلی زاده"}
            job={" تیم پذیرش"}
            photo={"/team/elham-feili-zade.webp"}
            isActive={false}
          />

          <TeamMemberCard
            linkedin={"https://www.linkedin.com/in/hamoon-gh-174b07168"}
            name={"پارمیدا رفیعی"}
            job={" تیم پذیرش"}
            photo={"/team/parmida-rafie.webp"}
            isActive={false}
          />
        </div>
      </div>
    </section>
  );
}
