import React from 'react'
import { Cardssegundo } from './Cardssegundo'
import '../Styles/CardReport.css'
function CardReport() {
  return (
    <div className='Cardfooter'>
    <div className='imagens'></div>
    <div className='letra'>
    <span>Yarriba Castro</span>
    <span>Design Track</span>
    <span>I chose design track because I love to design beautiful user-centered interfaces.</span>
    </div>
    <Cardssegundo/>
</div>
  )
}

export  {CardReport}