export class Song {
  private _id: number;
  private _name: string;
  private _minutes: number;
  private _seconds: number;
  private _plays: number;
  private _path: string;
  private _explicit: boolean;
  private _lyrics: string;
  private _releaseDate: Date;
  private _addedToPlaylistIn: Date | null;

  constructor(
    id: number,
    name: string,
    minutes: number,
    seconds: number,
    plays: number,
    path: string,
    explicit: boolean,
    lyrics: string,
    releaseDate: Date,
    timesListened?: number
  ) {
    this._id = id;
    this._name = name;
    this._minutes = minutes;
    this._seconds = seconds;
    this._plays = plays;
    this._path = path;
    this._explicit = explicit;
    this._lyrics = lyrics;
    this._releaseDate = releaseDate;
    this._addedToPlaylistIn = null;
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
   * Getter minutes
   * @return {number}
   */
  public get minutes(): number {
    return this._minutes;
  }

  /**
   * Getter seconds
   * @return {number}
   */
  public get seconds(): number {
    return this._seconds;
  }

  /**
   * Getter plays
   * @return {number}
   */
  public get plays(): number {
    return this._plays;
  }

  /**
   * Getter path
   * @return {string}
   */
  public get path(): string {
    return this._path;
  }

  /**
   * Getter explicit
   * @return {boolean}
   */
  public get explicit(): boolean {
    return this._explicit;
  }

  /**
   * Getter lyrics
   * @return {string}
   */
  public get lyrics(): string {
    return this._lyrics;
  }

  /**
   * Getter releaseDate
   * @return {Date}
   */
  public get releaseDate(): Date {
    return this._releaseDate;
  }

  /**
   * Getter addedToPlaylistIn
   * @return {Date | null}
   */
  public get addedToPlaylistIn(): Date | null {
    return this._addedToPlaylistIn;
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
   * Setter minutes
   * @param {number} value
   */
  public set minutes(value: number) {
    this._minutes = value;
  }

  /**
   * Setter seconds
   * @param {number} value
   */
  public set seconds(value: number) {
    this._seconds = value;
  }

  /**
   * Setter plays
   * @param {number} value
   */
  public set plays(value: number) {
    this._plays = value;
  }

  /**
   * Setter path
   * @param {string} value
   */
  public set path(value: string) {
    this._path = value;
  }

  /**
   * Setter explicit
   * @param {boolean} value
   */
  public set explicit(value: boolean) {
    this._explicit = value;
  }

  /**
   * Setter lyrics
   * @param {string} value
   */
  public set lyrics(value: string) {
    this._lyrics = value;
  }

  /**
   * Setter releaseDate
   * @param {Date} value
   */
  public set releaseDate(value: Date) {
    this._releaseDate = value;
  }

  /**
   * Setter addedToPlaylistIn
   * @param {Date | null} value
   */
  public set addedToPlaylistIn(value: Date | null) {
    this._addedToPlaylistIn = value;
  }

  public listen() {
    this._plays += 1;
  }
}
