import { Album } from "../Album/Album";

export class Artist {
  private _id: number;
  private _name: string;
  private _albums: Album[];
  private _monthlyListeners: number;

  constructor(
    id: number,
    name: string,
    albums: Album[],
    monthlyListeners: number
  ) {
    this._id = id;
    this._name = name;
    this._albums = albums;
    this._monthlyListeners = monthlyListeners;
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
   * Getter albums
   * @return {Album[]}
   */
  public get albums(): Album[] {
    return this._albums;
  }

  /**
   * Getter monthlyListeners
   * @return {number}
   */
  public get monthlyListeners(): number {
    return this._monthlyListeners;
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
   * Setter albums
   * @param {Album[]} value
   */
  public set albums(value: Album[]) {
    this._albums = value;
  }

  /**
   * Setter monthlyListeners
   * @param {number} value
   */
  public set monthlyListeners(value: number) {
    this._monthlyListeners = value;
  }

  public countTotalPlays(): number {
    const songs = this._albums.flatMap((album) => album.songs);
    return songs.reduce((sum, song) => sum + song.plays, 0);
  }
}
