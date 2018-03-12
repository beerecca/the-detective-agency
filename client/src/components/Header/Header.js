import React from 'react';
import './Header.css';

export default function Header({ detective, title }) {
  return (
    <header className="header" >
      <img src={detective} className="header__detective" alt="Detective" />
      <h1 className="header__title">{title}</h1> 
    </header>
  )
}