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
        "carMotor.bluetoothController.multithreading": "多线程"
    },
    "zh-tw": {
        "carMotor.bluetoothController.multithreading": "多執行緒"
    },
    "en": {
        "carMotor.bluetoothController.multithreading": "multithreading"
    },
    "fr": {
        "carMotor.bluetoothController.multithreading": "multithreading"
    },
    "ja": {
        "carMotor.bluetoothController.multithreading": "マルチスレッド"
    },
    "de": {
        "carMotor.bluetoothController.multithreading": "multithreading"
    },
    "es": {
        "carMotor.bluetoothController.multithreading": "multithreading"
    },
    "ru": {
        "carMotor.bluetoothController.multithreading": "многопоточное выполнение"
    },
    "cs": {
        "carMotor.bluetoothController.multithreading": "multithreading"
    },
    "it": {
        "carMotor.bluetoothController.multithreading": "multithreading"
    },
    "pl": {
        "carMotor.bluetoothController.multithreading": "wielowątkowość"
    },
    "tr": {
        "carMotor.bluetoothController.multithreading": "çok iş parçacıklı"
    },
    "pt": {
        "carMotor.bluetoothController.multithreading": "multithreading"
    },
    "hr": {
        "carMotor.bluetoothController.multithreading": "višenitno"
    },
    "ko": {
        "carMotor.bluetoothController.multithreading": "멀티스레딩"
    },
    "th": {
        "carMotor.bluetoothController.multithreading": "มัลติเธรด"
    },
    "nl": {
        "carMotor.bluetoothController.multithreading": "multithreading"
    },
    "ar": {
        "carMotor.bluetoothController.multithreading": "تعدد مؤشرات الترابط"
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

