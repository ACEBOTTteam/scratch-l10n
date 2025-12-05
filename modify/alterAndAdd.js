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
    "gui.modify.runPythonCode": "上传程序",
    "gui.modify.uploadFirmware": "上传固件",
  },
  "zh-tw": {
    "gui.modify.runPythonCode": "上傳程序",
    "gui.modify.uploadFirmware": "上傳固件"
  },
  "en": {
    "gui.modify.runPythonCode": "upload program",
    "gui.modify.uploadFirmware": "upload firmware"
  },
  "fr": {
    "gui.modify.runPythonCode": "téléverser le programme",
    "gui.modify.uploadFirmware": "téléverser le micrologiciel"
  },
  "ja": {
    "gui.modify.runPythonCode": "プログラムをアップロード",
    "gui.modify.uploadFirmware": "ファームウェアをアップロード"
  },
  "de": {
    "gui.modify.runPythonCode": "programm hochladen",
    "gui.modify.uploadFirmware": "firmware hochladen"
  },
  "es": {
    "gui.modify.runPythonCode": "subir programa",
    "gui.modify.uploadFirmware": "subir firmware"
  },
  "ru": {
    "gui.modify.runPythonCode": "загрузить программу",
    "gui.modify.uploadFirmware": "загрузить прошивку"
  },
  "cs": {
    "gui.modify.runPythonCode": "nahrát program",
    "gui.modify.uploadFirmware": "nahrát firmware"
  },
  "it": {
    "gui.modify.runPythonCode": "caricare il programma",
    "gui.modify.uploadFirmware": "caricare il firmware"
  },
  "pl": {
    "gui.modify.runPythonCode": "prześlij program",
    "gui.modify.uploadFirmware": "prześlij oprogramowanie"
  },
  "tr": {
    "gui.modify.runPythonCode": "program yükle",
    "gui.modify.uploadFirmware": "ürün yazılımı yükle"
  },
  "pt": {
    "gui.modify.runPythonCode": "carregar programa",
    "gui.modify.uploadFirmware": "carregar firmware"
  },
  "hr": {
    "gui.modify.runPythonCode": "učitaj program",
    "gui.modify.uploadFirmware": "učitaj firmware"
  },
  "hi": {
    "gui.modify.runPythonCode": "प्रोग्राम अपलोड करें",
    "gui.modify.uploadFirmware": "फर्मवेयर अपलोड करें"
  },
  "ko": {
    "gui.modify.runPythonCode": "프로그램 업로드",
    "gui.modify.uploadFirmware": "펌웨어 업로드"
  },
  "th": {
    "gui.modify.runPythonCode": "อัปโหลดโปรแกรม",
    "gui.modify.uploadFirmware": "อัปโหลดเฟิร์มแวร์"
  },
  "nl": {
    "gui.modify.runPythonCode": "programma uploaden",
    "gui.modify.uploadFirmware": "firmware uploaden"
  },
  "ar": {
    "gui.modify.runPythonCode": "رفع البرنامج",
    "gui.modify.uploadFirmware": "رفع البرنامج الثابت"
  },
  "vi": {
    "gui.modify.runPythonCode": "tải lên chương trình",
    "gui.modify.uploadFirmware": "tải lên firmware"
  },
  "he": {
    "gui.modify.runPythonCode": "העלאת תוכנית",
    "gui.modify.uploadFirmware": "העלאת קושחה"
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

