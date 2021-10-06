import React from 'react'
import Button from '../Button/Button'


//   function AltarImage(props) {
//   return (
//     <div>
//       {(props.image.image_type === 1) ? <img src="https://i.imgur.com/SwSjwZt.png" alt="flower1"/> : null
//       }}
//       {(props.image.image_type === 2) ? <img src="https://i.imgur.com/SwSjwZt.png" alt="buddha"/> : null
//       }}
//     </div>
//   )
// }


export default function AltarCard(props) {
  
console.log(props.images)
  return (
    <div className="text-center"> 
      <h1 className="text-primary mt-2 ">{props.altar.name}</h1>
      {props.images.filter((image) => {
        return (image.altar_id === props.altar.id)
      }).map((image) => (
        <>
          <img width="100px"src={image.img_url} alt={image.name}/>
        </>
      ))}
      <Button>Edit</Button>
      <Button>Delete</Button>
    </div>
  )
}
