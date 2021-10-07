import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div className="logo-container z-10">
      <Link to="/" exact>
      <header className="logo-header ">digiAltar</header>
      </Link>
    </div>
  )
}
