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
        "gui.modify.jumpLink": "教程文档",
    },
    "zh-tw": {
        "gui.modify.jumpLink": "教程文檔"
    },
    "en": {
        "gui.modify.jumpLink": "tutorial document"
    },
    "fr": {
        "gui.modify.jumpLink": "document tutoriel"
    },
    "ja": {
        "gui.modify.jumpLink": "チュートリアルドキュメント"
    },
    "de": {
        "gui.modify.jumpLink": "tutorial-dokument"
    },
    "es": {
        "gui.modify.jumpLink": "documento tutorial"
    },
    "ru": {
        "gui.modify.jumpLink": "учебный документ"
    },
    "cs": {
        "gui.modify.jumpLink": "výukový dokument"
    },
    "it": {
        "gui.modify.jumpLink": "documento tutoriale"
    },
    "pl": {
        "gui.modify.jumpLink": "dokument samouczka"
    },
    "tr": {
        "gui.modify.jumpLink": "eğitim belgesi"
    },
    "pt": {
        "gui.modify.jumpLink": "documento tutorial"
    },
    "hr": {
        "gui.modify.jumpLink": "uputni dokument"
    },
    "ko": {
        "gui.modify.jumpLink": "튜토리얼 문서"
    },
    "th": {
        "gui.modify.jumpLink": "เอกสารบทเรียน"
    },
    "nl": {
        "gui.modify.jumpLink": "handleiding document"
    },
    "ar": {
        "gui.modify.jumpLink": "وثيقة تعليمية"
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

