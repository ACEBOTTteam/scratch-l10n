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
    "gui.modify.clear_success": "清除完成"
  },
  "zh-tw": {
    "gui.modify.clear_success": "清除完成"
  },
  "en": {
    "gui.modify.clear_success": "clear completed"
  },
  "fr": {
    "gui.modify.clear_success": "effacement terminé"
  },
  "ja": {
    "gui.modify.clear_success": "クリア完了"
  },
  "de": {
    "gui.modify.clear_success": "löschung abgeschlossen"
  },
  "es": {
    "gui.modify.clear_success": "borrado completado"
  },
  "ru": {
    "gui.modify.clear_success": "очистка завершена"
  },
  "cs": {
    "gui.modify.clear_success": "vyčištění dokončeno"
  },
  "it": {
    "gui.modify.clear_success": "cancellazione completata"
  },
  "pl": {
    "gui.modify.clear_success": "czyszczenie zakończone"
  },
  "tr": {
    "gui.modify.clear_success": "temizleme tamamlandı"
  },
  "pt": {
    "gui.modify.clear_success": "limpeza concluída"
  },
  "hr": {
    "gui.modify.clear_success": "brisanje dovršeno"
  },
  "hi": {
    "gui.modify.clear_success": "साफ़ करना पूर्ण हुआ"
  },
  "ko": {
    "gui.modify.clear_success": "삭제 완료"
  },
  "th": {
    "gui.modify.clear_success": "ล้างเสร็จสิ้น"
  },
  "nl": {
    "gui.modify.clear_success": "wissen voltooid"
  },
  "ar": {
    "gui.modify.clear_success": "اكتمل المسح"
  },
  "vi": {
    "gui.modify.clear_success": "xóa hoàn tất"
  },
  "he": {
    "gui.modify.clear_success": "הניקוי הושלם"
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

