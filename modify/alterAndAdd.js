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

const block = {

}

const extensions = {
  "zh-cn": {
    "KNN.RESULT.POSSIBILITY": "识别结果的可能性",
  },
  "zh-tw": {
    "KNN.RESULT.POSSIBILITY": "識別結果的可能性"
  },
  "en": {
    "KNN.RESULT.POSSIBILITY": "possibility of recognition result"
  },
  "fr": {
    "KNN.RESULT.POSSIBILITY": "probabilité du résultat de reconnaissance"
  },
  "ja": {
    "KNN.RESULT.POSSIBILITY": "認識結果の可能性"
  },
  "de": {
    "KNN.RESULT.POSSIBILITY": "wahrscheinlichkeit des erkennungsergebnisses"
  },
  "es": {
    "KNN.RESULT.POSSIBILITY": "posibilidad del resultado de reconocimiento"
  },
  "ru": {
    "KNN.RESULT.POSSIBILITY": "вероятность результата распознавания"
  },
  "cs": {
    "KNN.RESULT.POSSIBILITY": "pravděpodobnost výsledku rozpoznání"
  },
  "it": {
    "KNN.RESULT.POSSIBILITY": "possibilità del risultato di riconoscimento"
  },
  "pl": {
    "KNN.RESULT.POSSIBILITY": "prawdopodobieństwo wyniku rozpoznania"
  },
  "tr": {
    "KNN.RESULT.POSSIBILITY": "tanıma sonucunun olasılığı"
  },
  "pt": {
    "KNN.RESULT.POSSIBILITY": "possibilidade do resultado de reconhecimento"
  },
  "hr": {
    "KNN.RESULT.POSSIBILITY": "vjerojatnost rezultata prepoznavanja"
  },
  "hi": {
    "KNN.RESULT.POSSIBILITY": "पहचान परिणाम की संभावना"
  },
  "ko": {
    "KNN.RESULT.POSSIBILITY": "인식 결과의 가능성"
  },
  "th": {
    "KNN.RESULT.POSSIBILITY": "ความเป็นไปได้ของผลลัพธ์การจดจำ"
  },
  "nl": {
    "KNN.RESULT.POSSIBILITY": "mogelijkheid van herkenningsresultaat"
  },
  "ar": {
    "KNN.RESULT.POSSIBILITY": "احتمالية نتيجة التعرف"
  }
}

const interfaceData = {

}

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

