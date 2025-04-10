import axios from "axios";
const KEY = "xlzrSqm-ILLi7SKWnRlGSaBQGNtWz_yfFpTY7loJR2Q";

export const fetchHits = async (query) => {
  const response = await axios.get(
    `https://api.unsplash.com/photos/?client_id=${KEY}`
  );

  return response.data;
};
//  `https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY`

// `https://hn.algolia.com/api/v1/search?query=${query}&page=${page}&hitsPerPage=${hitsPerPage}`,
// { signal }
