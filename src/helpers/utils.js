export const getToken = () => localStorage.getItem('UIToken');
export const getLanguage = () => localStorage.getItem('UILanguage');

export function isDevelopmentStage() {
  return process.env.NODE_ENV === 'development';
}

export function preload(path) {
  const img = new Image();
  img.src = path;
}

export function getDateFromIso(iso) {
  const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec' ];
  const parsed = new Date(iso);
  const minutes = parsed.getMinutes();
  const hours = parsed.getHours();
  const seconds = parsed.getSeconds();
  const year = parsed.getFullYear();

  let monthNum = parsed.getMonth() + 1;
  monthNum = monthNum < 10 ? `0${monthNum}` : monthNum;
  let time = '';
  time += `${(hours < 10 ? '0' : '') + hours}:`;
  time += (minutes < 10 ? '0' : '') + minutes;

  let day = parsed.getDate();
  day = day < 10 ? `0${day}` : day;

  const monthText = months[parsed.getMonth()];

  return {
    time, day, year, monthNum, monthText, seconds,
  };
}

export function numWithCommas(number = 0) {
  const parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return parts.join('.');
}

export function getTokenFromUrl() {
  const splitUrl = window.location.href.split('/');
  const tokenMatch = splitUrl.find(el => el.includes('token='));
  return tokenMatch ? tokenMatch.split('token=')[1] : '';
}

export const filterbetween = (arr, min, max) => (
  arr.filter(item => item.bet >= min && item.bet <= max)
);

export const secondsToTime = (secs) => {
  const divisorForMinutes = secs % (60 * 60);
  const minutes = Math.floor(divisorForMinutes / 60);

  const divisorForSeconds = divisorForMinutes % 60;
  let seconds = Math.ceil(divisorForSeconds);
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${seconds}`;
};

export function getMobileOperatingSystem() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return 'Windows Phone';
  }

  if (/android/i.test(userAgent)) {
    return 'Android';
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'IOS';
  }

  return 'unknown';
}

export function getOrdinalPostfix(num) {
  if ((num % 100 > 9) && (num % 100 < 20)) return 'th';
  const remainder = num % 10;
  switch (remainder) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

export function addKey(object, key) {
  object[key] = null;
  return object;
}

export function forMap(iterationCount, cb) {
  forMap.break = '#34#null#break#hdk89';

  const arr = [];
  if (typeof iterationCount !== 'number' || isNaN(iterationCount)) {
    throw new TypeError('first arg should be a number');
  }
  if (typeof cb !== 'function') {
    throw new TypeError(`${cb} is not a function`);
  }

  for (let index = 0; index < iterationCount; index + 1) {
    const val = cb(index, iterationCount);
    if (val === forMap.break) {
      break;
    }
    arr.push(val);
  }
  return arr;
}

export function canConvertToNumber(value) {
  return typeof Number(value) === 'number' && !isNaN(value);
}

export function isBetweenRange(x, min, max) {
  return x >= min && x <= max;
}

/**
* @param {number | string} number
* @return {string}
* */

export function capitalize(word) {
  if (typeof word !== 'string') return '';
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export const sortNumber = (a, b, isTop) => (isTop ? a - b : b - a);
export const sortString = (a, b, isTop) => (isTop ? a.localeCompare(b) : b.localeCompare(a));

export const copyTableToClipboard = (id) => {
  const { body } = document; let range; let
    sel;
  const table = document.querySelector(`#${id}`);
  if (document.createRange && window.getSelection) {
    range = document.createRange();
    sel = window.getSelection();
    sel.removeAllRanges();
    try {
      range.selectNodeContents(table);
      sel.addRange(range);
    } catch (e) {
      range.selectNode(table);
      sel.addRange(range);
    }
  } else if (body.createTextRange) {
    range = body.createTextRange();
    range.moveToElementText(table);
    range.select();
  }
  document.execCommand('Copy');
};
