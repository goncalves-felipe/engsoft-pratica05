import { Song } from "../Song/Song";

export class Album {
  private _id: number;
  private _name: string;
  private _songs: Song[];
  private _releaseDate: Date;
  private _license: string;

  constructor(
    id: number,
    name: string,
    songs: Song[],
    releaseDate: Date,
    license: string
  ) {
    this._id = id;
    this._name = name;
    this._songs = songs;
    this._releaseDate = releaseDate;
    this._license = license;
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
   * Getter releaseDate
   * @return {Date}
   */
  public get releaseDate(): Date {
    return this._releaseDate;
  }

  /**
   * Getter license
   * @return {string}
   */
  public get license(): string {
    return this._license;
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
  }

  /**
   * Setter releaseDate
   * @param {Date} value
   */
  public set releaseDate(value: Date) {
    this._releaseDate = value;
  }

  /**
   * Setter license
   * @param {string} value
   */
  public set license(value: string) {
    this._license = value;
  }

  public addSong(song: Song) {
    this._songs = [...this._songs, song];
  }

  public removeSong(song: Song) {
    if (!this._songs.length) throw new Error("there's no song to be removed");

    if (!this._songs.find((s) => s.id === song.id))
      throw new Error("song doesn't exist on album");

    this._songs = this._songs.filter((s) => s.id !== song.id);
  }
}
