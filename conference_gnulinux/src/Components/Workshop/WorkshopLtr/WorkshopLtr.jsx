import React from 'react'
import './WorkshopLtr.css'
export default function WorkshopLtr({workShop, workShopDescription, icon}) {
  return (
    <div className="ltr-workshop">
    <div className="ltr-right">
      <h2 className="ltr__title">کارگاه {workShop}</h2>
      <p className='ltr__description'>{workShopDescription}</p>
    </div>

    
      <img src={icon} alt={icon} className='ltr__image'/>
    </div>

    )
}
