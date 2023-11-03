import { AppNavBar } from "./layout/AppNavBar";
import { AppFooter } from "./layout/AppFooter";

import { ButtonVote } from "./components/ButtonVote";
import { PhotosGallery } from "./components/PhotosGallery";
import { useState, useEffect } from "react";

import { RangeWidth } from "./components/RangeWidth";
import { SearchBar } from "./components/SearchBar";

export default function App() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);

  // setup an effect that fetches photos exactly once (empty array as secondary argument)
  useEffect(() => {
    async function fetchPhotos() {
      console.log("⭐️Fecthing photos...");
      const response = await fetch(`/api/photos?query=${query}`);
      if (!response.ok) {
        // TODO: handle error
        console.log("Error fetching photos", response);
        return;
      }
      const _photos = await response.json();
  
      console.log("🤙🏼 Got photos", _photos);
  
      setPhotos(_photos.photos);
    }

    fetchPhotos();
  }, [query]);

  

  return (
    <div>
      <AppNavBar />
      <h1>Photo Sharing Application</h1>

      <RangeWidth />
      <SearchBar query={query} setQuery={setQuery} />
      <PhotosGallery
        photos={photos
          // .filter((d) => d.caption.includes(query))// front end filtering
          .slice(0, 20)}
      >
        
      </PhotosGallery>

      <ButtonVote name="John" />
      <ButtonVote name="Chuanzhao" />
      <AppFooter />
    </div>
  );
}
