import React from "react";
import "./singleImage.style.css";

const SingleImage = (props) => {
  return (
    <img key={props.key} src={props.url} className="single-img" alt="cat" />
  );
};

export default SingleImage;
