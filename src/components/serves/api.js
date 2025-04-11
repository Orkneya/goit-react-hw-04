import axios from "axios";
const KEY = "xlzrSqm-ILLi7SKWnRlGSaBQGNtWz_yfFpTY7loJR2Q";

export const fetchImgs = async (query, page, signal) => {
  console.log("page:", page);
  const response = await axios.get(
    `https://api.unsplash.com/search/photos/?client_id=${KEY}&per_page=10&query=${query}&page=${page}`,
    { signal }
  );
  console.log("totalPages:", response.data.total_pages);
  return response.data;
};
