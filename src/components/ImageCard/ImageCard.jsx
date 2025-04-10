const ImageCard = ({ newImg }) => {
  return (
    <div>
      <a href={newImg.urls.regular}>
        <img src={newImg.urls.small} alt={newImg.alt_description} />
      </a>
    </div>
  );
};

export default ImageCard;
