import { useContext } from "react";
import { ButtonVote } from "../components/ButtonVote";
import { PhotosGallery } from "../components/PhotosGallery";
import { useState, useEffect } from "react";

import { RangeWidth } from "../components/RangeWidth";
import { SearchBar } from "../components/SearchBar";

import BasePage, { ErrorContext } from "./BasePage";

import "./PhotosPage.css";

export default function PhotosPage() {
  const setError = useContext(ErrorContext);



  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);

  // setup an effect that fetches photos exactly once (empty array as secondary argument)
  useEffect(() => {
    async function fetchPhotos() {
      console.log("⭐️Fecthing photos...");
      const response = await fetch(`/api/photo?query=${query}`);
      if (!response.ok) {
        // TODO: handle error
        console.log("Error fetching photos", response);

        setPhotos([]);
        setError({ msg: "Error fetching photos", type: "danger" });
        return;
      }
      const _photos = await response.json();

      console.log("🤙🏼 Got photos", _photos);

      setPhotos(_photos.photos);
    }

    fetchPhotos();
  }, [query]);

  return (
    <BasePage>
      <h1>Photo Sharing Application</h1>

      <RangeWidth />

      <SearchBar query={query} setQuery={setQuery} />
      <PhotosGallery
        photos={photos
          // .filter((d) => d.caption.includes(query))// front end filtering
          .slice(0, 20)}
      ></PhotosGallery>

      <ButtonVote name="John" />
      <ButtonVote name="Chuanzhao" />
    </BasePage>
  );
}
