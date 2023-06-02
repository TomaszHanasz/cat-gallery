import React, { useState, useEffect } from "react";
import SingleImage from "../../components/singleImage/SingleImage";
import "./galleryContainer.style.css";

const GalleryContainer = () => {
  const [galleryImage, setGalleryImage] = useState([]);

  useEffect(() => {
    if (galleryImage.length <= 7) {
      getCatImage();
    }
  }, [galleryImage.length]);

  const getCatImage = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      const data = await response.json();
      setGalleryImage([...galleryImage, data[0].url]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="top">
        <h1 className="title">Cat Gallery</h1>
        <button onClick={getCatImage} className="cat-btn">
          Get random Image
        </button>
      </div>
      <div className="gallery">
        {galleryImage
          .map((el, index) => <SingleImage key={index} url={el} />)
          .reverse()}
      </div>
      <p style={{ textAlign: "center" }}>
        Copyrights Tomasz Hanasz {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default GalleryContainer;
