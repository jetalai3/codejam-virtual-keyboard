import Keyboard from './keyboard/keyboard';

export default class App {
  constructor() {
    this.capsLock = false;
    this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'EN';
    this.typedText = localStorage.getItem('typedText') ? localStorage.getItem('typedText') : '';
    this.onTypedTextChange = this.onTypedTextChange.bind(this);
    this.getLanguage = this.getLanguage.bind(this);
    this.setLanguage = this.setLanguage.bind(this);
    this.getCapsLock = this.getCapsLock.bind(this);
    this.setCapsLock = this.setCapsLock.bind(this);
    this.processLoad = this.processLoad.bind(this);
    this.processUnload = this.processUnload.bind(this);
    this.getTypedText = this.getTypedText.bind(this);
    this.setTypedText = this.setTypedText.bind(this);
    this.keyboard = null;
    this.textArea = null;
  }

  getTypedText() {
    return this.typedText;
  }

  setTypedText(typedText) {
    this.typedText = typedText;
    localStorage.setItem('typedText', this.typedText);
  }

  onTypedTextChange() {
    this.textArea.value = this.typedText;
  }

  getLanguage() {
    return this.language;
  }

  setLanguage(language) {
    this.language = language;
    localStorage.setItem('language', this.language);
  }

  getCapsLock() {
    return this.capsLock;
  }

  setCapsLock() {
    this.capsLock = !this.capsLock;
  }

  processLoad() {
    if (localStorage.getItem('language')) {
      this.language = localStorage.getItem('language');
    }
    if (localStorage.getItem('typedText')) {
      this.typedText = localStorage.getItem('typedText');
      this.onTypedTextChange();
    }
  }

  processUnload() {
    if (localStorage.getItem('innerHtml')) {
      localStorage.removeItem('innerHtml');
      localStorage.removeItem('language');
      localStorage.removeItem('typedText');
    } else {
      const htmlContents = document.documentElement.innerHTML;
      localStorage.setItem('innerHtml', htmlContents);
      localStorage.setItem('language', this.language);
      localStorage.setItem('typedText', this.typedText);
    }
  }

  start() {
    const root = document.createElement('main');
    root.id = 'root';
    this.textArea = document.createElement('textarea');
    this.textArea.id = 'textarea';
    this.textArea.addEventListener('keydown', (e) => {
      e.preventDefault();
    });
    root.appendChild(this.textArea);
    document.querySelector('body').appendChild(root);
    this.textArea.focus();
    this.textArea.selectionStart = this.getTypedText().length;
    this.textArea.selectionEnd = this.getTypedText().length;
    this.keyboard = new Keyboard(this.getCapsLock, this.setCapsLock, this.getLanguage,
      this.setLanguage, this.getTypedText, this.setTypedText, this.onTypedTextChange);
    this.keyboard.renderKeyboard();
    window.addEventListener('load', this.processLoad);
    window.addEventListener('unload', this.processUnload);
  }
}
