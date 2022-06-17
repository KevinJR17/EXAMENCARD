import React from 'react'
import imgcara from '../Imagenes/ICONO.jpg'
import '../Styles/CardTop.css'
function CardTop() {
  return (
    <div className='Cardtop'>
    <img className='mostrar' src={imgcara} alt="" />
</div>
  )
}

export  {CardTop}