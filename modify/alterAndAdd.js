const fs = require('fs')

const block = {}

const extensions = {
    "zh-cn": {
        "carMotor.carGetInstruct": "获取[ONE]信号",
        "carMotor.forward":"前进",
        "carMotor.backward":"后退",
        "carMotor.leftMove":"左移",
        "carMotor.rightMove":"右移",
        "fourLeggedBionicSpider.spiderGetInstruct":"获取[ONE]信号",
        "fourLeggedBionicSpider.leftMove":"左转",
        "fourLeggedBionicSpider.rightMove":"右转",
    },
    "zh-tw": {
        "carMotor.carGetInstruct": "獲取[ONE]信號",
        "carMotor.forward": "前進",
        "carMotor.backward": "後退",
        "carMotor.leftMove": "左移",
        "carMotor.rightMove": "右移",
        "fourLeggedBionicSpider.spiderGetInstruct": "獲取[ONE]信號",
        "fourLeggedBionicSpider.leftMove": "左轉",
        "fourLeggedBionicSpider.rightMove": "右轉"
    },
    "en": {
        "carMotor.carGetInstruct": "Get [ONE] signal",
        "carMotor.forward": "Forward",
        "carMotor.backward": "Backward",
        "carMotor.leftMove": "Move left",
        "carMotor.rightMove": "Move right",
        "fourLeggedBionicSpider.spiderGetInstruct": "Get [ONE] signal",
        "fourLeggedBionicSpider.leftMove": "Turn left",
        "fourLeggedBionicSpider.rightMove": "Turn right"
    },    
    "fr": {
        "carMotor.carGetInstruct": "Obtenir le signal [ONE]",
        "carMotor.forward": "Avancer",
        "carMotor.backward": "Reculer",
        "carMotor.leftMove": "Déplacer à gauche",
        "carMotor.rightMove": "Déplacer à droite",
        "fourLeggedBionicSpider.spiderGetInstruct": "Obtenir le signal [ONE]",
        "fourLeggedBionicSpider.leftMove": "Tourner à gauche",
        "fourLeggedBionicSpider.rightMove": "Tourner à droite"
    },
    "ja": {
        "carMotor.carGetInstruct": "[ONE]信号を取得する",
        "carMotor.forward": "前進",
        "carMotor.backward": "後退",
        "carMotor.leftMove": "左に移動",
        "carMotor.rightMove": "右に移動",
        "fourLeggedBionicSpider.spiderGetInstruct": "[ONE]信号を取得する",
        "fourLeggedBionicSpider.leftMove": "左折",
        "fourLeggedBionicSpider.rightMove": "右折"
    },
    "de": {
        "carMotor.carGetInstruct": "[ONE]-Signal empfangen",
        "carMotor.forward": "Vorwärts",
        "carMotor.backward": "Rückwärts",
        "carMotor.leftMove": "Nach links bewegen",
        "carMotor.rightMove": "Nach rechts bewegen",
        "fourLeggedBionicSpider.spiderGetInstruct": "[ONE]-Signal empfangen",
        "fourLeggedBionicSpider.leftMove": "Nach links drehen",
        "fourLeggedBionicSpider.rightMove": "Nach rechts drehen"
    },
    "es": {
        "carMotor.carGetInstruct": "Obtener señal [ONE]",
        "carMotor.forward": "Avanzar",
        "carMotor.backward": "Retroceder",
        "carMotor.leftMove": "Mover a la izquierda",
        "carMotor.rightMove": "Mover a la derecha",
        "fourLeggedBionicSpider.spiderGetInstruct": "Obtener señal [ONE]",
        "fourLeggedBionicSpider.leftMove": "Girar a la izquierda",
        "fourLeggedBionicSpider.rightMove": "Girar a la derecha"
    },
    "ru": {
        "carMotor.carGetInstruct": "Получить сигнал [ONE]",
        "carMotor.forward": "Вперёд",
        "carMotor.backward": "Назад",
        "carMotor.leftMove": "Двигаться влево",
        "carMotor.rightMove": "Двигаться вправо",
        "fourLeggedBionicSpider.spiderGetInstruct": "Получить сигнал [ONE]",
        "fourLeggedBionicSpider.leftMove": "Повернуть налево",
        "fourLeggedBionicSpider.rightMove": "Повернуть направо"
    },
    "cs": {
        "carMotor.carGetInstruct": "Získat signál [ONE]",
        "carMotor.forward": "Vpřed",
        "carMotor.backward": "Vzad",
        "carMotor.leftMove": "Pohyb vlevo",
        "carMotor.rightMove": "Pohyb vpravo",
        "fourLeggedBionicSpider.spiderGetInstruct": "Získat signál [ONE]",
        "fourLeggedBionicSpider.leftMove": "Otočit doleva",
        "fourLeggedBionicSpider.rightMove": "Otočit doprava"
    },
    "it": {
        "carMotor.carGetInstruct": "Ricevere segnale [ONE]",
        "carMotor.forward": "Avanti",
        "carMotor.backward": "Indietro",
        "carMotor.leftMove": "Spostare a sinistra",
        "carMotor.rightMove": "Spostare a destra",
        "fourLeggedBionicSpider.spiderGetInstruct": "Ricevere segnale [ONE]",
        "fourLeggedBionicSpider.leftMove": "Girare a sinistra",
        "fourLeggedBionicSpider.rightMove": "Girare a destra"
    },
    "pl": {
        "carMotor.carGetInstruct": "Odbierz sygnał [ONE]",
        "carMotor.forward": "Do przodu",
        "carMotor.backward": "Do tyłu",
        "carMotor.leftMove": "Przesuń w lewo",
        "carMotor.rightMove": "Przesuń w prawo",
        "fourLeggedBionicSpider.spiderGetInstruct": "Odbierz sygnał [ONE]",
        "fourLeggedBionicSpider.leftMove": "Skręć w lewo",
        "fourLeggedBionicSpider.rightMove": "Skręć w prawo"
    },
    "tr": {
        "carMotor.carGetInstruct": "[ONE] sinyalini al",
        "carMotor.forward": "İleri",
        "carMotor.backward": "Geri",
        "carMotor.leftMove": "Sola hareket",
        "carMotor.rightMove": "Sağa hareket",
        "fourLeggedBionicSpider.spiderGetInstruct": "[ONE] sinyalini al",
        "fourLeggedBionicSpider.leftMove": "Sola dön",
        "fourLeggedBionicSpider.rightMove": "Sağa dön"
    },
    "pt": {
        "carMotor.carGetInstruct": "Obter sinal [ONE]",
        "carMotor.forward": "Para frente",
        "carMotor.backward": "Para trás",
        "carMotor.leftMove": "Mover para a esquerda",
        "carMotor.rightMove": "Mover para a direita",
        "fourLeggedBionicSpider.spiderGetInstruct": "Obter sinal [ONE]",
        "fourLeggedBionicSpider.leftMove": "Virar à esquerda",
        "fourLeggedBionicSpider.rightMove": "Virar à direita"
    },
    "hr": {
        "carMotor.carGetInstruct": "Dobiti signal [ONE]",
        "carMotor.forward": "Naprijed",
        "carMotor.backward": "Natrag",
        "carMotor.leftMove": "Pomakni se lijevo",
        "carMotor.rightMove": "Pomakni se desno",
        "fourLeggedBionicSpider.spiderGetInstruct": "Dobiti signal [ONE]",
        "fourLeggedBionicSpider.leftMove": "Skreni lijevo",
        "fourLeggedBionicSpider.rightMove": "Skreni desno"
    },
    "ko": {
        "carMotor.carGetInstruct": "[ONE] 신호 받기",
        "carMotor.forward": "앞으로",
        "carMotor.backward": "뒤로",
        "carMotor.leftMove": "왼쪽으로 이동",
        "carMotor.rightMove": "오른쪽으로 이동",
        "fourLeggedBionicSpider.spiderGetInstruct": "[ONE] 신호 받기",
        "fourLeggedBionicSpider.leftMove": "왼쪽으로 돌기",
        "fourLeggedBionicSpider.rightMove": "오른쪽으로 돌기"
    },
    "th": {
        "carMotor.carGetInstruct": "รับสัญญาณ [ONE]",
        "carMotor.forward": "ไปข้างหน้า",
        "carMotor.backward": "ถอยหลัง",
        "carMotor.leftMove": "เลื่อนไปทางซ้าย",
        "carMotor.rightMove": "เลื่อนไปทางขวา",
        "fourLeggedBionicSpider.spiderGetInstruct": "รับสัญญาณ [ONE]",
        "fourLeggedBionicSpider.leftMove": "เลี้ยวซ้าย",
        "fourLeggedBionicSpider.rightMove": "เลี้ยวขวา"
    },
    "nl": {
        "carMotor.carGetInstruct": "[ONE] signaal ontvangen",
        "carMotor.forward": "Vooruit",
        "carMotor.backward": "Achteruit",
        "carMotor.leftMove": "Naar links verplaatsen",
        "carMotor.rightMove": "Naar rechts verplaatsen",
        "fourLeggedBionicSpider.spiderGetInstruct": "[ONE] signaal ontvangen",
        "fourLeggedBionicSpider.leftMove": "Naar links draaien",
        "fourLeggedBionicSpider.rightMove": "Naar rechts draaien"
    },
    "ar": {
        "carMotor.carGetInstruct": "استقبال إشارة [ONE]",
        "carMotor.forward": "تقدم",
        "carMotor.backward": "تراجع",
        "carMotor.leftMove": "التحرك لليسار",
        "carMotor.rightMove": "التحرك لليمين",
        "fourLeggedBionicSpider.spiderGetInstruct": "استقبال إشارة [ONE]",
        "fourLeggedBionicSpider.leftMove": "انعطف يساراً",
        "fourLeggedBionicSpider.rightMove": "انعطف يميناً"
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

