const fs = require('fs')

const block = {
    "zh-cn": {
        "ROBOT_TRAFFIC_LIGHT": "交通信号灯 绿灯%1%2 黄灯%3%4 红灯%5%6",
    },
    "zh-tw": {  
        "ROBOT_TRAFFIC_LIGHT": "交通號誌 綠燈%1%2 黃燈%3%4 紅燈%5%6"  
    },
    "en": {  
        "ROBOT_TRAFFIC_LIGHT": "Traffic Light Green%1%2 Yellow%3%4 Red%5%6"  
    },
    "fr": {  
        "ROBOT_TRAFFIC_LIGHT": "Feu de circulation Vert%1%2 Jaune%3%4 Rouge%5%6"  
    },
    "ja": {  
        "ROBOT_TRAFFIC_LIGHT": "交通信号 緑灯%1%2 黄灯%3%4 赤灯%5%6"  
    },
    "de": {  
        "ROBOT_TRAFFIC_LIGHT": "Ampel Grün%1%2 Gelb%3%4 Rot%5%6"  
    },
    "es": {  
        "ROBOT_TRAFFIC_LIGHT": "Semáforo Verde%1%2 Amarillo%3%4 Rojo%5%6"  
    },
    "ru": {  
        "ROBOT_TRAFFIC_LIGHT": "Светофор Зеленый%1%2 Жёлтый%3%4 Красный%5%6"  
    },
    "cs": {  
        "ROBOT_TRAFFIC_LIGHT": "Semafor Zelená%1%2 Žlutá%3%4 Červená%5%6"  
    },
    "it": {  
        "ROBOT_TRAFFIC_LIGHT": "Semaforo Verde%1%2 Giallo%3%4 Rosso%5%6"  
    },
    "pl": {  
        "ROBOT_TRAFFIC_LIGHT": "Światlo drogowe Zielony%1%2 Żółty%3%4 Czerwony%5%6"  
    },
    "tr": {  
        "ROBOT_TRAFFIC_LIGHT": "Işık Yeşil%1%2 Sarı%3%4 Kırmızı%5%6"  
    },
    "pt": {  
        "ROBOT_TRAFFIC_LIGHT": "Semáforo Verde%1%2 Amarelo%3%4 Vermelho%5%6"  
    },
    "hr": {  
        "ROBOT_TRAFFIC_LIGHT": "Semafor Zeleno%1%2 Žuto%3%4 Crveno%5%6"  
    },
    "ko": {  
        "ROBOT_TRAFFIC_LIGHT": "신호등 녹색%1%2 황색%3%4 빨간색%5%6"  
    },
    "th": {  
        "ROBOT_TRAFFIC_LIGHT": "ไฟจราจร สีเขียว%1%2 สีเหลือง%3%4 สีแดง%5%6"  
    },
    "nl": {  
        "ROBOT_TRAFFIC_LIGHT": "Verkeerslicht Groen%1%2 Geel%3%4 Rood%5%6"  
    },
    "ar": {  
        "ROBOT_TRAFFIC_LIGHT": "الإشارة المرورية الأخضر%1%2 الأصفر%3%4 الأحمر%5%6"  
    }
}

const extensions = {

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

