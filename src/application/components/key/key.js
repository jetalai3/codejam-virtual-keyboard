export default class Key {
  constructor(keyCode, keyValue) {
    this.keyCode = keyCode;
    this.keyValue = keyValue;
  }

  createKey() {
    return this;
  }
}
