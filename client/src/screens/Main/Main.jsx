import { React, useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router";
import { getAllAltars } from "../../services/altars";
import { getAllImages } from "../../services/images";
import Collection from "../Collection/Collection";
import About from "../About/About.jsx";
import UserAltars from "../UserAltars/UserAltars";
import AltarEdit from "../AltarEdit/AltarEdit";
import { useParams } from 'react-router';
import { DragExample } from "../../components/DragMain/DragExample";


export default function Main(props) {
  const [altars, setAltars] = useState([]);
  const [images, setImages] = useState([]);
  const [collection, setCollection] = useState(true);
  const [toggleFetch, setToggleFetch] = useState(false);
  
  

  useEffect(() => {
    const fetchAltars = async () => {
      const altarList = await getAllAltars();
      setAltars(altarList);
    };
    fetchAltars();
    setCollection();
  }, [toggleFetch]);

  useEffect(() => {
    const fetchImages = async () => {
      const imageList = await getAllImages();
      setImages(imageList);
    };
    fetchImages();
  }, [toggleFetch]);

  
  return (
    <div>
      <Switch>
        <Route path="/collection">
          <Collection collection={collection} images={images}  altars={altars} />
        </Route>
        <Route path={"/myaltars/"} exact>
          <UserAltars setToggleFetch={setToggleFetch} handleLogout={props.handleLogout} user={props.user} images={images}  altars={altars} />
        </Route>
        <Route path="/myaltars/:altarId/edit">
          <AltarEdit setToggleFetch={setToggleFetch} user={props.user} images={images}  altars={altars} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/" exact>
        <DragExample />
        </Route>
      </Switch>
    </div>
  );
}
