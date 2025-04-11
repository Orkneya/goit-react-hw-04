import { useState, useEffect } from "react";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import { fetchImgs } from "./components/serves/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

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
    // console.log("totalPages:", response.data.total_pages);
    return () => {
      abortController.abort();
    };
  }, [query, page]);

  const handleChangeQuery = (newQuery) => {
    toast.success(`Query changed to ${newQuery}`);
    setQuery(newQuery);
    console.log("newQuery:", newQuery);
    setImages([]);
    setPage(1);
  };

  return (
    <div>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <ImageGallery newImgs={images} />
      {loading && <Loader />}
      {/* {<LoadMoreBtn setNewPage={setPage} />} */}
      {images.length > 0 && <LoadMoreBtn onClick={() => setPage(page + 1)} />}
      {/* {images.length > 0 && (
        <button onClick={() => setPage(page + 1)}>Load more</button>
      )} */}
    </div>
  );
}

export default App;
// {page < totalPages && !isLoading && <button onClick={() => setPage(page + 1)}>Load more</button>}
//LoadMoreBtn
//  {/* <ErrorMessage/> */}
// {/* <ImageCard/> */}
// {/* <ImageModal/>  */}
