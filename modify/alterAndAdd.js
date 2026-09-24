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
    "chatbot.matchingCode": "打印配对码"
  },
  "zh-tw": {
    "chatbot.matchingCode": "列印配對碼"
  },
  "en": {
    "chatbot.matchingCode": "print pairing code"
  },
  "fr": {
    "chatbot.matchingCode": "imprimer le code d'appairage"
  },
  "ja": {
    "chatbot.matchingCode": "ペアリングコードを印刷"
  },
  "de": {
    "chatbot.matchingCode": "kopplungscode drucken"
  },
  "es": {
    "chatbot.matchingCode": "imprimir código de emparejamiento"
  },
  "ru": {
    "chatbot.matchingCode": "напечатать код сопряжения"
  },
  "cs": {
    "chatbot.matchingCode": "vytisknout párovací kód"
  },
  "it": {
    "chatbot.matchingCode": "stampa codice di abbinamento"
  },
  "pl": {
    "chatbot.matchingCode": "wydrukuj kod parowania"
  },
  "tr": {
    "chatbot.matchingCode": "eşleştirme kodunu yazdır"
  },
  "pt": {
    "chatbot.matchingCode": "imprimir código de emparelhamento"
  },
  "hr": {
    "chatbot.matchingCode": "ispisati kod za uparivanje"
  },
  "hi": {
    "chatbot.matchingCode": "पेयरिंग कोड प्रिंट करें"
  },
  "ko": {
    "chatbot.matchingCode": "페어링 코드 인쇄"
  },
  "th": {
    "chatbot.matchingCode": "พิมพ์รหัสจับคู่"
  },
  "nl": {
    "chatbot.matchingCode": "koppelingscode afdrukken"
  },
  "ar": {
    "chatbot.matchingCode": "طباعة رمز الاقتران"
  },
  "vi": {
    "chatbot.matchingCode": "in mã ghép nối"
  },
  "he": {
    "chatbot.matchingCode": "הדפס קוד זיווג"
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

