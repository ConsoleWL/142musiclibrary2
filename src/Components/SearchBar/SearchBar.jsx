const SearchBar = ({ filter }) => {
  return (
    <div>
      <h4>SearchBar</h4>
      <input onChange={filter} />
    </div>
  );
};

export default SearchBar;
