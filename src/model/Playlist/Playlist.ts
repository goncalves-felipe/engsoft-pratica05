import { Song } from "../Song/Song";

type sortByType = "name" | "dateAdded";

export class Playlist {
  private _id: number;
  private _name: string;
  private _songs: Song[];
  private _dateCreation: Date;
  private _sortBy: sortByType;

  constructor(id: number, name: string, songs: Song[], dateCreation: Date) {
    this._id = id;
    this._name = name;
    this._songs = songs;
    this._sortBy = "name";
    this._dateCreation = dateCreation;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter songs
   * @return {Song[]}
   */
  public get songs(): Song[] {
    return this._songs;
  }

  /**
   * Getter sortBy
   * @return {sortByType}
   */
  public get sortBy(): sortByType {
    return this._sortBy;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter songs
   * @param {Song[]} value
   */
  public set songs(value: Song[]) {
    this._songs = value;
    this.sort();
  }

  /**
   * Setter songs
   * @param {sortByType} value
   */
  public set sortBy(value: sortByType) {
    this._sortBy = value;
  }

  /**
   * Getter dateCreation
   * @return {Date}
   */
  public get dateCreation(): Date {
    return this._dateCreation;
  }

  /**
   * Setter dateCreation
   * @param {Date} value
   */
  public set dateCreation(value: Date) {
    this._dateCreation = value;
  }

  private sort() {
    if (this._sortBy === "dateAdded") {
      this._songs = this._songs.sort(
        (a, b) =>
          ((a.addedToPlaylistIn ?? new Date()) as any) -
          ((b.addedToPlaylistIn ?? new Date()) as any)
      );

      return;
    }

    this._songs = this._songs.sort((a, b) => a.name.localeCompare(b.name));
  }

  public addSongToPlaylist(song: Song) {
    song.addedToPlaylistIn = new Date();
    this._songs = [...this._songs, song];
    this.sort();
  }

  public removeSongFromPlaylist(song: Song) {
    if (!this._songs.length) throw new Error("there's no song to be removed");

    if (!this._songs.find((s) => s.id === song.id))
      throw new Error("song doesn't exist on playlist");

    this._songs = this._songs.filter((s) => s.id !== song.id);
    this.sort();
  }

  public search(filter: string): Song[] {
    return this._songs
      .filter((song) => song.name.includes(filter))
      .sort((a, b) => a.name.localeCompare(b.name));
  }
}
