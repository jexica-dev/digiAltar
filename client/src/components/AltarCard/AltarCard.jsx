import React from 'react'
import Button from '../Button/Button'
import AltarImage from '../AltarImage/AltarImage'


export default function AltarCard(props) {
  
console.log(props.images)
  return (
    <div className="text-center"> 
      
      
      {props.images.filter((image) => {
        return (image.altar_id === props.altar.id)
      }).map((image) => (
        <>
          <AltarImage image={image}/>
          
          {/* <img width="100px" src={image.img_url} alt={image.name}/> */}
        </>
      ))}
      <h1 className="text-primary mt-2 mb-4">{props.altar.name}</h1>
      <Button>Edit</Button>
      <Button>Delete</Button>
    </div>
  )
}
