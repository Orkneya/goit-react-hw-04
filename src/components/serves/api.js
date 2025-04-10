import axios from "axios";
const KEY = "xlzrSqm-ILLi7SKWnRlGSaBQGNtWz_yfFpTY7loJR2Q";

export const fetchImgs = async (query, page, signal) => {
  console.log("page:", page);

  const response = await axios.get(
    `https://api.unsplash.com/photos/?client_id=${KEY}&per_page=5&query=${query}&page=${page}`,
    { signal }
  );

  console.log("response:", response);
  // const totalPages = response.data.total_pages;
  // console.log("totalPages:", totalPages);
  return response.data;
};
//  `https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY`
// `https://api.unsplash.com/photos?query=forest&client_id=${KEY}&page=1&per_page=10`,
