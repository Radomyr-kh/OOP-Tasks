export default class Student {
  constructor(fullName, direction) {
    this._fullName = fullName;
    this._direction = direction;
  }
  showFullName() {
    return `${this._fullName}`;
  }
  nameIncludes(data) {
    return this.showFullName().includes(data);
  }
  static studentBuilder() {
    return new Student('Ihor Kohut', 'qc');
  }
  get direction() {
    return this._direction;
  }
  set direction(value) {
    this._direction = value;
  }
}
