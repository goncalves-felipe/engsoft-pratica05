import { Song } from "../Song/Song";
import { Album } from "./Album";

const songMock1 = new Song(
  1,
  "song name 1",
  2,
  47,
  0,
  "./pathToSong1",
  false,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  new Date()
);

const songMock2 = new Song(
  2,
  "song name 2",
  3,
  20,
  5000,
  "./pathToSong2",
  false,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  new Date()
);

describe("Album model test", () => {
  let album: Album;

  beforeEach(() => {
    album = new Album(1, "album", [songMock1], new Date(), "license");
  });

  it("add song to album - should add song to the end of the list", () => {
    album.addSong(songMock2);

    expect(album.songs.length).toEqual(2);
    expect(album.songs[1].id).toEqual(2);
  });

  it("remove nonexistent song from album - should throw error", () => {
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
    expect(() => album.removeSong(nonexistentSong)).toThrowError(
      "song doesn't exist on album"
    );
  });

  it("remove song from album - should remove song", () => {
    album.removeSong(songMock1);
    expect(album.songs.length).toEqual(0);
  });

  it("remove song from empty album - should throw error", () => {
    album.removeSong(songMock1);

    expect(() => album.removeSong(songMock1)).toThrowError(
      "there's no song to be removed"
    );
  });
});
