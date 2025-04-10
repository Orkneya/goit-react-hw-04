import { useState, useEffect } from "react";
import "./App.css";
// import toast, { Toaster } from "react-hot-toast";
import { fetchHits } from "./components/serves/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getImg = async () => {
      try {
        setLoading(true);
        const data = await fetchHits();

        console.log(images, 111);
        console.log(data, 777);

        setImages((prev) => [...prev, ...data]);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    getImg();
  }, []);

  return (
    <div>
      <ImageGallery newImgs={images} />
    </div>
  );
}

export default App;
// {/* <SearchBar onSubmit={} /> */}
//  {/* <ErrorMessage/> */}
// {/* <Loader/> */}
// {/* <ImageCard/> */}
// {/* <ImageModal/>  */}
