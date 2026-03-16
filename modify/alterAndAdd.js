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
  "zh-cn": {
    "ESPNOW_SET_CHANNEL": "ESP NOW 设置信道%1",
  },
  "zh-tw": {
    "ESPNOW_SET_CHANNEL": "ESP NOW 設置信道%1"
  },
  "en": {
    "ESPNOW_SET_CHANNEL": "ESP NOW set channel %1"
  },
  "fr": {
    "ESPNOW_SET_CHANNEL": "ESP NOW définir le canal %1"
  },
  "ja": {
    "ESPNOW_SET_CHANNEL": "ESP NOW チャンネル%1を設定"
  },
  "de": {
    "ESPNOW_SET_CHANNEL": "ESP NOW kanal %1 festlegen"
  },
  "es": {
    "ESPNOW_SET_CHANNEL": "ESP NOW establecer canal %1"
  },
  "ru": {
    "ESPNOW_SET_CHANNEL": "ESP NOW установить канал %1"
  },
  "cs": {
    "ESPNOW_SET_CHANNEL": "ESP NOW nastavit kanál %1"
  },
  "it": {
    "ESPNOW_SET_CHANNEL": "ESP NOW imposta canale %1"
  },
  "pl": {
    "ESPNOW_SET_CHANNEL": "ESP NOW ustaw kanał %1"
  },
  "tr": {
    "ESPNOW_SET_CHANNEL": "ESP NOW kanal %1 ayarla"
  },
  "pt": {
    "ESPNOW_SET_CHANNEL": "ESP NOW definir canal %1"
  },
  "hr": {
    "ESPNOW_SET_CHANNEL": "ESP NOW postavi kanal %1"
  },
  "hi": {
    "ESPNOW_SET_CHANNEL": "ESP NOW चैनल %1 सेट करें"
  },
  "ko": {
    "ESPNOW_SET_CHANNEL": "ESP NOW 채널 %1 설정"
  },
  "th": {
    "ESPNOW_SET_CHANNEL": "ESP NOW ตั้งค่าช่องสัญญาณ %1"
  },
  "nl": {
    "ESPNOW_SET_CHANNEL": "ESP NOW kanaal %1 instellen"
  },
  "ar": {
    "ESPNOW_SET_CHANNEL": "ESP NOW تعيين القناة %1"
  },
  "vi": {
    "ESPNOW_SET_CHANNEL": "ESP NOW đặt kênh %1"
  },
  "he": {
    "ESPNOW_SET_CHANNEL": "ESP NOW הגדר ערוץ %1"
  }
}

const extensions = {}

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

