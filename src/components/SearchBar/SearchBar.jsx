import s from "./SearchBar.module.css";

const SearchBar = ({ handleChangeQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newImg = e.target.elements.newImg.value;
    handleChangeQuery(newImg);
    e.target.reset(0);
  };
  return (
    <header>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="newImg"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
