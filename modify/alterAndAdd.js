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
        "ROBOT_WIND_CUP_DATA": "值",
        "ROBOT_WIND_CUP_LEVEL": "等级",
    },
    "zh-tw": {
        "ROBOT_WIND_CUP_DATA": "值",
        "ROBOT_WIND_CUP_LEVEL": "等級"
    },
    "en": {
        "ROBOT_WIND_CUP_DATA": "value",
        "ROBOT_WIND_CUP_LEVEL": "level"
    },
    "fr": {
        "ROBOT_WIND_CUP_DATA": "valeur",
        "ROBOT_WIND_CUP_LEVEL": "niveau"
    },
    "ja": {
        "ROBOT_WIND_CUP_DATA": "値",
        "ROBOT_WIND_CUP_LEVEL": "レベル"
    },
    "de": {
        "ROBOT_WIND_CUP_DATA": "wert",
        "ROBOT_WIND_CUP_LEVEL": "stufe"
    },
    "es": {
        "ROBOT_WIND_CUP_DATA": "valor",
        "ROBOT_WIND_CUP_LEVEL": "nivel"
    },
    "ru": {
        "ROBOT_WIND_CUP_DATA": "значение",
        "ROBOT_WIND_CUP_LEVEL": "уровень"
    },
    "cs": {
        "ROBOT_WIND_CUP_DATA": "hodnota",
        "ROBOT_WIND_CUP_LEVEL": "úroveň"
    },
    "it": {
        "ROBOT_WIND_CUP_DATA": "valore",
        "ROBOT_WIND_CUP_LEVEL": "livello"
    },
    "pl": {
        "ROBOT_WIND_CUP_DATA": "wartość",
        "ROBOT_WIND_CUP_LEVEL": "poziom"
    },
    "tr": {
        "ROBOT_WIND_CUP_DATA": "değer",
        "ROBOT_WIND_CUP_LEVEL": "seviye"
    },
    "pt": {
        "ROBOT_WIND_CUP_DATA": "valor",
        "ROBOT_WIND_CUP_LEVEL": "nível"
    },
    "hr": {
        "ROBOT_WIND_CUP_DATA": "vrijednost",
        "ROBOT_WIND_CUP_LEVEL": "razina"
    },
    "ko": {
        "ROBOT_WIND_CUP_DATA": "값",
        "ROBOT_WIND_CUP_LEVEL": "레벨"
    },
    "th": {
        "ROBOT_WIND_CUP_DATA": "ค่า",
        "ROBOT_WIND_CUP_LEVEL": "ระดับ"
    },
    "nl": {
        "ROBOT_WIND_CUP_DATA": "waarde",
        "ROBOT_WIND_CUP_LEVEL": "niveau"
    },
    "ar": {
        "ROBOT_WIND_CUP_DATA": "القيمة",
        "ROBOT_WIND_CUP_LEVEL": "المستوى"
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

