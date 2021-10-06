import { React, useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router";
import { getAllAltars } from "../../services/altars";
import { getAllImages } from "../../services/images";
import Collection from "../Collection/Collection";
import Create from "../Create/Create";
import About from "../About/About.jsx";

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
          <Collection altars={altars} />
        </Route>
        {/* <Route path="/userAltar">
          {props.currentUser ? (
            <Create currentUser={props.currentUser} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route> */}
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}
