import { useState, useEffect } from "react";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import { fetchImgs } from "./components/serves/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Modal from "react-modal";
import ImageModal from "./components/ImageModal/ImageModal";

Modal.setAppElement("#root");

function App() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const getImg = async () => {
      try {
        setLoading(true);
        if (!query) {
          return;
        }
        const data = await fetchImgs(query, page, abortController.signal);
        console.log("data:", data.results);

        setImages((prev) => [...prev, ...data.results]);
        console.log("images:", images);
      } catch (error) {
        console.log("Error:", error);
        setError(true);
        toast.error("Try again later...");
      } finally {
        setLoading(false);
      }
    };
    getImg();
    // console.log("ResultTotalPages:", data.results.total_pages);
    return () => {
      abortController.abort();
    };
  }, [query, page]);

  function modalIsOpen(image) {
    setSelectedImage(image);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
    setSelectedImage(null);
  }

  const handleChangeQuery = (newQuery) => {
    toast.success(`Query changed to ${newQuery}`);
    setQuery(newQuery);
    console.log("newQuery:", newQuery);
    setImages([]);
    setPage(1);
  };

  return (
    <div className="s.container">
      <Toaster />
      <SearchBar handleChangeQuery={handleChangeQuery} />
      {loading && <Loader />}
      <ImageGallery newImgs={images} openModal={modalIsOpen} />
      {isOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          image={selectedImage}
        />
      )}
      ''{" "}
      {images.length > 0 && <LoadMoreBtn onClick={() => setPage(page + 1)} />}
    </div>
  );
}

export default App;
// {page < totalPages && !isLoading && <button onClick={() => setPage(page + 1)}>Load more</button>}
//LoadMoreBtn
//  {/* <ErrorMessage/> */}
// {/* <ImageCard/> */}
// {/* <ImageModal/>  */}
{
  /* <ClipLoader
  color={fuchsia}
  loading={loading}
  cssOverride={override}
  size={150}
  aria-label="Loading Spinner"
  data-testid="loader"
/>; */
}
