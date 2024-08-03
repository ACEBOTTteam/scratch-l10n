const fs = require('fs')

const block = {}

const extensions = {
    "zh-cn": {
        "carMotor.slider":"滑杆",
    }
    ,
    "zh-tw": {
        "carMotor.slider": "滑桿"
    }
    ,
    "en": {
        "carMotor.slider": "slider"
    }
    ,
    "fr": {
        "carMotor.slider": "curseur"
    }
    ,
    "ja": {
        "carMotor.slider": "スライダー"
    }
    ,
    "de": {
        "carMotor.slider": "schieberegler"
    }
    ,
    "es": {
        "carMotor.slider": "deslizador"
    }
    ,
    "ru": {
        "carMotor.slider": "ползунок"
    }
    ,
    "cs": {
        "carMotor.slider": "posuvník"
    }
    ,
    "it": {
        "carMotor.slider": "cursore"
    }
    ,
    "pl": {
        "carMotor.slider": "suwak"
    }
    ,
    "tr": {
        "carMotor.slider": "kaydırıcı"
    }
    ,
    "pt": {
        "carMotor.slider": "controle deslizante"
    }
    ,
    "hr": {
        "carMotor.slider": "klizač"
    }
    ,
    "ko": {
        "carMotor.slider": "슬라이더"
    }
    ,
    "th": {
        "carMotor.slider": "แถบเลื่อน"
    }
    ,
    "nl": {
        "carMotor.slider": "schuifregelaar"
    }
    ,
    "ar": {
        "carMotor.slider": "شريط التمرير"
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

