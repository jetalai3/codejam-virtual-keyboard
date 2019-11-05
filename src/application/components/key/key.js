import './key.css';

export default class Key {
  constructor(keyCode, keyValue, charType) {
    this.keyCode = keyCode;
    this.keyValue = keyValue;
    this.charType = charType;
    this.setSpecificStyles = this.setSpecificStyles.bind(this);
  }

  createKey() {
    const keyElement = document.createElement('button');
    keyElement.setAttribute('type', 'button');
    keyElement.classList.add('keyboard__key');
    const classes = this.setSpecificStyles();
    if (classes !== null) keyElement.classList.add(classes);
    keyElement.textContent = this.keyValue;
    keyElement.keyCode = this.keyCode;
    keyElement.charType = this.charType;
    return keyElement;
  }

  setSpecificStyles() {
    switch (this.keyCode) {
      case 'Backspace':
      case 'CapsLock':
      case 'Enter':
      case 'ShiftLeft':
      case 'ShiftRight':
        return 'wide';
      case 'Tab':
      case 'Delete':
        return 'medium';
      case 'Space':
        return 'space';
      default:
        return null;
    }
  }
}
