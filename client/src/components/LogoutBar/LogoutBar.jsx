import React from 'react'
import Button from '../Button/Button'

export default function LogoutBar(props) {
  return (
    <div>
            <div className="mt-32 text-right mr-12"><span className="text-primary mr-8"> Welcome, {props.username}.</span> 
      <Button onClick={props.handleLogout}>Logout</Button></div>
    </div>
  )
}
