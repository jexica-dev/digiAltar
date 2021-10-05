import React from 'react'
import { Link } from 'react-router-dom'
import './FooterNav.css'

export default function FooterNav() {
  return (
    <div className="footer-nav-container">
      <Link>
        collection
      </Link>
      <span className="nav-symbol">◊</span>
      <Link>
        create
      </Link>
      <span className="nav-symbol" id="star">*</span>
      <Link>
        about
      </Link>
      {/* ∆ */}
    </div>
  )
}
