import React from 'react'
import { Link } from 'react-router-dom'
import './FooterNav.css'

export default function FooterNav(props) {
  return (
    <div className="footer-nav-container z-10">
      <Link to="/collection">
        collection
      </Link>
      <span className="nav-symbol">◊</span>
      { props.user ? 
        <Link to="/myaltars">
        create
      </Link> : <Link to="/login">
        create
      </Link>}
      <span className="nav-symbol" id="star">*</span>
      <Link to="/about">
        about
      </Link>
      {/* ∆ */}
    </div>
  )
}
