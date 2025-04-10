const ImageCard = ({ newImg }) => {
  return (
    <div>
      <p>{newImg.alt_description}</p>
      <a href={newImg.urls.regular}>
        <img src={newImg.urls.small} alt={newImg.alt_description} />
      </a>
    </div>
  );
};

export default ImageCard;
