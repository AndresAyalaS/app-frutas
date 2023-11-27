import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import MenuAppBar from "./Header";

import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=309e488fbc1d554d40953f8377a2c897&hash=ae0990f38e32fc4660671f928a88dde3"
      )
      .then((res) => {
        setPersonajes(res.data.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <MenuAppBar />
      <ImageList>
        {personajes.map((item) => (
          <ImageListItem key={item.id}>
            <img
              srcSet={`${item.thumbnail}.${item.thumbnail.extension}`}
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar title={item.name} position="below" />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
