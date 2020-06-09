import React, { useState } from "react";
import "./css/imageList.css";

const OpenImage = ({image, isOpen, handleClick}) => {
  const [open, setOpen] = useState(isOpen);
  handleClick=()=>{
    setOpen(!open)
  }
  return (
    open && (
      <div className="openImage">
        <img src={image.urls.full} alt="sfg" onClick={()=>{handleClick()}} />
      </div>
    )
  );
};

export default OpenImage;
