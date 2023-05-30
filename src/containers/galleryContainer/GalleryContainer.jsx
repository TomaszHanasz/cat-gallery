import React, { useState } from "react";
import SingleImage from "../../components/singleImage/SingleImage";
import "./galleryContainer.style.css";

const GalleryContainer = () => {
  const [galleryImage, setGalleryImage] = useState([]);

  const onClickHandler = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      const data = await response.json();
      console.log(data);
      setGalleryImage([...galleryImage, data[0].url]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="top">
        <h1>Cat Gallery</h1>
        <button onClick={onClickHandler} className="cat-btn">
          Get random Image
        </button>
      </div>
      <div className="gallery">
        {galleryImage
          .map((el, index) => <SingleImage key={index} url={el} />)
          .reverse()}
      </div>
    </div>
  );
};

export default GalleryContainer;
