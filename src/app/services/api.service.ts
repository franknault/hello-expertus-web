import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  langs = {
    1: 'af',
    2: 'sq',
    3: 'am',
    4: 'ar',
    5: 'hy',
    6: 'az',
    7: 'eu',
    8: 'be',
    9: 'bn',
    10: 'bs',
    11: 'bg',
    12: 'ca',
    13: 'ceb',
    14: 'ny',
    15: 'zh-cn',
    16: 'zh-tw',
    17: 'co',
    18: 'hr',
    19: 'cs',
    20: 'da',
    21: 'nl',
    22: 'en',
    23: 'eo',
    24: 'et',
    25: 'tl',
    26: 'fi',
    27: 'fr',
    28: 'fy',
    29: 'gl',
    30: 'ka',
    31: 'de',
    32: 'el',
    33: 'gu',
    34: 'ht',
    35: 'ha',
    36: 'haw',
    37: 'iw',
    38: 'hi',
    39: 'hmn',
    40: 'hu',
    41: 'is',
    42: 'ig',
    43: 'id',
    44: 'ga',
    45: 'it',
    46: 'ja',
    47: 'jw',
    48: 'kn',
    49: 'kk',
    50: 'km',
    51: 'ko',
    52: 'ku',
    53: 'ky',
    54: 'lo',
    55: 'la',
    56: 'lv',
    57: 'lt',
    58: 'lb',
    59: 'mk',
    60: 'mg',
    61: 'ms',
    62: 'ml',
    63: 'mt',
    64: 'mi',
    65: 'mr',
    66: 'mn',
    67: 'my',
    68: 'ne',
    69: 'no',
    70: 'ps',
    71: 'fa',
    72: 'pl',
    73: 'pt',
    74: 'ma',
    75: 'ro',
    76: 'ru',
    77: 'sm',
    78: 'gd',
    79: 'sr',
    80: 'st',
    81: 'sn',
    82: 'sd',
    83: 'si',
    84: 'sk',
    85: 'sl',
    86: 'so',
    87: 'es',
    88: 'su',
    89: 'sw',
    90: 'sv',
    91: 'tg',
    92: 'ta',
    93: 'te',
    94: 'th',
    95: 'tr',
    96: 'uk',
    97: 'ur',
    98: 'uz',
    99: 'vi',
    100: 'cy',
  };

  prod: string = "https://hello-expertus-api.herokuapp.com/";
  dev: string = "http://localhost:8080/";
  url = this.prod;

  constructor(
    private http: Http,
  ) {
  }

  getRandomLanguage() {
    return this.langs[(Math.random() * 100 | 10)];
  }

  getMessage(language) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.url + 'api/message?language='+language, {headers: headers}).pipe(map(res => res.json()));
  }
}
