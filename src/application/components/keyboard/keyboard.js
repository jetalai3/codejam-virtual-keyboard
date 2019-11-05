import KEY_LAYOUTS from '../../../utils/constants';
import Key from '../key/key';
import './keyboard.css';

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
    this.getKeyValueForKeydown = this.getKeyValueForKeydown.bind(this);
    this.processClick = this.processClick.bind(this);
    this.processKeydown = this.processKeydown.bind(this);
    this.processKeyup = this.processKeyup.bind(this);
    this.processMousedown = this.processMousedown.bind(this);
    this.processMouseup = this.processMouseup.bind(this);
    this.keyLayouts = {};
    this.selectionStart = this.getTypedText().length;
  }

  renderKeyboard() {
    const keyboard = document.createElement('div');
    keyboard.id = 'keyboard';
    window.addEventListener('keydown', this.processKeydown);
    window.addEventListener('keyup', this.processKeyup);
    keyboard.addEventListener('click', this.processClick);
    keyboard.addEventListener('mousedown', this.processMousedown);
    keyboard.addEventListener('mouseup', this.processMouseup);
    const root = document.getElementById('root');
    root.appendChild(keyboard);
    this.renderLayout(this.getLanguage(), false);
    return this;
  }

  getRequiredChar(shift, element) {
    if (element.type === 'letter') {
      if ((JSON.parse(this.getCapsLock()) === true && shift === true)
       || (JSON.parse(this.getCapsLock()) === false && shift === false)) {
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

  getKeyValueForKeydown(e) {
    for (let i = 0; i < KEY_LAYOUTS[this.getLanguage()].length; i += 1) {
      if (Object.values(KEY_LAYOUTS[this.getLanguage()][i]).indexOf(e.code) >= 0) {
        return this.getRequiredChar(e.shiftKey, KEY_LAYOUTS[this.getLanguage()][i]);
      }
    }
    return false;
  }

  processKeydown(e) {
    const keyCode = this.getKeyValueForKeydown(e);
    if (!keyCode) {
      e.preventDefault();
      return;
    }
    if (!e.repeat) {
      this.toggleActiveClass(e);
    }
    switch (e.code) {
      case 'Backspace':
        this.processBackspace();
        break;
      case 'Tab':
        this.processTab();
        break;
      case 'CapsLock':
        this.processCapsLock(e);
        break;
      case 'Delete':
        this.processDelete();
        break;
      case 'ArrowLeft':
        this.processArrowLeft();
        break;
      case 'ArrowRight':
        this.processArrowRight();
        break;
      case 'ArrowDown':
        this.processArrowDown();
        break;
      case 'ArrowUp':
        this.processArrowUp();
        break;
      case 'Enter':
        this.processEnter();
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        if (e.repeat) return;
        this.renderLayout(this.getLanguage(), e.shiftKey, this.getCapsLock());
        this.toggleActiveClass(e);
        break;
      case 'ControlLeft':
      case 'ControlRight':
      case 'MetaLeft':
        break;
      case 'AltLeft':
      case 'AltRight':
        e.preventDefault();
        break;
      default:
        this.processTextInput(keyCode);
    }
  }

  processKeyup(e) {
    if (!this.getKeyValueForKeydown(e)) {
      e.preventDefault();
      return;
    }
    this.toggleActiveClass(e);
    switch (e.code) {
      case 'ShiftLeft':
      case 'ShiftRight':
        if (e.repeat) return;
        if (e.altKey) {
          this.setLanguage(this.getNextLanguage());
        }
        this.renderLayout(this.getLanguage(), e.shiftKey, this.getCapsLock());
        break;
      case 'AltLeft':
      case 'AltRight':
        if (e.repeat) return;
        if (e.shiftKey) {
          this.setLanguage(this.getNextLanguage());
        }
        this.renderLayout(this.getLanguage(), e.shiftKey, this.getCapsLock());
        break;
      default:
    }
  }

  processClick(e) {
    if (e.target.type !== 'button') return;
    switch (e.target.keyCode) {
      case 'Backspace':
        this.processBackspace();
        break;
      case 'Tab':
        this.processTab();
        break;
      case 'CapsLock':
        this.processCapsLock(e);
        break;
      case 'Delete':
        this.processDelete();
        break;
      case 'ArrowLeft':
        this.processArrowLeft();
        break;
      case 'ArrowRight':
        this.processArrowRight();
        break;
      case 'ArrowDown':
        this.processArrowDown();
        break;
      case 'ArrowUp':
        this.processArrowUp();
        break;
      case 'Enter':
        this.processEnter();
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        if (e.altKey) {
          this.setLanguage(this.getNextLanguage());
        }
        this.renderLayout(this.getLanguage(), e.shiftKey, this.getCapsLock());
        this.toggleActiveClass(e);
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
        this.processTextInput(e.target.textContent);
    }
  }

  processMousedown(e) {
    if (e.target.type !== 'button') return;
    e.target.classList.add('active');
    if (e.target.keyCode === 'ShiftLeft' || e.target.keyCode === 'ShiftRight') {
      this.setCapsLock();
      this.renderLayout(this.getLanguage(), e.shiftKey, this.getCapsLock());
    }
  }

  processMouseup(e) {
    if (e.target.type !== 'button') return;
    e.target.classList.remove('active');
    if (e.target.keyCode === 'ShiftLeft' || e.target.keyCode === 'ShiftRight') {
      this.setCapsLock();
      this.renderLayout(this.getLanguage(), e.shiftKey, this.getCapsLock());
    }
  }

  // eslint-disable-next-line class-methods-use-this
  toggleActiveClass(e) {
    Array.from(document.querySelectorAll('button')).forEach((el) => {
      if (el.keyCode === e.code) {
        el.classList.toggle('active');
      }
    });
  }

  processBackspace() {
    const ta = document.getElementById('textarea');
    if (ta.selectionStart === ta.selectionEnd) {
      if (ta.selectionStart === 0) {
        return;
      }
      this.selectionStart = ta.selectionStart - 1;
    } else {
      this.selectionStart = ta.selectionStart;
    }
    if (ta.selectionStart >= 0) {
      this.setTypedText(this.getTypedText().slice(0, this.selectionStart)
              + this.getTypedText().slice(ta.selectionEnd, this.getTypedText().length));
      this.onTypedTextChange();
      ta.focus();
      ta.selectionStart = this.selectionStart;
      ta.selectionEnd = this.selectionStart;
    }
  }

  processTab() {
    const ta = document.getElementById('textarea');
    this.setTypedText(`${this.getTypedText()}\t`);
    this.onTypedTextChange();
    this.selectionStart += 1;
    ta.selectionStart = this.selectionStart;
  }

  processDelete() {
    const ta = document.getElementById('textarea');
    if (this.selectionStart === null) this.selectionStart = ta.selectionStart;
    if (ta.selectionEnd === this.selectionStart) ta.selectionEnd += 1;
    if (ta.selectionStart < ta.value.length) {
      this.setTypedText(this.getTypedText().slice(0, this.selectionStart)
              + this.getTypedText().slice(ta.selectionEnd, this.getTypedText().length));
      this.onTypedTextChange();
      ta.focus();
      ta.selectionStart = this.selectionStart;
      ta.selectionEnd = this.selectionStart;
    }
  }

  processEnter() {
    const ta = document.getElementById('textarea');
    this.setTypedText(`${this.getTypedText()}\n`);
    this.onTypedTextChange();
    this.selectionStart += 1;
    ta.selectionStart = this.selectionStart;
  }

  processArrowLeft() {
    const ta = document.getElementById('textarea');
    ta.focus();
    if (ta.selectionStart > 0) {
      ta.selectionStart -= 1;
      ta.selectionEnd -= 1;
      this.selectionStart = ta.selectionStart;
    }
  }

  processArrowUp() {
    const ta = document.getElementById('textarea');
    ta.focus();
    ta.selectionStart = 0;
    ta.selectionEnd = 0;
    this.selectionStart = ta.selectionStart;
  }

  processArrowRight() {
    const ta = document.getElementById('textarea');
    ta.focus();
    if (ta.selectionStart < ta.value.length) {
      ta.selectionStart += 1;
      this.selectionStart = ta.selectionStart;
    }
  }

  processArrowDown() {
    const ta = document.getElementById('textarea');
    ta.focus();
    ta.selectionStart = ta.value.length + 1;
    this.selectionStart = ta.selectionStart;
  }

  processCapsLock(e) {
    this.setCapsLock();
    this.renderLayout(this.getLanguage(), e.shiftKey, this.getCapsLock());
    this.toggleActiveClass(e);
  }

  processTextInput(text) {
    const ta = document.getElementById('textarea');
    this.setTypedText(this.getTypedText().slice(0, ta.selectionStart)
    + text + this.getTypedText().slice(ta.selectionStart, this.getTypedText().length));
    this.onTypedTextChange();
    ta.focus();
    ta.selectionStart += 1;
    this.selectionStart = ta.selectionStart;
    ta.selectionEnd = ta.selectionStart;
  }
}
