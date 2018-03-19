import React from 'react'
import './Header.css'
import detective from '../../resources/detective.png'

export default function Header() {
  return (
    <header className="header" >
      <img src={detective} className="header__detective" alt="Detective" />
      <h1 className="header__title">The Detective Agency</h1> 
    </header>
  )
}