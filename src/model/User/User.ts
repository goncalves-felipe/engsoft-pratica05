import { Playlist } from "../Playlist/Playlist";

export class User {
  private _id: number;
  private _name: string;
  private _birthDate: Date;
  private _email: string;
  private _dateCreation: Date;
  private _playlists: Playlist[];

  constructor(
    id: number,
    name: string,
    birthDate: Date,
    email: string,
    dateCreation: Date,
    playlists: Playlist[]
  ) {
    this._id = id;
    this._name = name;
    this._birthDate = birthDate;
    this._email = email;
    this._dateCreation = dateCreation;
    this._playlists = playlists;
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
   * Getter birthDate
   * @return {Date}
   */
  public get birthDate(): Date {
    return this._birthDate;
  }

  /**
   * Getter email
   * @return {string}
   */
  public get email(): string {
    return this._email;
  }

  /**
   * Getter dateCreation
   * @return {Date}
   */
  public get dateCreation(): Date {
    return this._dateCreation;
  }

  /**
   * Getter playlists
   * @return {Playlist[]}
   */
  public get playlists(): Playlist[] {
    return this._playlists;
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
   * Setter birthDate
   * @param {Date} value
   */
  public set birthDate(value: Date) {
    this._birthDate = value;
  }

  /**
   * Setter email
   * @param {string} value
   */
  public set email(value: string) {
    this._email = value;
  }

  /**
   * Setter dateCreation
   * @param {Date} value
   */
  public set dateCreation(value: Date) {
    this._dateCreation = value;
  }

  /**
   * Setter playlists
   * @param {Playlist[]} value
   */
  public set playlists(value: Playlist[]) {
    this._playlists = value;
  }
}
