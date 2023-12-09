import { createRandomSong } from "../data";
import { useSelector, useDispatch } from "react-redux";
import { songsSlice, store, addSong, removeSong } from "../store";

function SongPlaylist() {
  const songPlaylist = useSelector((store) => store.songs);
  const dispatch = useDispatch();

  const handleSongAdd = (song) => {
    // To Do:
    // Add song to list of songs
    // dispatch(songsSlice.actions.addSong(song));
    dispatch(addSong(song));
    console.log(store.getState());
  };
  const handleSongRemove = (song) => {
    // To Do:
    // Remove song from list of songs
    dispatch(removeSong(song));
    console.log(store.getState());
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
