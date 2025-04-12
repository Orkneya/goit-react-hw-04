import s from "./ImageCard.module.css";

const ImageCard = ({ newImg, openModal }) => {
  return (
    <div className={s.gallery_items}>
      <p>{newImg.alt_description}</p>
      <img
        src={newImg.urls.small}
        alt={newImg.alt_description}
        onClick={() => openModal(newImg)}
      />
    </div>
  );
};

export default ImageCard;
