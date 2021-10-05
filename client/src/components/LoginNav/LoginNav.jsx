import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginNav() {
  return (
    <div>
      <Link>
        Login
      </Link>
      <Link>
        Signup
      </Link>

      {/* user? map through user for username "welcome, ${username}" <Link to="/signout">Logout</Link> */}
    </div>
  )
}
