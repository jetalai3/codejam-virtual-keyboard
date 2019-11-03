import KEY_LAYOUTS from '../../../utils/constants';
import Key from '../key/key';

export default class Keyboard {
  constructor(getCapsLock, setCapsLock, getLanguage, setLanguage,
    getTypedText, setTypedText, onTypedTextChange) {
    this.getCapsLock = getCapsLock;
    this.setCapsLock = setCapsLock;
    this.getLanguage = getLanguage;
    this.setLanguage = setLanguage;
    this.getTypedText = getTypedText;
    this.setTypedText = setTypedText;
    this.onTypedTextChange = onTypedTextChange;
    this.getNextLanguage = this.getNextLanguage.bind(this);
    this.keyLayouts = {};
  }

  renderKeyboard() {
    const keyboard = document.createElement('div');
    keyboard.id = 'keyboard';
    window.addEventListener('keydown', (e) => {
      switch (e.code) {
        case 'Backspace':
          this.setTypedText(this.getTypedText().substring(0, this.getTypedText().length - 1));
          this.onTypedTextChange();
          break;
        case 'Tab':
          this.setTypedText(`${this.getTypedText()}\t`);
          this.onTypedTextChange();
          break;
        case 'CapsLock':
          this.setCapsLock();
          this.renderLayout(this.getLanguage(), e.shiftKey, this.getCapsLock());
          break;
        case 'Delete':
          // eslint-disable-next-line no-case-declarations
          const textArea = document.getElementById('textarea');
          if (textArea.selectionStart < textArea.value.length) {
            const tmp = textArea.selectionStart;
            this.setTypedText(this.getTypedText().slice(0, tmp)
                              + this.getTypedText().slice(tmp + 1, this.getTypedText().length));
            textArea.selectionStart = tmp;
            this.onTypedTextChange();
          }
          break;
        case 'Enter':
          this.setTypedText(`${this.getTypedText()}\n`);
          this.onTypedTextChange();
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          this.renderLayout(this.getLanguage(), e.shiftKey, this.getCapsLock());
          break;
        case 'ControlLeft':
        case 'ControlRight':
        case 'MetaLeft':
        case 'AltLeft':
        case 'AltRight':
          break;
        default:
          this.setTypedText(`${this.getTypedText()}${e.key}`);
          this.onTypedTextChange();
      }
    });
    window.addEventListener('keyup', (e) => {
      switch (e.code) {
        case 'ShiftLeft':
        case 'ShiftRight':
          if (e.altKey) {
            this.setLanguage(this.getNextLanguage());
          }
          this.renderLayout(this.getLanguage(), e.shiftKey, this.getCapsLock());
          break;
        case 'ControlLeft':
        case 'ControlRight':
        case 'MetaLeft':
        case 'Backspace':
        case 'Tab':
        case 'CapsLock':
        case 'Delete':
        case 'Enter':
          break;
        case 'AltLeft':
        case 'AltRight':
          if (e.shiftKey) {
            this.setLanguage(this.getNextLanguage());
          }
          this.renderLayout(this.getLanguage(), e.shiftKey, this.getCapsLock());
          break;
        default:
      }
    });
    keyboard.addEventListener('click', (e) => {
      if (e.target.type !== 'button') return;
      switch (e.target.keyCode) {
        case 'Backspace':
          this.setTypedText(this.getTypedText().substring(0, this.getTypedText().length - 1));
          this.onTypedTextChange();
          break;
        case 'Tab':
          this.setTypedText(`${this.getTypedText()}\t`);
          this.onTypedTextChange();
          break;
        case 'CapsLock':
          this.setCapsLock();
          this.renderLayout(this.getLanguage(), e.shiftKey, this.getCapsLock());
          break;
        case 'Delete':
          // eslint-disable-next-line no-case-declarations
          const textArea = document.getElementById('textarea');
          if (textArea.selectionStart < textArea.value.length) {
            const tmp = textArea.selectionStart;
            this.setTypedText(this.getTypedText().slice(0, tmp)
                              + this.getTypedText().slice(tmp + 1, this.getTypedText().length));
            textArea.selectionStart = tmp;
            this.onTypedTextChange();
          }
          break;
        case 'Enter':
          this.setTypedText(`${this.getTypedText()}\n`);
          this.onTypedTextChange();
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          if (e.altKey) {
            this.setLanguage(this.getNextLanguage());
          }
          this.renderLayout(this.getLanguage(), e.shiftKey, this.getCapsLock());
          break;
        case 'ControlLeft':
        case 'ControlRight':
        case 'MetaLeft':
          break;
        case 'AltLeft':
        case 'AltRight':
          if (e.shiftKey) {
            this.setLanguage(this.getNextLanguage());
          }
          this.renderLayout(this.getLanguage(), e.shiftKey, this.getCapsLock());
          break;
        default:
          this.setTypedText(`${this.getTypedText()}${e.target.textContent}`);
          this.onTypedTextChange();
      }
    });
    keyboard.addEventListener('mousedown', (e) => {
      if (e.target.type !== 'button') return;
      e.target.classList.add('active');
      if (e.target.keyCode === 'ShiftLeft' || e.target.keyCode === 'ShiftRight') this.setCapsLock();
    });
    keyboard.addEventListener('mouseup', (e) => {
      if (e.target.type !== 'button') return;
      e.target.classList.remove('active');
      if (e.target.keyCode === 'ShiftLeft' || e.target.keyCode === 'ShiftRight') this.setCapsLock();
    });
    const root = document.getElementById('root');
    root.appendChild(keyboard);
    this.renderLayout(this.getLanguage(), false);
    return this;
  }

  getRequiredChar(shift, element) {
    if (element.type === 'letter') {
      if ((this.getCapsLock() && shift) || (!this.getCapsLock() && !shift)) {
        return element.value;
      }
      return element.shiftValue;
    }
    return shift ? element.shiftValue : element.value;
  }

  createKeyElementLayout(language, shift) {
    const layoutName = language + shift + this.getCapsLock();
    if (!this.keyLayouts[layoutName]) {
      this.keyLayouts[layoutName] = [];
      KEY_LAYOUTS[language].forEach((element) => {
        const char = this.getRequiredChar(shift, element);
        const key = new Key(element.keyCode, char, element.type);
        this.keyLayouts[layoutName].push(key);
      });
    }
    return layoutName;
  }

  renderLayout(language, shift) {
    const layoutName = this.createKeyElementLayout(language, shift);
    const keyboard = document.getElementById('keyboard');
    while (keyboard.firstChild) {
      keyboard.removeChild(keyboard.firstChild);
    }
    const fragment = document.createDocumentFragment();
    this.keyLayouts[layoutName].forEach((key) => {
      fragment.appendChild(key.createKey());
    });
    keyboard.appendChild(fragment);
  }

  getNextLanguage() {
    const currentIndex = Object.keys(KEY_LAYOUTS).indexOf(this.getLanguage());
    if (currentIndex === Object.keys(KEY_LAYOUTS).length - 1) {
      return Object.keys(KEY_LAYOUTS)[0];
    }
    return Object.keys(KEY_LAYOUTS)[currentIndex + 1];
  }
}
