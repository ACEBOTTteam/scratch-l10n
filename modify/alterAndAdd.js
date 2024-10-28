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
        "ROBOT_OLED_FONT_ENGLISH1": "英文字体1",
        "ROBOT_OLED_FONT_ENGLISH2": "英文字体2",
        "ROBOT_OLED_FONT_CHIMESE": "中文字体",
        "ROBOT_OLED_FONT_BIG": "大字体"
    },
    "zh-tw": {
        "ROBOT_OLED_FONT_ENGLISH1": "英文字體1",
        "ROBOT_OLED_FONT_ENGLISH2": "英文字體2",
        "ROBOT_OLED_FONT_CHIMESE": "中文字體",
        "ROBOT_OLED_FONT_BIG": "大字體"
    },
    "en": {
        "ROBOT_OLED_FONT_ENGLISH1": "english font 1",
        "ROBOT_OLED_FONT_ENGLISH2": "english font 2",
        "ROBOT_OLED_FONT_CHIMESE": "chinese font",
        "ROBOT_OLED_FONT_BIG": "big font"
    },
    "fr": {
        "ROBOT_OLED_FONT_ENGLISH1": "police anglaise 1",
        "ROBOT_OLED_FONT_ENGLISH2": "police anglaise 2",
        "ROBOT_OLED_FONT_CHIMESE": "police chinoise",
        "ROBOT_OLED_FONT_BIG": "grande police"
    },
    "ja": {
        "ROBOT_OLED_FONT_ENGLISH1": "英字フォント1",
        "ROBOT_OLED_FONT_ENGLISH2": "英字フォント2",
        "ROBOT_OLED_FONT_CHIMESE": "中国語フォント",
        "ROBOT_OLED_FONT_BIG": "大きなフォント"
    },
    "de": {
        "ROBOT_OLED_FONT_ENGLISH1": "englische schriftart 1",
        "ROBOT_OLED_FONT_ENGLISH2": "englische schriftart 2",
        "ROBOT_OLED_FONT_CHIMESE": "chinesische schriftart",
        "ROBOT_OLED_FONT_BIG": "große schriftart"
    },
    "es": {
        "ROBOT_OLED_FONT_ENGLISH1": "fuente en inglés 1",
        "ROBOT_OLED_FONT_ENGLISH2": "fuente en inglés 2",
        "ROBOT_OLED_FONT_CHIMESE": "fuente china",
        "ROBOT_OLED_FONT_BIG": "fuente grande"
    },
    "ru": {
        "ROBOT_OLED_FONT_ENGLISH1": "английский шрифт 1",
        "ROBOT_OLED_FONT_ENGLISH2": "английский шрифт 2",
        "ROBOT_OLED_FONT_CHIMESE": "китайский шрифт",
        "ROBOT_OLED_FONT_BIG": "большой шрифт"
    },
    "cs": {
        "ROBOT_OLED_FONT_ENGLISH1": "anglický font 1",
        "ROBOT_OLED_FONT_ENGLISH2": "anglický font 2",
        "ROBOT_OLED_FONT_CHIMESE": "čínský font",
        "ROBOT_OLED_FONT_BIG": "velký font"
    },
    "it": {
        "ROBOT_OLED_FONT_ENGLISH1": "carattere inglese 1",
        "ROBOT_OLED_FONT_ENGLISH2": "carattere inglese 2",
        "ROBOT_OLED_FONT_CHIMESE": "carattere cinese",
        "ROBOT_OLED_FONT_BIG": "carattere grande"
    },
    "pl": {
        "ROBOT_OLED_FONT_ENGLISH1": "czcionka angielska 1",
        "ROBOT_OLED_FONT_ENGLISH2": "czcionka angielska 2",
        "ROBOT_OLED_FONT_CHIMESE": "czcionka chińska",
        "ROBOT_OLED_FONT_BIG": "duża czcionka"
    },
    "tr": {
        "ROBOT_OLED_FONT_ENGLISH1": "ingilizce font 1",
        "ROBOT_OLED_FONT_ENGLISH2": "ingilizce font 2",
        "ROBOT_OLED_FONT_CHIMESE": "çin yazı tipi",
        "ROBOT_OLED_FONT_BIG": "büyük yazı tipi"
    },
    "pt": {
        "ROBOT_OLED_FONT_ENGLISH1": "fonte em inglês 1",
        "ROBOT_OLED_FONT_ENGLISH2": "fonte em inglês 2",
        "ROBOT_OLED_FONT_CHIMESE": "fonte chinesa",
        "ROBOT_OLED_FONT_BIG": "grande fonte"
    },
    "hr": {
        "ROBOT_OLED_FONT_ENGLISH1": "engleski font 1",
        "ROBOT_OLED_FONT_ENGLISH2": "engleski font 2",
        "ROBOT_OLED_FONT_CHIMESE": "kineski font",
        "ROBOT_OLED_FONT_BIG": "veliki font"
    },
    "ko": {
        "ROBOT_OLED_FONT_ENGLISH1": "영문 글꼴 1",
        "ROBOT_OLED_FONT_ENGLISH2": "영문 글꼴 2",
        "ROBOT_OLED_FONT_CHIMESE": "중국어 글꼴",
        "ROBOT_OLED_FONT_BIG": "큰 글꼴"
    },
    "th": {
        "ROBOT_OLED_FONT_ENGLISH1": "ฟอนต์ภาษาอังกฤษ 1",
        "ROBOT_OLED_FONT_ENGLISH2": "ฟอนต์ภาษาอังกฤษ 2",
        "ROBOT_OLED_FONT_CHIMESE": "ฟอนต์จีน",
        "ROBOT_OLED_FONT_BIG": "ฟอนต์ใหญ่"
    },
    "nl": {
        "ROBOT_OLED_FONT_ENGLISH1": "engelse lettertype 1",
        "ROBOT_OLED_FONT_ENGLISH2": "engelse lettertype 2",
        "ROBOT_OLED_FONT_CHIMESE": "chinese lettertype",
        "ROBOT_OLED_FONT_BIG": "groot lettertype"
    },
    "ar": {
        "ROBOT_OLED_FONT_ENGLISH1": "خط إنجليزي 1",
        "ROBOT_OLED_FONT_ENGLISH2": "خط إنجليزي 2",
        "ROBOT_OLED_FONT_CHIMESE": "خط صيني",
        "ROBOT_OLED_FONT_BIG": "خط كبير"
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

