import React from 'react'
import './QuestionBox.css'
export default function QuestionBox({question, answer, select, click, index}) {
  return (
    <div className='question-box'>
        <div className="question__title" onClick={()=> click(index)}>
            <h2 className="title">{question}</h2>
            <img src='main/add-square.svg' className={select === index ? 'add-square rotate' : 'add-square'} alt="" />
        </div>
        <div className={select === index ? 'question__answer show' : 'question__answer'}>
            <p className='answer'>{answer}</p>
        </div>
    </div>
  )
}
