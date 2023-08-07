import React from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import AboutEvent from "../../Components/AboutEvent/AboutEvent";
import SpecialGuest from "../../Components/SpecialGuest/SpecialGuest";
import Workshop from "../../Components/Workshop/Workshop";
import Offers from "../../Components/Offers/Offers";
import Question from "../../Components/Question/Question";
import Footer from "../../Components/Footer/Footer";
import "./Main.css";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const payment = urlParams.get("payment");
    console.log(urlParams)
    if(payment) {
      navigate('/payment/' + code);
    }
  }, []);
  return (
    <div className="main">
      <PageHeader />
      <AboutEvent />
      <SpecialGuest />
      <Workshop />
      <Offers />
      <Question />
      <Footer />
    </div>
  );
}
