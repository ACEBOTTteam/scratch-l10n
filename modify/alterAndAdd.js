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
        "bipedRobot.reset":"机器人复位"
    }
    ,
    "zh-tw": {
        "bipedRobot.reset": "機器人復位"
    },
    "en": {
        "bipedRobot.reset": "robot reset"
    },
    "fr": {
        "bipedRobot.reset": "réinitialisation du robot"
    },
    "ja": {
        "bipedRobot.reset": "ロボットリセット"
    },
    "de": {
        "bipedRobot.reset": "roboter zurücksetzen"
    },
    "es": {
        "bipedRobot.reset": "reinicio de robot"
    },
    "ru": {
        "bipedRobot.reset": "сброс робота"
    },
    "cs": {
        "bipedRobot.reset": "reset robota"
    },
    "it": {
        "bipedRobot.reset": "ripristino del robot"
    },
    "pl": {
        "bipedRobot.reset": "resetowanie robota"
    },
    "tr": {
        "bipedRobot.reset": "robot sıfırlama"
    },
    "pt": {
        "bipedRobot.reset": "reinicializar robô"
    },
    "hr": {
        "bipedRobot.reset": "reset robota"
    },
    "ko": {
        "bipedRobot.reset": "로봇 초기화"
    },
    "th": {
        "bipedRobot.reset": "รีเซ็ตหุ่นยนต์"
    },
    "nl": {
        "bipedRobot.reset": "robot resetten"
    },
    "ar": {
        "bipedRobot.reset": "إعادة تعيين الروبوت"
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

