import React from "react";

const LoadMoreBtn = ({ setNewPage }) => {
  return (
    <div>
      <button onClick={() => setNewPage(page + 1)}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;
