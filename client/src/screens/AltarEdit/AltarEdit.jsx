import React from 'react'
import AltarCard from '../../components/AltarCard/AltarCard'
import { useParams } from 'react-router';
  
export default function AltarEdit(props) {
  const { altarId } = useParams();
  return (
    <div>
      {props.altars.filter((altar) => {
        console.log(altar.id)
        return (altar.id == altarId);
      }).map((altar) => {console.log(altar)})}
  
      
    </div>
  )
}
