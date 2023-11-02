import { AppNavBar } from "./layout/AppNavBar";
import { AppFooter } from "./layout/AppFooter";

import { ButtonVote } from "./components/ButtonVote";
import { PhotosGallery } from "./components/PhotosGallery";
import { useState, useEffect } from "react";

function SearchBar() {
  // const [query, setQuery] = useState("");
  let query = "";

  function onInput(evt) {
    console.log("SearchBar onInput", evt.target.value);
    // setQuery(evt.target.value);

    query = evt.target.value;
  }

  return (
    <div>
      Search <input className="input-control" type="text" onInput={onInput} />
    </div>
  );
}

function RangeWidth() {
  let [width, setWidth] = useState(10);

  function onInput(evt) {
    setWidth(+evt.target.value);
    
  }

  return (
    <label>
      <input type="range" value={width} min="40" max="300" onInput={onInput} />
      <output> Value: {width} </output>
    </label>
  );
}

export default function App() {
  let [photos, setPhotos] = useState([]);

  // A basic test to see if we can get data from the back
  async function testBack() {
    console.log("Testing back...");
    const response = await fetch("/api/photos");
    const data = await response.json();
    console.log("Got Data!", data);

    setPhotos(data.photos);
  }

  useEffect(
    () => {
      testBack();
    },
    [] // This is the dependency array. It is empty, so it will only run once.
  );
  console.log("Render App photos=", photos);

  return (
    <div>
      <AppNavBar />
      <h1>Photo Sharing Application</h1>

      <RangeWidth />
      <SearchBar />
      <PhotosGallery photos={photos.slice(0, 20)} />

      <ButtonVote name="John" />
      <ButtonVote name="Chuanzhao" />
      <AppFooter />
    </div>
  );
}
