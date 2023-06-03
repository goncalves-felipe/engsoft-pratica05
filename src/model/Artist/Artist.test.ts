import { Album } from "../Album/Album";
import { Song } from "../Song/Song";
import { Artist } from "./Artist";

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

const albumMock2 = new Album(
  2,
  "album 2",
  [songMock1, songMock2],
  new Date(),
  "license"
);

describe("Artist model tests", () => {
  let artist: Artist;

  beforeEach(() => {
    artist = new Artist(1, "artist", [albumMock2], 2000);
  });

  it("count total plays - should sum how many times each song was played", () => {
    const totalPlays = songMock1.plays + songMock2.plays;

    const countedTotalPlays = artist.countTotalPlays();

    expect(countedTotalPlays).toEqual(totalPlays);
  });
});
