/**
 * Currently supported locales for the Scratch Project
 * @type {Object} Key Value pairs of locale code: Language name written in the language
 */

const locales = {
    // 'ab': {name: 'Аҧсшәа'},
    // 'af': {name: 'Afrikaans'},
    'ar': {name: 'العربية'}, //阿拉伯语
    // 'am': {name: 'አማርኛ'},
    // 'an': {name: 'Aragonés'},
    // 'ast': {name: 'Asturianu'},
    // 'az': {name: 'Azeri'},
    // 'id': {name: 'Bahasa Indonesia'},
    // 'bn': {name: 'বাংলা'},
    // 'be': {name: 'Беларуская'},
    // 'bg': {name: 'Български'},
    // 'ca': {name: 'Català'},
    'cs': {name: 'Česky'},  //捷克语
    // 'cy': {name: 'Cymraeg'},
    // 'da': {name: 'Dansk'},
    'de': {name: 'Deutsch'}, //德语
    // 'et': {name: 'Eesti'},
    // 'el': {name: 'Ελληνικά'},
    'en': {name: 'English'},
    'es': {name: 'Español (España)'}, //西班牙语
    // 'es-419': {name: 'Español Latinoamericano'},
    // 'eo': {name: 'Esperanto'},
    // 'eu': {name: 'Euskara'},
    // 'fa': {name: 'فارسی'},
    // 'fil': {name: 'Filipino'},
    'fr': {name: 'Français'}, //法语
    // 'fy': {name: 'Frysk'},
    // 'ga': {name: 'Gaeilge'},
    // 'gd': {name: 'Gàidhlig'},
    // 'gl': {name: 'Galego'},
    'ko': {name: '한국어'}, //韩语
    // 'ha': {name: 'Hausa'},
    // 'hy': {name: 'Հայերեն'},
    'he': {name: 'עִבְרִית'}, //希伯来语
    'hi': {name: 'हिंदी'}, //印地语
    'hr': {name: 'Hrvatski'}, //克罗地亚语
    // 'xh': {name: 'isiXhosa'},
    // 'zu': {name: 'isiZulu'},
    // 'is': {name: 'Íslenska'},
    'it': {name: 'Italiano'}, //意大利语
    // 'ka': {name: 'ქართული ენა'},
    // 'kk': {name: 'қазақша'},
    // 'qu': {name: 'Kichwa'},
    // 'sw': {name: 'Kiswahili'},
    // 'ht': {name: 'Kreyòl ayisyen'},
    // 'ku': {name: 'Kurdî'},
    // 'ckb': {name: 'کوردیی ناوەندی'},
    // 'lv': {name: 'Latviešu'},
    // 'lt': {name: 'Lietuvių'},
    // 'hu': {name: 'Magyar'},
    // 'mi': {name: 'Māori'},
    // 'mn': {name: 'Монгол хэл'},
    'nl': {name: 'Nederlands'}, //荷兰语
    'ja': {name: '日本語'},
    // 'ja-Hira': {name: 'にほんご'},
    // 'nb': {name: 'Norsk Bokmål'},
    // 'nn': {name: 'Norsk Nynorsk'},
    // 'oc': {name: 'Occitan'},
    // 'or': {name: 'ଓଡ଼ିଆ'},
    // 'uz': {name: 'Oʻzbekcha'},
    'th': {name: 'ไทย'}, //泰语
    // 'km': {name: 'ភាសាខ្មែរ'},
    'pl': {name: 'Polski'}, //波兰语
    'pt': {name: 'Português'}, //葡萄牙语
    // 'pt-br': {name: 'Português Brasileiro'},
    // 'rap': {name: 'Rapa Nui'},
    // 'ro': {name: 'Română'},
    'ru': {name: 'Русский'}, //俄语
    // 'nso': {name: 'Sepedi'},
    // 'tn': {name: 'Setswana'},
    // 'sk': {name: 'Slovenčina'},
    // 'sl': {name: 'Slovenščina'},
    // 'sr': {name: 'Српски'},
    // 'fi': {name: 'Suomi'},
    // 'sv': {name: 'Svenska'},
    'vi': {name: 'Tiếng Việt'}, //越南语
    'tr': {name: 'Türkçe'}, //土耳其语
    // 'uk': {name: 'Українська'},
    'zh-cn': {name: '简体中文'},
    'zh-tw': {name: '繁體中文'}
};

const customLocales = {
    'ab': {
        locale: 'ab',
        parentLocale: 'ru'
    },
    // Aragonese is not in the locale data, using es for Spain
    'an': {
        locale: 'an',
        parentLocale: 'es'
    },
    // haitian creole is not in locale-langData
    'ht': {
        locale: 'ht',
        parentLocale: 'fr'
    },
    'oc': {
        locale: 'oc',
        parentLocale: 'fr'
    },
    'rap': {
        locale: 'rap',
        parentLocale: 'es'
    },
    // TODO: replace zh-cn, zh-tw with zh-Hans and zh-Hant then customLocales is unnecessary
    'zh-cn': {
        locale: 'zh-cn',
        parentLocale: 'zh'
    },
    'zh-tw': {
        locale: 'zh-tw',
        parentLocale: 'zh'
    }
};

const localeMap = {
    'aa-dj': 'aa_DJ',
    'es-419': 'es_419',
    // ja-Hira: no map - it's 'ja-Hira' on transifex
    'pt-br': 'pt_BR',
    'zh-cn': 'zh_CN',
    'zh-tw': 'zh_TW'
};

// list of RTL locales supported, and a function to check whether a locale is RTL
const rtlLocales = [
    'ar',
    'ckb',
    'fa',
    'he'
];

const isRtl = locale => {
    return rtlLocales.indexOf(locale) !== -1;
};

export {locales as default, customLocales, localeMap, isRtl};
