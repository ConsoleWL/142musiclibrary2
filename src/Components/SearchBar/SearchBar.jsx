const SearchBar = ({ filterSongs }) => {
  return (
    <div>
      <h4>Search Bar</h4>
      <input onChange={(e) => filterSongs(e)} placeholder="Search for a song" />
    </div>
  );
};

export default SearchBar;
