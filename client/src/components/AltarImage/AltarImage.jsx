import React from 'react'

export default function AltarImage(props) {
  return (
    <div>
        {(props.image.image_type === 1) ? <img src="https://i.imgur.com/SwSjwZt.png" alt="flower1"/> : null
}}
        {(props.image.image_type === 2) ? <img src="https://i.imgur.com/SwSjwZt.png" alt="buddha"/> : null
}}
    </div>
  )
}
