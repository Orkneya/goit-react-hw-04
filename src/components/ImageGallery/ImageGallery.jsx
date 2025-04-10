// import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ newImgs }) => {
  return (
    <div className={s.list}>
      <ul>
        {newImgs.map((newImg) => (
          <li key={newImg.id}>
            <p>key={newImg.id}</p>
            <ImageCard newImg={newImg} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;

//             <a href={item.url || item.story_url} target='_blank'>
//               {item.title || item.story_title}
//             </a>
