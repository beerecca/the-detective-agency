import React from 'react'
import './Filter.css'
import cn from 'classnames'

export default function Filter({year, isActive, filterClick}) {
  const classes = cn('filter', {
    'filter--active': isActive
  })

  return (
      <button className={classes} onClick={filterClick}>{year}</button>
  )
}