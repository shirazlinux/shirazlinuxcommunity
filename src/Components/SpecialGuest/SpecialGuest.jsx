import React from 'react'
import SpecialGuestTitle from './SpecialGuestTitle/SpecialGuestTitle'
import SpecialGuestSlider from './SpecialGuestSlider/SpecialGuestSlider'
import './SpecialGuest.css'
export default function SpecialGuest() {
  return (
    <section className='special-guest'>
      <SpecialGuestTitle/>
      <SpecialGuestSlider/>
    </section>
  )
}
