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
        "carMotor.bluetoothControllerRealTime.buttons": "手柄[ONE]被[TWO]",
        "carMotor.bluetoothControllerRealTime.getData": "手柄[ONE][TWO]值",
    },
    "zh-tw": {
        "carMotor.bluetoothControllerRealTime.buttons": "手柄[ONE]被[TWO]",
        "carMotor.bluetoothControllerRealTime.getData": "手柄[ONE][TWO]值"
    },
    "en": {
        "carMotor.bluetoothControllerRealTime.buttons": "controller [ONE] is [TWO]",
        "carMotor.bluetoothControllerRealTime.getData": "controller [ONE] [TWO] value"
    },
    "fr": {
        "carMotor.bluetoothControllerRealTime.buttons": "manette [ONE] est [TWO]",
        "carMotor.bluetoothControllerRealTime.getData": "manette [ONE] [TWO] valeur"
    },
    "ja": {
        "carMotor.bluetoothControllerRealTime.buttons": "コントローラー[ONE]が[TWO]",
        "carMotor.bluetoothControllerRealTime.getData": "コントローラー[ONE][TWO]の値"
    },
    "de": {
        "carMotor.bluetoothControllerRealTime.buttons": "Controller [ONE] ist [TWO]",
        "carMotor.bluetoothControllerRealTime.getData": "Controller [ONE] [TWO] Wert"
    },
    "es": {
        "carMotor.bluetoothControllerRealTime.buttons": "controlador [ONE] está [TWO]",
        "carMotor.bluetoothControllerRealTime.getData": "controlador [ONE] [TWO] valor"
    },
    "ru": {
        "carMotor.bluetoothControllerRealTime.buttons": "контроллер [ONE] это [TWO]",
        "carMotor.bluetoothControllerRealTime.getData": "контроллер [ONE] [TWO] значение"
    },
    "cs": {
        "carMotor.bluetoothControllerRealTime.buttons": "ovladač [ONE] je [TWO]",
        "carMotor.bluetoothControllerRealTime.getData": "ovladač [ONE] [TWO] hodnota"
    },
    "it": {
        "carMotor.bluetoothControllerRealTime.buttons": "controller [ONE] è [TWO]",
        "carMotor.bluetoothControllerRealTime.getData": "controller [ONE] [TWO] valore"
    },
    "pl": {
        "carMotor.bluetoothControllerRealTime.buttons": "kontroler [ONE] jest [TWO]",
        "carMotor.bluetoothControllerRealTime.getData": "kontroler [ONE] [TWO] wartość"
    },
    "tr": {
        "carMotor.bluetoothControllerRealTime.buttons": "kontrolcü [ONE] [TWO] durumunda",
        "carMotor.bluetoothControllerRealTime.getData": "kontrolcü [ONE] [TWO] değeri"
    },
    "pt": {
        "carMotor.bluetoothControllerRealTime.buttons": "controle [ONE] está [TWO]",
        "carMotor.bluetoothControllerRealTime.getData": "controle [ONE] [TWO] valor"
    },
    "hr": {
        "carMotor.bluetoothControllerRealTime.buttons": "kontroler [ONE] je [TWO]",
        "carMotor.bluetoothControllerRealTime.getData": "kontroler [ONE] [TWO] vrijednost"
    },
    "ko": {
        "carMotor.bluetoothControllerRealTime.buttons": "컨트롤러 [ONE]이 [TWO]",
        "carMotor.bluetoothControllerRealTime.getData": "컨트롤러 [ONE] [TWO] 값"
    },
    "th": {
        "carMotor.bluetoothControllerRealTime.buttons": "ตัวควบคุม [ONE] อยู่ที่ [TWO]",
        "carMotor.bluetoothControllerRealTime.getData": "ตัวควบคุม [ONE] [TWO] ค่า"
    },
    "nl": {
        "carMotor.bluetoothControllerRealTime.buttons": "controller [ONE] is [TWO]",
        "carMotor.bluetoothControllerRealTime.getData": "controller [ONE] [TWO] waarde"
    },
    "ar": {
        "carMotor.bluetoothControllerRealTime.buttons": "التحكم [ONE] هو [TWO]",
        "carMotor.bluetoothControllerRealTime.getData": "التحكم [ONE] [TWO] القيمة"
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

