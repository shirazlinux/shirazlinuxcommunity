import React from 'react'
import RegisterBtn from './registerBtn/RegisterBtn'
import QuestionBtn from './questionBtn/QuestionBtn'
import './BtnContainer.css'
export default function BtnContainer() {
  return (
      <div className="btn-container">
            <RegisterBtn/>
            <QuestionBtn/>
      </div>
      )
}
