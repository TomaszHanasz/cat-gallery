import React from "react";
import "./singleImage.style.css";

const SingleImage = (props) => {
  return (
    <div>
      <img key={props.key} src={props.url} className="single-img" />
    </div>
  );
};

export default SingleImage;
