export default class Keyboard {
  constructor(getCapsLock, setCapsLock, getLanguage, setLanguage,
    getTypedText, setTypedText, onTextChange) {
    this.getCapsLock = getCapsLock;
    this.setCapsLock = setCapsLock;
    this.getLanguage = getLanguage;
    this.setLanguage = setLanguage;
    this.getTypedText = getTypedText;
    this.setTypedText = setTypedText;
    this.onTextChange = onTextChange;
  }

  renderKeyboard() {
    const keyboard = document.createElement('div');
    keyboard.id = 'keyboard';
    window.addEventListener('keypress', this.log);
    window.addEventListener('keydown', this.log);
    window.addEventListener('keyup', this.log);
    keyboard.addEventListener('click', this.log);
    const root = document.getElementById('root');
    root.appendChild(keyboard);
    return this;
  }

  // eslint-disable-next-line class-methods-use-this
  log() {
    // eslint-disable-next-line no-console
    console.log('key pressed');
  }
}
