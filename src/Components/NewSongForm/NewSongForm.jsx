import React, { useState } from "react";
import axios from "axios";
import TextField from "../TextField/TextField";
import "./NewSongForm.css";
import "bootstrap/dist/css/bootstrap.css";

const NewSongForm = ({ onNewSong }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");
  const [like, setLike] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      artist,
      album,
      releaseDate,
      genre,
      like,
    };

    console.log(formData);

    try {
      const response = await axios.post(
        "https://localhost:7013/api/song/",
        formData
      );

      console.log(response.data);

      if (response.status === 201) {
        onNewSong();
      }
    } catch (error) {
      console.warn("Error submitting new song form: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="song-form">
      <h4>Add New Song</h4>
      <div className="p-2">
        <TextField label={"Title"} value={title} onChange={setTitle} />
        <TextField label={"Artist"} value={artist} onChange={setArtist} />
        <TextField label={"Album"} value={album} onChange={setAlbum} />
        <TextField
          label={"Release Date"}
          value={releaseDate}
          onChange={setReleaseDate}
        />
        <TextField label={"Genre"} value={genre} onChange={setGenre} />
        <TextField label={"Likes"} value={like} onChange={setLike} />
      </div>
      <button className="btn btn-primary" type="submit">
        {" "}
        Add Song
      </button>
    </form>
  );
};

export default NewSongForm;
