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
        "gui.modify.parameter": "参数",
        "gui.modify.ChoosRole": "选择角色",
    },
    "zh-tw": {
        "gui.modify.parameter": "參數",
        "gui.modify.ChoosRole": "選擇角色"
    },
    "en": {
        "gui.modify.parameter": "parameter",
        "gui.modify.ChoosRole": "choose role"
    },
    "fr": {
        "gui.modify.parameter": "paramètre",
        "gui.modify.ChoosRole": "choisir un rôle"
    },
    "ja": {
        "gui.modify.parameter": "パラメーター",
        "gui.modify.ChoosRole": "役割を選択"
    },
    "de": {
        "gui.modify.parameter": "parameter",
        "gui.modify.ChoosRole": "rolle wählen"
    },
    "es": {
        "gui.modify.parameter": "parámetro",
        "gui.modify.ChoosRole": "elegir rol"
    },
    "ru": {
        "gui.modify.parameter": "параметр",
        "gui.modify.ChoosRole": "выбрать роль"
    },
    "cs": {
        "gui.modify.parameter": "parametr",
        "gui.modify.ChoosRole": "vybrat roli"
    },
    "it": {
        "gui.modify.parameter": "parametro",
        "gui.modify.ChoosRole": "scegli il ruolo"
    },
    "pl": {
        "gui.modify.parameter": "parametr",
        "gui.modify.ChoosRole": "wybierz rolę"
    },
    "tr": {
        "gui.modify.parameter": "parametre",
        "gui.modify.ChoosRole": "rol seç"
    },
    "pt": {
        "gui.modify.parameter": "parâmetro",
        "gui.modify.ChoosRole": "escolher papel"
    },
    "hr": {
        "gui.modify.parameter": "parametar",
        "gui.modify.ChoosRole": "odaberite ulogu"
    },
    "ko": {
        "gui.modify.parameter": "파라미터",
        "gui.modify.ChoosRole": "역할 선택"
    },
    "th": {
        "gui.modify.parameter": "พารามิเตอร์",
        "gui.modify.ChoosRole": "เลือกบทบาท"
    },
    "nl": {
        "gui.modify.parameter": "parameter",
        "gui.modify.ChoosRole": "kies rol"
    },
    "ar": {
        "gui.modify.parameter": "معامل",
        "gui.modify.ChoosRole": "اختيار الدور"
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

