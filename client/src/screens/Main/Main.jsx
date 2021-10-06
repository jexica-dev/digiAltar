import { React, useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router";
import { getAllAltars } from "../../services/altars";
import { getAllImages } from "../../services/images";
import Collection from "../Collection/Collection";
import About from "../About/About.jsx";
import UserAltars from "../UserAltars/UserAltars";
import AltarEdit from "../AltarEdit/AltarEdit";
import { useParams } from 'react-router';


export default function Main(props) {
  const [altars, setAltars] = useState([]);
  const [images, setImages] = useState([]);
  

  useEffect(() => {
    const fetchAltars = async () => {
      const altarList = await getAllAltars();
      setAltars(altarList);
    };
    fetchAltars();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      const imageList = await getAllImages();
      setImages(imageList);
    };
    fetchImages();
  }, []);

  
  return (
    <div>
      <Switch>
        <Route path="/collection">
          <Collection images={images}  altars={altars} />
        </Route>
        <Route path={"/myaltars/"} exact>
          <UserAltars user={props.user} images={images}  altars={altars} />
        </Route>
        <Route path="/myaltars/:altarId/edit">
          <AltarEdit images={images}  altars={altars} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}
