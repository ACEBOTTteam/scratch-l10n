const fs = require('fs')

const block = {
    "zh-cn": {
        "ROBOT_RGB_MODULE": "RGB灯红色%1%2绿色%3%4蓝色%5%6",
    },
    "zh-tw": {
        "ROBOT_RGB_MODULE": "RGB燈紅色%1%2綠色%3%4藍色%5%6"
    },
    "en": {
        "ROBOT_RGB_MODULE": "RGB light red %1%2 green %3%4 blue %5%6"
    },    
    "fr": {
        "ROBOT_RGB_MODULE": "Lumière RGB rouge %1%2 vert %3%4 bleu %5%6"
    },
    "ja": {
        "ROBOT_RGB_MODULE": "RGBライト 赤%1%2 緑%3%4 青%5%6"
    },
    "de": {
        "ROBOT_RGB_MODULE": "RGB-Licht rot %1%2 grün %3%4 blau %5%6"
    },
    "es": {
        "ROBOT_RGB_MODULE": "Luz RGB rojo %1%2 verde %3%4 azul %5%6"
    },
    "ru": {
        "ROBOT_RGB_MODULE": "RGB свет красный %1%2 зеленый %3%4 синий %5%6"
    },
    "cs": {
        "ROBOT_RGB_MODULE": "RGB světlo červená %1%2 zelená %3%4 modrá %5%6"
    },
    "it": {
        "ROBOT_RGB_MODULE": "Luce RGB rosso %1%2 verde %3%4 blu %5%6"
    },
    "pl": {
        "ROBOT_RGB_MODULE": "Światło RGB czerwony %1%2 zielony %3%4 niebieski %5%6"
    },
    "tr": {
        "ROBOT_RGB_MODULE": "RGB ışığı kırmızı %1%2 yeşil %3%4 mavi %5%6"
    },
    "pt": {
        "ROBOT_RGB_MODULE": "Luz RGB vermelho %1%2 verde %3%4 azul %5%6"
    },
    "hr": {
        "ROBOT_RGB_MODULE": "RGB svjetlo crveno %1%2 zeleno %3%4 plavo %5%6"
    },
    "ko": {
        "ROBOT_RGB_MODULE": "RGB 조명 빨간색 %1%2 녹색 %3%4 파란색 %5%6"
    },
    "th": {
        "ROBOT_RGB_MODULE": "ไฟ RGB สีแดง %1%2 สีเขียว %3%4 สีน้ำเงิน %5%6"
    },
    "nl": {
        "ROBOT_RGB_MODULE": "RGB licht rood %1%2 groen %3%4 blauw %5%6"
    },
    "ar": {
        "ROBOT_RGB_MODULE": "إضاءة RGB أحمر %1%2 أخضر %3%4 أزرق %5%6"
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

