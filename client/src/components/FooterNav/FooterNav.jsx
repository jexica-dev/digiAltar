import React from 'react'
import { Link } from 'react-router-dom'
import './FooterNav.css'

export default function FooterNav() {
  return (
    <div className="footer-nav-container">
      <Link to="/collection">
        collection
      </Link>
      <span className="nav-symbol">◊</span>
      <Link to="/create">
        create
      </Link>
      <span className="nav-symbol" id="star">*</span>
      <Link to="/about">
        about
      </Link>
      {/* ∆ */}
    </div>
  )
}
