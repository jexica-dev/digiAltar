import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <div className="logo-container">
      <Link to="/" exact>
      <header className="logo-header">digiAltar</header>
      </Link>
    </div>
  )
}
