import axios from "axios";
const KEY = "xlzrSqm-ILLi7SKWnRlGSaBQGNtWz_yfFpTY7loJR2Q";

export const fetchImgs = async (query, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/photos/?client_id=${KEY}&query=${query}&page=${page}`
  );
  console.log("response:", response);
  const totalPages = response.data.total_pages;
  console.log("totalPages:", totalPages);
  return response.data;
};
//  `https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY`

// `https://hn.algolia.com/api/v1/search?query=${query}&page=${page}&hitsPerPage=${hitsPerPage}`,
// { signal }
