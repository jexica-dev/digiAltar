import React from 'react'
import Headline from '../../components/Headline/Headline'

export default function About() {
  const stylesAboutContainer = {
    alignItems: 'center',
    width: '100%',
    
  }

  const stylesAboutBox = {
    background: 'black',
    filter: "drop-shadow(0 0 1rem #ffff0020)",
    borderRadius: "1rem",
    width: '580px', 
    
  }


  return (
    <div className="">
      <Headline>About</Headline>
      <div className="text-primary w-screen flex flex-col text-center" style={stylesAboutContainer}>
        <div className="p-10 align-center" style={stylesAboutBox}>

          <p>digi-Altar is a cyber spiritual space, where you can create, share, and inspire your own altar using a hybrid mix of relics and artifacts.
          </p>
          <p className="m-4">
          Images are curated and updated by our diverse small team of designers and digital enthusiasts. We're passionate about bringing the online space a new realm for spirital creation, conversion, and connection.  
          </p>
        </div>
      </div>


    </div>
  )
}
