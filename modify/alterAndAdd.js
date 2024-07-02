const fs = require('fs')

const block = {}

const extensions = {
    "zh-cn": {
        "carMotor.mode.fun": "小车[ONE]模式",
        "carMotor.execute.mode": "小车执行[ONE]模式",
        "carMotor.carGetInstruct": "小车[ONE]信号",
        "carMotor.speed": "速度",
        "carMotor.stop": "停止",
        "carMotor.buzzer": "喇叭",
        "carMotor.track": "巡线",
        "carMotor.avoidance": "避障",
        "carMotor.follow": "跟随",
        "carMotor.move": "移动",
        "carMotor.roundTrack": "圆形巡线",
        "carMotor.8track": "8字形巡线",
        "fourLeggedBionicSpider.spiderGetInstruct":"蜘蛛[ONE]信号"
    },
    "zh-tw": {
        "carMotor.mode.fun": "小車[ONE]模式",
        "carMotor.execute.mode": "小車執行[ONE]模式",
        "carMotor.carGetInstruct": "小車[ONE]信號",
        "carMotor.speed": "速度",
        "carMotor.stop": "停止",
        "carMotor.buzzer": "喇叭",
        "carMotor.track": "巡線",
        "carMotor.avoidance": "避障",
        "carMotor.follow": "跟隨",
        "carMotor.move": "移動",
        "carMotor.roundTrack": "圓形巡線",
        "carMotor.8track": "8字形巡線",
        "fourLeggedBionicSpider.spiderGetInstruct": "蜘蛛[ONE]信號"
    },
    "en": {
        "carMotor.mode.fun": "car [ONE] mode",
        "carMotor.execute.mode": "car execute [ONE] mode",
        "carMotor.carGetInstruct": "car [ONE] signal",
        "carMotor.speed": "speed",
        "carMotor.stop": "stop",
        "carMotor.buzzer": "buzzer",
        "carMotor.track": "track",
        "carMotor.avoidance": "avoidance",
        "carMotor.follow": "follow",
        "carMotor.move": "move",
        "carMotor.roundTrack": "round track",
        "carMotor.8track": "8 track",
        "fourLeggedBionicSpider.spiderGetInstruct": "spider [ONE] signal"
    },    
    "fr": {
        "carMotor.mode.fun": "mode [ONE] de voiture",
        "carMotor.execute.mode": "exécuter le mode [ONE] de voiture",
        "carMotor.carGetInstruct": "signal [ONE] de voiture",
        "carMotor.speed": "vitesse",
        "carMotor.stop": "arrêt",
        "carMotor.buzzer": "buzzer",
        "carMotor.track": "suivi de ligne",
        "carMotor.avoidance": "éviter les obstacles",
        "carMotor.follow": "suivre",
        "carMotor.move": "déplacer",
        "carMotor.roundTrack": "suivi de ligne circulaire",
        "carMotor.8track": "suivi de ligne en 8",
        "fourLeggedBionicSpider.spiderGetInstruct": "signal [ONE] d'araignée"
    },
    "ja": {
        "carMotor.mode.fun": "車[ONE]モード",
        "carMotor.execute.mode": "車[ONE]モードを実行",
        "carMotor.carGetInstruct": "車[ONE]信号",
        "carMotor.speed": "速度",
        "carMotor.stop": "停止",
        "carMotor.buzzer": "ブザー",
        "carMotor.track": "トラック",
        "carMotor.avoidance": "障害物回避",
        "carMotor.follow": "フォロー",
        "carMotor.move": "移動",
        "carMotor.roundTrack": "円形トラック",
        "carMotor.8track": "8字形トラック",
        "fourLeggedBionicSpider.spiderGetInstruct": "蜘蛛[ONE]信号"
    },
    "de": {
        "carMotor.mode.fun": "Auto [ONE] Modus",
        "carMotor.execute.mode": "Auto [ONE] Modus ausführen",
        "carMotor.carGetInstruct": "Auto [ONE] Signal",
        "carMotor.speed": "Geschwindigkeit",
        "carMotor.stop": "stoppen",
        "carMotor.buzzer": "Summer",
        "carMotor.track": "Spur",
        "carMotor.avoidance": "Hindernisvermeidung",
        "carMotor.follow": "folgen",
        "carMotor.move": "bewegen",
        "carMotor.roundTrack": "runde Spur",
        "carMotor.8track": "8-Spur",
        "fourLeggedBionicSpider.spiderGetInstruct": "Spinne [ONE] Signal"
    },
    "es": {
        "carMotor.mode.fun": "modo [ONE] del coche",
        "carMotor.execute.mode": "ejecutar el modo [ONE] del coche",
        "carMotor.carGetInstruct": "señal [ONE] del coche",
        "carMotor.speed": "velocidad",
        "carMotor.stop": "detener",
        "carMotor.buzzer": "zumbador",
        "carMotor.track": "seguir línea",
        "carMotor.avoidance": "evitar obstáculos",
        "carMotor.follow": "seguir",
        "carMotor.move": "mover",
        "carMotor.roundTrack": "seguir línea circular",
        "carMotor.8track": "seguir línea en 8",
        "fourLeggedBionicSpider.spiderGetInstruct": "señal [ONE] de la araña"
    },
    "ru": {
        "carMotor.mode.fun": "режим автомобиля [ONE]",
        "carMotor.execute.mode": "выполнить режим [ONE] автомобиля",
        "carMotor.carGetInstruct": "сигнал автомобиля [ONE]",
        "carMotor.speed": "скорость",
        "carMotor.stop": "стоп",
        "carMotor.buzzer": "зуммер",
        "carMotor.track": "трасса",
        "carMotor.avoidance": "избегание препятствий",
        "carMotor.follow": "следовать",
        "carMotor.move": "двигаться",
        "carMotor.roundTrack": "круговая трасса",
        "carMotor.8track": "восьмерочная трасса",
        "fourLeggedBionicSpider.spiderGetInstruct": "сигнал паука [ONE]"
    },
    "cs": {
        "carMotor.mode.fun": "režim auta [ONE]",
        "carMotor.execute.mode": "spustit režim auta [ONE]",
        "carMotor.carGetInstruct": "signál auta [ONE]",
        "carMotor.speed": "rychlost",
        "carMotor.stop": "zastavit",
        "carMotor.buzzer": "bzučák",
        "carMotor.track": "stopa",
        "carMotor.avoidance": "vyhnout se překážkám",
        "carMotor.follow": "následovat",
        "carMotor.move": "pohybovat se",
        "carMotor.roundTrack": "kruhová stopa",
        "carMotor.8track": "stopa ve tvaru osmičky",
        "fourLeggedBionicSpider.spiderGetInstruct": "signál pavouka [ONE]"
    },
    "it": {
        "carMotor.mode.fun": "modalità [ONE] dell'auto",
        "carMotor.execute.mode": "eseguire modalità [ONE] dell'auto",
        "carMotor.carGetInstruct": "segnale [ONE] dell'auto",
        "carMotor.speed": "velocità",
        "carMotor.stop": "fermare",
        "carMotor.buzzer": "buzzer",
        "carMotor.track": "seguire linea",
        "carMotor.avoidance": "evitare ostacoli",
        "carMotor.follow": "seguire",
        "carMotor.move": "muovere",
        "carMotor.roundTrack": "seguire linea circolare",
        "carMotor.8track": "seguire linea a 8",
        "fourLeggedBionicSpider.spiderGetInstruct": "segnale [ONE] del ragno"
    },
    "pl": {
        "carMotor.mode.fun": "tryb [ONE] samochodu",
        "carMotor.execute.mode": "wykonaj tryb [ONE] samochodu",
        "carMotor.carGetInstruct": "sygnał [ONE] samochodu",
        "carMotor.speed": "prędkość",
        "carMotor.stop": "zatrzymać",
        "carMotor.buzzer": "brzęczyk",
        "carMotor.track": "tor",
        "carMotor.avoidance": "unikanie przeszkód",
        "carMotor.follow": "podążać",
        "carMotor.move": "ruch",
        "carMotor.roundTrack": "okrągły tor",
        "carMotor.8track": "tor ósemkowy",
        "fourLeggedBionicSpider.spiderGetInstruct": "sygnał pająka [ONE]"
    },
    "tr": {
        "carMotor.mode.fun": "araba [ONE] modu",
        "carMotor.execute.mode": "araba [ONE] modunu çalıştır",
        "carMotor.carGetInstruct": "araba [ONE] sinyali",
        "carMotor.speed": "hız",
        "carMotor.stop": "dur",
        "carMotor.buzzer": "buzzer",
        "carMotor.track": "iz",
        "carMotor.avoidance": "engel önleme",
        "carMotor.follow": "takip et",
        "carMotor.move": "hareket",
        "carMotor.roundTrack": "yuvarlak iz",
        "carMotor.8track": "8 şekilli iz",
        "fourLeggedBionicSpider.spiderGetInstruct": "örümcek [ONE] sinyali"
    },
    "pt": {
        "carMotor.mode.fun": "modo [ONE] do carro",
        "carMotor.execute.mode": "executar modo [ONE] do carro",
        "carMotor.carGetInstruct": "sinal [ONE] do carro",
        "carMotor.speed": "velocidade",
        "carMotor.stop": "parar",
        "carMotor.buzzer": "buzzer",
        "carMotor.track": "seguir linha",
        "carMotor.avoidance": "evitar obstáculos",
        "carMotor.follow": "seguir",
        "carMotor.move": "mover",
        "carMotor.roundTrack": "seguir linha circular",
        "carMotor.8track": "seguir linha em 8",
        "fourLeggedBionicSpider.spiderGetInstruct": "sinal [ONE] da aranha"
    },
    "hr": {
        "carMotor.mode.fun": "način rada automobila [ONE]",
        "carMotor.execute.mode": "izvršiti način rada automobila [ONE]",
        "carMotor.carGetInstruct": "signal automobila [ONE]",
        "carMotor.speed": "brzina",
        "carMotor.stop": "zaustavi",
        "carMotor.buzzer": "zujalica",
        "carMotor.track": "trag",
        "carMotor.avoidance": "izbjegavanje prepreka",
        "carMotor.follow": "slijediti",
        "carMotor.move": "kretati se",
        "carMotor.roundTrack": "okrugli trag",
        "carMotor.8track": "trag u obliku osmice",
        "fourLeggedBionicSpider.spiderGetInstruct": "signal pauka [ONE]"
    },
    "ko": {
        "carMotor.mode.fun": "자동차 [ONE] 모드",
        "carMotor.execute.mode": "자동차 [ONE] 모드 실행",
        "carMotor.carGetInstruct": "자동차 [ONE] 신호",
        "carMotor.speed": "속도",
        "carMotor.stop": "정지",
        "carMotor.buzzer": "부저",
        "carMotor.track": "트랙",
        "carMotor.avoidance": "장애물 회피",
        "carMotor.follow": "따라가기",
        "carMotor.move": "이동",
        "carMotor.roundTrack": "원형 트랙",
        "carMotor.8track": "8자 트랙",
        "fourLeggedBionicSpider.spiderGetInstruct": "거미 [ONE] 신호"
    },
    "th": {
        "carMotor.mode.fun": "โหมดรถยนต์ [ONE]",
        "carMotor.execute.mode": "ดำเนินการโหมด [ONE] ของรถยนต์",
        "carMotor.carGetInstruct": "สัญญาณรถยนต์ [ONE]",
        "carMotor.speed": "ความเร็ว",
        "carMotor.stop": "หยุด",
        "carMotor.buzzer": "กริ่ง",
        "carMotor.track": "เส้นทาง",
        "carMotor.avoidance": "หลีกเลี่ยงอุปสรรค",
        "carMotor.follow": "ติดตาม",
        "carMotor.move": "เคลื่อนที่",
        "carMotor.roundTrack": "เส้นทางวงกลม",
        "carMotor.8track": "เส้นทางรูปเลขแปด",
        "fourLeggedBionicSpider.spiderGetInstruct": "สัญญาณแมงมุม [ONE]"
    },
    "nl": {
        "carMotor.mode.fun": "auto [ONE] modus",
        "carMotor.execute.mode": "auto [ONE] modus uitvoeren",
        "carMotor.carGetInstruct": "auto [ONE] signaal",
        "carMotor.speed": "snelheid",
        "carMotor.stop": "stoppen",
        "carMotor.buzzer": "zoemer",
        "carMotor.track": "volglijn",
        "carMotor.avoidance": "hindernissen vermijden",
        "carMotor.follow": "volgen",
        "carMotor.move": "bewegen",
        "carMotor.roundTrack": "ronde volglijn",
        "carMotor.8track": "8-vormige volglijn",
        "fourLeggedBionicSpider.spiderGetInstruct": "spin [ONE] signaal"
    },
    "ar": {
        "carMotor.mode.fun": "وضع السيارة [ONE]",
        "carMotor.execute.mode": "تشغيل وضع السيارة [ONE]",
        "carMotor.carGetInstruct": "إشارة السيارة [ONE]",
        "carMotor.speed": "السرعة",
        "carMotor.stop": "توقف",
        "carMotor.buzzer": "طنان",
        "carMotor.track": "المسار",
        "carMotor.avoidance": "تجنب العقبات",
        "carMotor.follow": "اتبع",
        "carMotor.move": "تحرك",
        "carMotor.roundTrack": "مسار دائري",
        "carMotor.8track": "مسار على شكل 8",
        "fourLeggedBionicSpider.spiderGetInstruct": "إشارة العنكبوت [ONE]"
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

