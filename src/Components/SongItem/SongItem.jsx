const SongItem = ({ song }) => {
  return (
    <tr>
      <td>{song.id}</td>
      <td>{song.title}</td>
      <td>{song.artist}</td>
      <td>{song.album}</td>
      <td>{song.releasedate}</td>
      <td>{song.genre}</td>
      <td>{song.like}</td>
    </tr>
  );
};

export default SongItem;
