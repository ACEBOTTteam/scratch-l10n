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
  "battleCar.weapon": "武器运动范围"
},
"zh-tw": {
  "battleCar.weapon": "武器運動範圍"
},
"en": {
  "battleCar.weapon": "weapon movement range"
},
"fr": {
  "battleCar.weapon": "plage de mouvement de l'arme"
},
"ja": {
  "battleCar.weapon": "武器の動作範囲"
},
"de": {
  "battleCar.weapon": "bewegungsbereich der waffe"
},
"es": {
  "battleCar.weapon": "rango de movimiento del arma"
},
"ru": {
  "battleCar.weapon": "диапазон движения оружия"
},
"cs": {
  "battleCar.weapon": "rozsah pohybu zbraně"
},
"it": {
  "battleCar.weapon": "intervallo di movimento dell'arma"
},
"pl": {
  "battleCar.weapon": "zakres ruchu broni"
},
"tr": {
  "battleCar.weapon": "silah hareket aralığı"
},
"pt": {
  "battleCar.weapon": "alcance de movimento da arma"
},
"hr": {
  "battleCar.weapon": "raspon kretanja oružja"
},
"hi": {
  "battleCar.weapon": "हथियार की गति सीमा"
},
"ko": {
  "battleCar.weapon": "무기 이동 범위"
},
"th": {
  "battleCar.weapon": "ช่วงการเคลื่อนไหวของอาวุธ"
},
"nl": {
  "battleCar.weapon": "bewegingsbereik van het wapen"
},
"ar": {
  "battleCar.weapon": "نطاق حركة السلاح"
},
"vi": {
  "battleCar.weapon": "phạm vi chuyển động vũ khí"
},
"he": {
  "battleCar.weapon": "טווח תנועת הנשק"
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

