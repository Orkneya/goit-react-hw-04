// import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ newImgs, openModal }) => {
  return (
    <div className={s.gallery}>
      <ul>
        {newImgs.map((newImg) => (
          <li className={s.gallery_items} key={newImg.id}>
            <ImageCard newImg={newImg} openModal={openModal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
