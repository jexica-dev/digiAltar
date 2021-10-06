import React from 'react'
import { useParams } from 'react-router';
import AltarForm from '../../components/AltarForm/AltarForm';

  
export default function AltarEdit(props) {
  const { altarId } = useParams();
  return (
    <div>
      {props.altars.filter((altar) => {
        console.log(altar.id)
        return (altar.id == altarId);
      }).map((altar) => {
        return (
          <AltarForm />
        )
      })}
  
      
    </div>
  )
}
