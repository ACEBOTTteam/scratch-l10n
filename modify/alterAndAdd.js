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

const extensions = {}
const interfaceData = {
  "zh-cn": {
    "gui.modify.K210Firmware": "K210固件",
  },
  "zh-tw": {
    "gui.modify.K210Firmware": "k210韌體"
  },
  "en": {
    "gui.modify.K210Firmware": "k210 firmware"
  },
  "fr": {
    "gui.modify.K210Firmware": "micrologiciel k210"
  },
  "ja": {
    "gui.modify.K210Firmware": "k210ファームウェア"
  },
  "de": {
    "gui.modify.K210Firmware": "k210-firmware"
  },
  "es": {
    "gui.modify.K210Firmware": "firmware k210"
  },
  "ru": {
    "gui.modify.K210Firmware": "прошивка k210"
  },
  "cs": {
    "gui.modify.K210Firmware": "firmware k210"
  },
  "it": {
    "gui.modify.K210Firmware": "firmware k210"
  },
  "pl": {
    "gui.modify.K210Firmware": "oprogramowanie układowe k210"
  },
  "tr": {
    "gui.modify.K210Firmware": "k210 ürün yazılımı"
  },
  "pt": {
    "gui.modify.K210Firmware": "firmware k210"
  },
  "hr": {
    "gui.modify.K210Firmware": "firmver k210"
  },
  "hi": {
    "gui.modify.K210Firmware": "k210 फर्मवेयर"
  },
  "ko": {
    "gui.modify.K210Firmware": "k210 펌웨어"
  },
  "th": {
    "gui.modify.K210Firmware": "เฟิร์มแวร์ k210"
  },
  "nl": {
    "gui.modify.K210Firmware": "k210 firmware"
  },
  "ar": {
    "gui.modify.K210Firmware": "البرنامج الثابت k210"
  },
  "vi": {
    "gui.modify.K210Firmware": "phần mềm k210"
  },
  "he": {
    "gui.modify.K210Firmware": "קושחת k210"
  }
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

