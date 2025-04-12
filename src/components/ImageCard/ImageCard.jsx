const ImageCard = ({ newImg, openModal }) => {
  return (
    <div>
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
