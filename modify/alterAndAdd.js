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
        "ROBOT_ARM_LOOP_RUN": "循环运行",
    },
    "zh-tw": {
        "ROBOT_ARM_LOOP_RUN": "循環運行"
    },
    "en": {
        "ROBOT_ARM_LOOP_RUN": "loop run"
    },
    "fr": {
        "ROBOT_ARM_LOOP_RUN": "exécution en boucle"
    },
    "ja": {
        "ROBOT_ARM_LOOP_RUN": "ループ実行"
    },
    "de": {
        "ROBOT_ARM_LOOP_RUN": "schleifenlauf"
    },
    "es": {
        "ROBOT_ARM_LOOP_RUN": "ejecución en bucle"
    },
    "ru": {
        "ROBOT_ARM_LOOP_RUN": "циклический запуск"
    },
    "cs": {
        "ROBOT_ARM_LOOP_RUN": "smyčka běží"
    },
    "it": {
        "ROBOT_ARM_LOOP_RUN": "esecuzione in loop"
    },
    "pl": {
        "ROBOT_ARM_LOOP_RUN": "uruchomienie pętli"
    },
    "tr": {
        "ROBOT_ARM_LOOP_RUN": "döngü çalıştır"
    },
    "pt": {
        "ROBOT_ARM_LOOP_RUN": "execução em loop"
    },
    "hr": {
        "ROBOT_ARM_LOOP_RUN": "izvedba u petlji"
    },
    "ko": {
        "ROBOT_ARM_LOOP_RUN": "루프 실행"
    },
    "th": {
        "ROBOT_ARM_LOOP_RUN": "การรันแบบลูป"
    },
    "nl": {
        "ROBOT_ARM_LOOP_RUN": "lus draaien"
    },
    "ar": {
        "ROBOT_ARM_LOOP_RUN": "تشغيل متكرر"
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

