import React from 'react'
import './InfoItem.css'
export default function InfoItem({text, number}) {
  return (
    <div className='info-item'>
      <span className="info-item_number">{number}</span>
      <span className="info-item_text">{text}</span>
    </div>
  )
}
