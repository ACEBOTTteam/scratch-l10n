const fs = require('fs')

/**
 * 积木
 * block = {
 *      "zh-cn":{
 *          ROBOT_SET_TYPE: "设置类型"
 *      }
 * }
 * 
 * 拓展
 * extensions = {
 *      "arm_car.categoryName": "机械臂小车", //拓展名称
 *      "arm_car.init": "机械臂小车初始化",
 * }
 * 
 * 页面
 * interfaceData = {
 *      "gui.modify.searchBlock": "搜索积木",
 * }
 * 
 */

const block = {}

const extensions = {
  "zh-cn": {
    "nineInOne_delay": "等待[ONE]毫秒",
    "nineInOne_init": "九合一模块初始化"
  },
  "zh-tw": {
    "nineInOne_delay": "等待[ONE]毫秒",
    "nineInOne_init": "九合一模組初始化"
  },
  "en": {
    "nineInOne_delay": "wait [ONE] milliseconds",
    "nineInOne_init": "9-in-1 module initialization"
  },
  "fr": {
    "nineInOne_delay": "attendre [ONE] millisecondes",
    "nineInOne_init": "initialisation du module 9-en-1"
  },
  "ja": {
    "nineInOne_delay": "[ONE]ミリ秒待機",
    "nineInOne_init": "9-in-1モジュール初期化"
  },
  "de": {
    "nineInOne_delay": "[ONE] millisekunden warten",
    "nineInOne_init": "9-in-1-modul initialisierung"
  },
  "es": {
    "nineInOne_delay": "esperar [ONE] milisegundos",
    "nineInOne_init": "inicialización del módulo 9 en 1"
  },
  "ru": {
    "nineInOne_delay": "ожидать [ONE] миллисекунд",
    "nineInOne_init": "инициализация модуля 9-в-1"
  },
  "cs": {
    "nineInOne_delay": "čekat [ONE] milisekund",
    "nineInOne_init": "inicializace modulu 9 v 1"
  },
  "it": {
    "nineInOne_delay": "attendere [ONE] millisecondi",
    "nineInOne_init": "inizializzazione modulo 9 in 1"
  },
  "pl": {
    "nineInOne_delay": "czekaj [ONE] milisekund",
    "nineInOne_init": "inicjalizacja modułu 9 w 1"
  },
  "tr": {
    "nineInOne_delay": "[ONE] milisaniye bekle",
    "nineInOne_init": "9'u 1 arada modül başlatma"
  },
  "pt": {
    "nineInOne_delay": "aguarde [ONE] milissegundos",
    "nineInOne_init": "inicialização do módulo 9 em 1"
  },
  "hr": {
    "nineInOne_delay": "čekaj [ONE] milisekundi",
    "nineInOne_init": "inicijalizacija 9-u-1 modula"
  },
  "hi": {
    "nineInOne_delay": "[ONE] मिलीसेकंड प्रतीक्षा करें",
    "nineInOne_init": "9-इन-1 मॉड्यूल प्रारंभ करें"
  },
  "ko": {
    "nineInOne_delay": "[ONE]밀리초 대기",
    "nineInOne_init": "9-in-1 모듈 초기화"
  },
  "th": {
    "nineInOne_delay": "รอ [ONE] มิลลิวินาที",
    "nineInOne_init": "เริ่มต้นโมดูล 9-in-1"
  },
  "nl": {
    "nineInOne_delay": "wacht [ONE] milliseconden",
    "nineInOne_init": "9-in-1 module initialisatie"
  },
  "ar": {
    "nineInOne_delay": "انتظر [ONE] مللي ثانية",
    "nineInOne_init": "تهيئة وحدة 9 في 1"
  },
  "vi": {
    "nineInOne_delay": "đợi [ONE] mili giây",
    "nineInOne_init": "khởi tạo mô-đun 9 trong 1"
  },
  "he": {
    "nineInOne_delay": "המתן [ONE] מילישניות",
    "nineInOne_init": "אתחול מודול 9 ב-1"
  }
}

const interfaceData = {}


const alterAndAdd = (jsonData, path) => {
  let blockPath = path
  for (let [key, value] of Object.entries(jsonData)) {
    let path = blockPath + key + '.json'
    if (Object.keys(value).length) {
      fs.readFile(path, function (err, data) {
        if (err) {
          console.error(err)
          return
        }
        let json = JSON.parse(data.toString());

        for (let [index, item] of Object.entries(value)) {
          json[index] = item
        }
        json = JSON.stringify(json, null, '\t')
        fs.writeFile(path, json, function (err) {
          if (err) {
            console.error(err);
          }
          console.log('--------------------修改成功');
          console.log(jsonData);
        })
      })
    }
  }
}

alterAndAdd(block, './editor/blocks/')
alterAndAdd(extensions, './editor/extensions/')
alterAndAdd(interfaceData, './editor/interface/')

