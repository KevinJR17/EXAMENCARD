import React from 'react'
import { CardReport } from './CardReport'
import { CardTop } from './CardTop'
import '../Styles/Card.css'
function Card() {
  return (
    <div className='Card'>
    <CardTop/>
    <CardReport/>
</div>
  )
}

export  {Card}