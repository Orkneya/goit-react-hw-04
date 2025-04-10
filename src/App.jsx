import { useState, useEffect } from "react";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import { fetchImgs } from "./components/serves/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("cat");
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const getImg = async () => {
      try {
        setLoading(true);
        const data = await fetchImgs(query, page);
        console.log("data:", data);

        setImages((prev) => [...prev, ...data]);
        console.log("images:", images);
        // setImages(data);
      } catch (error) {
        console.log("Error:", error);
        setError(true);
        toast.error("Try again later...");
      } finally {
        setLoading(false);
      }
    };
    getImg();
  }, [query, page]);

  const handleChangeQuery = (newQuery) => {
    toast.success(`Query changed to ${newQuery}`);
    setQuery(newQuery);
    console.log("newQuery:", newQuery);
    setImages([]);
    setPage(0);
  };

  return (
    <div>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      <ImageGallery newImgs={images} />

      <button onClick={() => setPage(page + 1)}>Load more</button>
    </div>
  );
}

export default App;
// {page < totalPages && !isLoading && <button onClick={() => setPage(page + 1)}>Load more</button>}
//
//  {/* <ErrorMessage/> */}
// {/* <Loader/> */}
// {/* <ImageCard/> */}
// {/* <ImageModal/>  */}
