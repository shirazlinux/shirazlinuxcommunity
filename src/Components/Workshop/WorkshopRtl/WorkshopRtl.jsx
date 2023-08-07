import React from 'react'
import './WorkshopRtl.css'
export default function WorkshopRtl({workShop , workShopDescription, icon}) {
  return (
    <div className="rtl-workshop">
    <div className="rtl-right">
      <h2 className="rtl__title">کارگاه {workShop}</h2>
      <p className='rtl__description'>{workShopDescription}</p>
    </div>

    
      <img src={icon} alt={icon} className='rtl__image'/>
    </div>
  )
}
