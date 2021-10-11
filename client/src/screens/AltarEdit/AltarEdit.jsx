import React from 'react'
import { useParams } from 'react-router';
import AltarForm from '../../components/AltarForm/AltarForm';
import Layout from '../../components/Layout/Layout';

  
export default function AltarEdit(props) {
  const { altarId } = useParams();
  return (
    <div>
      <Layout>
      {props.altars.filter((altar) => {
        return (altar.id == altarId);
      }).map((altar) => {
        return (
          <AltarForm setToggleFetch={props.setToggleFetch} user={props.user} images={props.images}  altar={altar} />
        )
      })}
  </Layout>
      
    </div>
  )
}
