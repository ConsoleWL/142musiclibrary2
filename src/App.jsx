import axios from "axios";
import "./App.css";
import Header from "./Components/Header/Header";
import MusicTable from "./Components/MusicTable/MusicTable";
import SearchBar from "./Components/SearchBar/SearchBar";
import React, { useState, useEffect } from "react";
import NewSongForm from "./Components/NewSongForm/NewSongForm";

function App() {
  const [songs, setSongs] = useState([]);
  // const [searchSongs, setSearchSongs] = useState(songs);

  const fetchSongs = async () => {
    try {
      const response = await axios.get("https://localhost:7013/api/Song/");
      setSongs(response.data);
    } catch (error) {
      console.warn("Error in fetch songs: ", error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div className="App">
      <Header />
      <div>
        <SearchBar />
        <MusicTable songsObj={songs} />
        <NewSongForm onNewSong={fetchSongs} />
      </div>
    </div>
  );
}

export default App;