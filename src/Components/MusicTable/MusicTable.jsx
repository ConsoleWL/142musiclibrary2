import SongItem from "../SongItem/SongItem";

const MusicTable = ({ songsObj }) => {
  const songItem = songsObj.map((song) => (
    <SongItem key={song.id} song={song} />
  ));

  return (
    <div>
      <h4>Music Table</h4>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Realese Data</th>
            <th>Genre</th>
            <th>Likes</th>
          </tr>
        </thead>
        <tbody>{songItem}</tbody>
      </table>
    </div>
  );
};

export default MusicTable;
