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
    "ASR.LOW": "低",
    "ASR.MIDDLE": "中",
    "ASR.HIGH": "高",
  },
  "zh-tw": {
    "ASR.LOW": "低",
    "ASR.MIDDLE": "中",
    "ASR.HIGH": "高"
  },
  "en": {
    "ASR.LOW": "low",
    "ASR.MIDDLE": "middle",
    "ASR.HIGH": "high"
  },
  "fr": {
    "ASR.LOW": "faible",
    "ASR.MIDDLE": "moyen",
    "ASR.HIGH": "élevé"
  },
  "ja": {
    "ASR.LOW": "低い",
    "ASR.MIDDLE": "中",
    "ASR.HIGH": "高い"
  },
  "de": {
    "ASR.LOW": "niedrig",
    "ASR.MIDDLE": "mittel",
    "ASR.HIGH": "hoch"
  },
  "es": {
    "ASR.LOW": "bajo",
    "ASR.MIDDLE": "medio",
    "ASR.HIGH": "alto"
  },
  "ru": {
    "ASR.LOW": "низкий",
    "ASR.MIDDLE": "средний",
    "ASR.HIGH": "высокий"
  },
  "cs": {
    "ASR.LOW": "nízký",
    "ASR.MIDDLE": "střední",
    "ASR.HIGH": "vysoký"
  },
  "it": {
    "ASR.LOW": "basso",
    "ASR.MIDDLE": "medio",
    "ASR.HIGH": "alto"
  },
  "pl": {
    "ASR.LOW": "niski",
    "ASR.MIDDLE": "średni",
    "ASR.HIGH": "wysoki"
  },
  "tr": {
    "ASR.LOW": "düşük",
    "ASR.MIDDLE": "orta",
    "ASR.HIGH": "yüksek"
  },
  "pt": {
    "ASR.LOW": "baixo",
    "ASR.MIDDLE": "médio",
    "ASR.HIGH": "alto"
  },
  "hr": {
    "ASR.LOW": "nisko",
    "ASR.MIDDLE": "srednje",
    "ASR.HIGH": "visoko"
  },
  "hi": {
    "ASR.LOW": "कम",
    "ASR.MIDDLE": "मध्यम",
    "ASR.HIGH": "उच्च"
  },
  "ko": {
    "ASR.LOW": "낮음",
    "ASR.MIDDLE": "중간",
    "ASR.HIGH": "높음"
  },
  "th": {
    "ASR.LOW": "ต่ำ",
    "ASR.MIDDLE": "ปานกลาง",
    "ASR.HIGH": "สูง"
  },
  "nl": {
    "ASR.LOW": "laag",
    "ASR.MIDDLE": "gemiddeld",
    "ASR.HIGH": "hoog"
  },
  "ar": {
    "ASR.LOW": "منخفض",
    "ASR.MIDDLE": "متوسط",
    "ASR.HIGH": "مرتفع"
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

