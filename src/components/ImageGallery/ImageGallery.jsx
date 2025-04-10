// import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ newImgs }) => {
  console.log({ newImgs }, 333);

  return (
    <div className={s.list}>
      <ul>
        {newImgs.map((newImg) => (
          <li key={newImg.id}>
            <ImageCard newImg={newImg} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
// const List = ({ hits }) => {
//   return (
//     <div>
//       <ul>
//         {hits.map(item => (
//           <li key={item.objectID}>
//             <a href={item.url || item.story_url} target='_blank'>
//               {item.title || item.story_title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default List;
