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
        "gui.modify.microPython": "microPython固件",
        "gui.modify.mobile": "移动端固件"
    },
    "zh-tw": {
        "gui.modify.microPython": "micropython韌體",
        "gui.modify.mobile": "移動端韌體"
    },
    "en": {
        "gui.modify.microPython": "micropython firmware",
        "gui.modify.mobile": "mobile firmware"
    },
    "fr": {
        "gui.modify.microPython": "micropython firmware",
        "gui.modify.mobile": "firmware mobile"
    },
    "ja": {
        "gui.modify.microPython": "micropythonファームウェア",
        "gui.modify.mobile": "モバイルファームウェア"
    },
    "de": {
        "gui.modify.microPython": "micropython-firmware",
        "gui.modify.mobile": "mobile firmware"
    },
    "es": {
        "gui.modify.microPython": "micropython firmware",
        "gui.modify.mobile": "firmware móvil"
    },
    "ru": {
        "gui.modify.microPython": "micropython прошивка",
        "gui.modify.mobile": "мобильная прошивка"
    },
    "cs": {
        "gui.modify.microPython": "micropython firmware",
        "gui.modify.mobile": "mobilní firmware"
    },
    "it": {
        "gui.modify.microPython": "micropython firmware",
        "gui.modify.mobile": "firmware mobile"
    },
    "pl": {
        "gui.modify.microPython": "micropython firmware",
        "gui.modify.mobile": "oprogramowanie mobilne"
    },
    "tr": {
        "gui.modify.microPython": "micropython firmware",
        "gui.modify.mobile": "mobil firmware"
    },
    "pt": {
        "gui.modify.microPython": "micropython firmware",
        "gui.modify.mobile": "firmware móvel"
    },
    "hr": {
        "gui.modify.microPython": "micropython firmware",
        "gui.modify.mobile": "mobilni firmware"
    },
    "ko": {
        "gui.modify.microPython": "micropython 펌웨어",
        "gui.modify.mobile": "모바일 펌웨어"
    },
    "th": {
        "gui.modify.microPython": "micropython เฟิร์มแวร์",
        "gui.modify.mobile": "เฟิร์มแวร์มือถือ"
    },
    "nl": {
        "gui.modify.microPython": "micropython firmware",
        "gui.modify.mobile": "mobiele firmware"
    },
    "ar": {
        "gui.modify.microPython": "micropython البرامج الثابتة",
        "gui.modify.mobile": "البرامج الثابتة للجوال"
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

