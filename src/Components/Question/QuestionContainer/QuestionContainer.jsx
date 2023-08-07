import React, { useState } from 'react'
import './QuestionContainer.css'
import QuestionBox from './QuestionBox/QuestionBox'
import { questions } from './question.json'
export default function QuestionContainer() {
  const [selected, useSelected] = useState(null)
  const toggle = (i)=> {
    if (selected === i) {
      return useSelected(null)
    }
    useSelected(i)
  }
  return (
    <div className='question__contaienr'>
            {questions.map((question, i) => {
              return <QuestionBox key={i} index={i} select={selected} click={toggle} question={question.question} answer={question.answser}/>
            })}
    </div>
  )
}
