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
  "battleCar.getMacLocation": "格斗小车mac地址"
},
"zh-tw": {
  "battleCar.getMacLocation": "格鬥小車mac地址"
},
"en": {
  "battleCar.getMacLocation": "battle car mac address"
},
"fr": {
  "battleCar.getMacLocation": "adresse mac de la voiture de combat"
},
"ja": {
  "battleCar.getMacLocation": "バトルカーmacアドレス"
},
"de": {
  "battleCar.getMacLocation": "kampfwagen-mac-adresse"
},
"es": {
  "battleCar.getMacLocation": "dirección mac del coche de combate"
},
"ru": {
  "battleCar.getMacLocation": "mac-адрес боевой машины"
},
"cs": {
  "battleCar.getMacLocation": "mac adresa bojového auta"
},
"it": {
  "battleCar.getMacLocation": "indirizzo mac della battle car"
},
"pl": {
  "battleCar.getMacLocation": "adres mac samochodu bojowego"
},
"tr": {
  "battleCar.getMacLocation": "savaş arabası mac adresi"
},
"pt": {
  "battleCar.getMacLocation": "endereço mac do carro de combate"
},
"hr": {
  "battleCar.getMacLocation": "mac adresa borbenog automobila"
},
"hi": {
  "battleCar.getMacLocation": "बैटल कार mac पता"
},
"ko": {
  "battleCar.getMacLocation": "배틀카 mac 주소"
},
"th": {
  "battleCar.getMacLocation": "ที่อยู่ mac รถต่อสู้"
},
"nl": {
  "battleCar.getMacLocation": "mac-adres van gevechtsauto"
},
"ar": {
  "battleCar.getMacLocation": "عنوان mac لسيارة القتال"
},
"vi": {
  "battleCar.getMacLocation": "địa chỉ mac của xe chiến đấu"
},
"he": {
  "battleCar.getMacLocation": "כתובת mac של רכב הקרב"
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

