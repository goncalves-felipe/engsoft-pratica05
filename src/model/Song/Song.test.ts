import { Song } from "./Song";

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

describe("Song model tests", () => {
  let song: Song;

  beforeEach(() => {
    song = songMock1;
  });

  it("create new song - should have addedToPlaylistIn null", () => {
    expect(song.addedToPlaylistIn).toBeNull();
  });

  it("listen to song - should increase counter", () => {
    song.listen();
    expect(song.plays).toEqual(1);
    song.listen();
    expect(song.plays).toEqual(2);
  });
});
