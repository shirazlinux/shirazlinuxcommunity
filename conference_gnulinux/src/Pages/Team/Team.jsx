import React from "react";
import TeamHeader from "../../Components/TeamHeader/TeamHeader";
import TeamAbout from "../../Components/TeamAbout/TeamAbout";
import Footer from "../../Components/Footer/Footer";
import TeamMember from "../../Components/TeamMember/TeamMember";
export default function Team() {
  return (
    <>
      <TeamAbout />
      <TeamMember />
      <Footer />
    </>
  );
}
