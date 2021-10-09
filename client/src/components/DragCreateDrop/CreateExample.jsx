// export { CreateContainer as default } from './CreateContainer'
import React from 'react'
import  CreateContainer  from './CreateContainer'

export default function CreateExample(props) {
  return (

      <CreateContainer altar={props.altar} images={props.images} /> 

  )
}
