import React from 'react'
import './styles.css'

export function Header(props){

  return(
    <div className="header">
      <h2 className="headerTitle">{props.page}</h2>
    </div>
  )
}