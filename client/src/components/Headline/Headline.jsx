import React from 'react'
import './Headline.css'

export default function Headline(props) {
  return (
    <div>
      <h1 className="headline-text text-primary text-center mt-32 mb-4" >{props.children}</h1>
    </div>
  )
}
