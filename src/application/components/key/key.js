import './key.css';

export default class Key {
  constructor(keyCode, keyValue, type) {
    this.keyCode = keyCode;
    this.keyValue = keyValue;
    this.type = type;
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
        // case 'ControlLeft':
        // case 'ControlRight':

        //   break;
        // case 'MetaLeft':

        //   break;
        // case 'AltLeft':
        // case 'AltRight':

      //   break;
      default:
        return null;
    }
  }
}
