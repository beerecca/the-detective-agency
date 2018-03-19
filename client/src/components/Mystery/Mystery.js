import React from 'react'
import './Mystery.css'

export default function Mystery({name, year, culprit, quote}) {
  return (
    <div>
      <p className="mystery__name">{name} | {year}</p>
      <p>Culprit: {culprit}</p>
      <p>{quote}</p>
      <hr/>
    </div>
  )
}