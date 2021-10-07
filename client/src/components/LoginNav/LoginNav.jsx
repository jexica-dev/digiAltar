import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginNav() {
  return (
    <div className="login-nav-container text-primary ">
      <Link to='/login'>
        Login
      </Link>
      <Link to='/signup'>
        Signup
      </Link>

      {/* user? map through user for username "welcome, ${username}" <Link to="/signout">Logout</Link> */}
    </div>
  )
}
