export default class Task {
  private _id: number;
  private _text: string;

  public get id() {
    return this._id;
  }

  public get text() {
    return this._text;
  }

  public completed;

  constructor(id: number, text: string, completed: boolean = false) {
    if (!Number.isInteger(id)) {
      throw new Error('Task id must be an integer.');
    }

    if (!text) {
      throw new Error('Task text must be defined.');
    }

    this._id = id;
    this._text = text;
    this.completed = completed;
  }
}
