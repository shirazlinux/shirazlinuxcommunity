import React from 'react'
import AboutDesc from './AboutDesc/AboutDesc';
import AboutPhoto from './AboutPhoto/AboutPhoto';
import AboutTitle from './AboutTitle/AboutTitle';
import './AboutEvent.css'
export default function AboutEvent() {
  return (
    <section className='about'>
      <div className="about__right">
            <AboutTitle/>
            <AboutDesc/>
      </div>
      <div className="about__left">
            <AboutPhoto/>
      </div>
      <div className="about__phone">
        <AboutTitle/>
        <AboutPhoto/>
        <AboutDesc/>
      </div>
    </section>
  )
}
