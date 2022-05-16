import React from 'react'
import { Link } from "react-router-dom";

import './styles.css'

export function Button(props){

  return (
    <Link to={"/"+props.page}>
      <button>{props.name}</button>
    </Link>
  )
}