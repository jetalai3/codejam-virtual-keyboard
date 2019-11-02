const KEY_LAYOUTS = {
  EN: [
    {
      keyCode: 'Backquote',
      value: '`',
      shiftValue: '~',
    },
    {
      keyCode: 'Digit1',
      value: '1',
      shiftValue: '!',
    },
    {
      keyCode: 'Digit2',
      value: '2',
      shiftValue: '@',
    },
    {
      keyCode: 'Digit3',
      value: '3',
      shiftValue: '#',
    },
    {
      keyCode: 'Digit4',
      value: '4',
      shiftValue: '$',
    },
    {
      keyCode: 'Digit5',
      value: '5',
      shiftValue: '%',
    },
    {
      keyCode: 'Digit6',
      value: '6',
      shiftValue: '^',
    },
    {
      keyCode: 'Digit7',
      value: '7',
      shiftValue: '&',
    },
    {
      keyCode: 'Digit8',
      value: '8',
      shiftValue: '*',
    },
    {
      keyCode: 'Digit9',
      value: '9',
      shiftValue: '(',
    },
    {
      keyCode: 'Digit0',
      value: '0',
      shiftValue: ')',
    },
    {
      keyCode: 'Minus',
      value: '-',
      shiftValue: '_',
    },
    {
      keyCode: 'Equal',
      value: '=',
      shiftValue: '+',
    },
    {
      keyCode: 'Backspace',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'Tab',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'KeyQ',
      value: 'q',
      shiftValue: 'Q',
    },
    {
      keyCode: 'KeyW',
      value: 'w',
      shiftValue: 'W',
    },
    {
      keyCode: 'KeyE',
      value: 'e',
      shiftValue: 'E',
    },
    {
      keyCode: 'KeyR',
      value: 'r',
      shiftValue: 'R',
    },
    {
      keyCode: 'KeyT',
      value: 't',
      shiftValue: 'T',
    },
    {
      keyCode: 'KeyY',
      value: 'y',
      shiftValue: 'Y',
    },
    {
      keyCode: 'KeyU',
      value: 'u',
      shiftValue: 'U',
    },
    {
      keyCode: 'KeyI',
      value: 'i',
      shiftValue: 'I',
    },
    {
      keyCode: 'KeyO',
      value: 'o',
      shiftValue: 'O',
    },
    {
      keyCode: 'KeyP',
      value: 'p',
      shiftValue: 'P',
    },
    {
      keyCode: 'BracketLeft',
      value: '[',
      shiftValue: '{',
    },
    {
      keyCode: 'BracketRight',
      value: ']',
      shiftValue: '}',
    },
    {
      keyCode: 'Backslash',
      value: '\\',
      shiftValue: '|',
    },
    {
      keyCode: 'Delete',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'CapsLock',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'KeyA',
      value: 'a',
      shiftValue: 'A',
    },
    {
      keyCode: 'KeyS',
      value: 's',
      shiftValue: 'S',
    },
    {
      keyCode: 'KeyD',
      value: 'd',
      shiftValue: 'D',
    },
    {
      keyCode: 'KeyF',
      value: 'f',
      shiftValue: 'F',
    },
    {
      keyCode: 'KeyG',
      value: 'g',
      shiftValue: 'G',
    },
    {
      keyCode: 'KeyH',
      value: 'h',
      shiftValue: 'H',
    },
    {
      keyCode: 'KeyJ',
      value: 'j',
      shiftValue: 'J',
    },
    {
      keyCode: 'KeyK',
      value: 'k',
      shiftValue: 'K',
    },
    {
      keyCode: 'KeyL',
      value: 'l',
      shiftValue: 'L',
    },
    {
      keyCode: 'Semicolon',
      value: ';',
      shiftValue: ':',
    },
    {
      keyCode: 'Quote',
      value: '\'',
      shiftValue: '"',
    },
    {
      keyCode: 'Enter',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'ShiftLeft',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'KeyZ',
      value: 'z',
      shiftValue: 'Z',
    },
    {
      keyCode: 'KeyX',
      value: 'x',
      shiftValue: 'X',
    },
    {
      keyCode: 'KeyC',
      value: 'c',
      shiftValue: 'C',
    },
    {
      keyCode: 'KeyV',
      value: 'v',
      shiftValue: 'V',
    },
    {
      keyCode: 'KeyB',
      value: 'b',
      shiftValue: 'B',
    },
    {
      keyCode: 'KeyN',
      value: 'n',
      shiftValue: 'N',
    },
    {
      keyCode: 'KeyM',
      value: 'm',
      shiftValue: 'M',
    },
    {
      keyCode: 'Comma',
      value: ',',
      shiftValue: '<',
    },
    {
      keyCode: 'Period',
      value: '.',
      shiftValue: '>',
    },
    {
      keyCode: 'Slash',
      value: '/',
      shiftValue: '?',
    },
    {
      keyCode: 'ArrowUp',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'ShiftRight',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'ControlLeft',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'MetaLeft',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'AltLeft',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'Space',
      value: ' ',
      shiftValue: ' ',
    },
    {
      keyCode: 'AltRight',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'ArrowLeft',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'ArrowDown',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'ArrowRight',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'ControlRight',
      value: '',
      shiftValue: '',
    },
  ],
  RU: [
    {
      keyCode: 'Backquote',
      value: 'ё',
      shiftValue: 'Ё',
    },
    {
      keyCode: 'Digit1',
      value: '1',
      shiftValue: '!',
    },
    {
      keyCode: 'Digit2',
      value: '2',
      shiftValue: '"',
    },
    {
      keyCode: 'Digit3',
      value: '3',
      shiftValue: '№',
    },
    {
      keyCode: 'Digit4',
      value: '4',
      shiftValue: ';',
    },
    {
      keyCode: 'Digit5',
      value: '5',
      shiftValue: '%',
    },
    {
      keyCode: 'Digit6',
      value: '6',
      shiftValue: ':',
    },
    {
      keyCode: 'Digit7',
      value: '7',
      shiftValue: '?',
    },
    {
      keyCode: 'Digit8',
      value: '8',
      shiftValue: '*',
    },
    {
      keyCode: 'Digit9',
      value: '9',
      shiftValue: '(',
    },
    {
      keyCode: 'Digit0',
      value: '0',
      shiftValue: ')',
    },
    {
      keyCode: 'Minus',
      value: '-',
      shiftValue: '_',
    },
    {
      keyCode: 'Equal',
      value: '=',
      shiftValue: '+',
    },
    {
      keyCode: 'Backspace',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'Tab',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'KeyQ',
      value: 'й',
      shiftValue: 'Й',
    },
    {
      keyCode: 'KeyW',
      value: 'ц',
      shiftValue: 'Ц',
    },
    {
      keyCode: 'KeyE',
      value: 'у',
      shiftValue: 'У',
    },
    {
      keyCode: 'KeyR',
      value: 'к',
      shiftValue: 'К',
    },
    {
      keyCode: 'KeyT',
      value: 'е',
      shiftValue: 'Е',
    },
    {
      keyCode: 'KeyY',
      value: 'н',
      shiftValue: 'Н',
    },
    {
      keyCode: 'KeyU',
      value: 'г',
      shiftValue: 'Г',
    },
    {
      keyCode: 'KeyI',
      value: 'ш',
      shiftValue: 'Ш',
    },
    {
      keyCode: 'KeyO',
      value: 'щ',
      shiftValue: 'Щ',
    },
    {
      keyCode: 'KeyP',
      value: 'з',
      shiftValue: 'З',
    },
    {
      keyCode: 'BracketLeft',
      value: 'х',
      shiftValue: 'Х',
    },
    {
      keyCode: 'BracketRight',
      value: 'ъ',
      shiftValue: 'Ъ',
    },
    {
      keyCode: 'Backslash',
      value: '\\',
      shiftValue: '/',
    },
    {
      keyCode: 'Delete',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'CapsLock',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'KeyA',
      value: 'ф',
      shiftValue: 'Ф',
    },
    {
      keyCode: 'KeyS',
      value: 'ы',
      shiftValue: 'Ы',
    },
    {
      keyCode: 'KeyD',
      value: 'в',
      shiftValue: 'В',
    },
    {
      keyCode: 'KeyF',
      value: 'а',
      shiftValue: 'А',
    },
    {
      keyCode: 'KeyG',
      value: 'п',
      shiftValue: 'П',
    },
    {
      keyCode: 'KeyH',
      value: 'р',
      shiftValue: 'Р',
    },
    {
      keyCode: 'KeyJ',
      value: 'о',
      shiftValue: 'О',
    },
    {
      keyCode: 'KeyK',
      value: 'л',
      shiftValue: 'Л',
    },
    {
      keyCode: 'KeyL',
      value: 'д',
      shiftValue: 'Д',
    },
    {
      keyCode: 'Semicolon',
      value: 'ж',
      shiftValue: 'Ж',
    },
    {
      keyCode: 'Quote',
      value: 'э',
      shiftValue: 'Э',
    },
    {
      keyCode: 'Enter',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'ShiftLeft',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'KeyZ',
      value: 'я',
      shiftValue: 'Я',
    },
    {
      keyCode: 'KeyX',
      value: 'ч',
      shiftValue: 'Ч',
    },
    {
      keyCode: 'KeyC',
      value: 'с',
      shiftValue: 'С',
    },
    {
      keyCode: 'KeyV',
      value: 'м',
      shiftValue: 'М',
    },
    {
      keyCode: 'KeyB',
      value: 'и',
      shiftValue: 'И',
    },
    {
      keyCode: 'KeyN',
      value: 'т',
      shiftValue: 'Т',
    },
    {
      keyCode: 'KeyM',
      value: 'ь',
      shiftValue: 'Ь',
    },
    {
      keyCode: 'Comma',
      value: 'б',
      shiftValue: 'Б',
    },
    {
      keyCode: 'Period',
      value: 'ю',
      shiftValue: 'Ю',
    },
    {
      keyCode: 'Slash',
      value: '.',
      shiftValue: ',',
    },
    {
      keyCode: 'ArrowUp',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'ShiftRight',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'ControlLeft',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'MetaLeft',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'AltLeft',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'Space',
      value: ' ',
      shiftValue: ' ',
    },
    {
      keyCode: 'AltRight',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'ArrowLeft',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'ArrowDown',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'ArrowRight',
      value: '',
      shiftValue: '',
    },
    {
      keyCode: 'ControlRight',
      value: '',
      shiftValue: '',
    },
  ],
};

export default KEY_LAYOUTS;
