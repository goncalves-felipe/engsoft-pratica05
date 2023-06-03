import { Song } from "../Song/Song";
import { Playlist } from "./Playlist";

const song = new Song(
  1,
  "song name 1",
  2,
  47,
  3000,
  "./pathToSong1",
  false,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  new Date()
);

describe("Playlist model tests", () => {
  let playlist: Playlist;

  beforeEach(() => {
    playlist = new Playlist(1, "playlist name", [song], new Date());
  });

  it("test add song to playlist", () => {
    const mockedSong = song;

    playlist.addSongToPlaylist(mockedSong);

    const addedSong = playlist.songs.find((s) => s.id === mockedSong.id);

    expect(addedSong).not.toBeUndefined();
    expect((addedSong as Song).id).toEqual(mockedSong.id);
    expect((addedSong as Song).addedToPlaylistIn).not.toBeNull;
    expect(playlist.songs.length).toEqual(2);
  });

  it("remove nonexistent song from playlist - should throw error", () => {
    const nonexistentSong = new Song(
      3,
      "song 3",
      1,
      1,
      1,
      "",
      false,
      "",
      new Date()
    );
    expect(() => playlist.removeSongFromPlaylist(nonexistentSong)).toThrowError(
      "song doesn't exist on playlist"
    );
  });

  it("remove song from empty playlist - should throw error", () => {
    playlist.removeSongFromPlaylist(song);

    expect(() => playlist.removeSongFromPlaylist(song)).toThrowError(
      "there's no song to be removed"
    );
  });

  it("test remove song to playlist", () => {
    playlist.removeSongFromPlaylist(song);

    const addedSong = playlist.songs.find((s) => s.id === song.id);

    expect(addedSong).toBeUndefined();
    expect(playlist.songs.length).toEqual(0);
  });
});
