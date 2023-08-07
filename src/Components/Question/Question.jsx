import React from 'react'
import QuestionHeader from './QuestionHeader/QuestionHeader'
import QuestionContainer from './QuestionContainer/QuestionContainer'
import './Question.css'
export default function Question() {
  return (
    <div className='question' id='questions'>
        <QuestionHeader/>
        <QuestionContainer/>
    </div>
  )
}
