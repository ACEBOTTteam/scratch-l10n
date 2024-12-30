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
        "carMotor.firing":"枪口单次射击",
        "carMotor.continuous.firing":"枪口[ONE]连续射击",
        "carMotor.bluetoothController.expansion.name":"蓝牙手柄",
        "carMotor.bluetoothController.connect":"连接蓝牙手柄[ONE]",
        "carMotor.bluetoothController.isConnect":"是否到连接蓝牙手柄",
        "carMotor.bluetoothController.buttons":"蓝牙手柄[ONE]被[TWO]",
        "carMotor.bluetoothController.disConnect":"断开连接",
        "carMotor.bluetoothController.move":"蓝牙手柄[ONE]是否移动",
        "carMotor.bluetoothController.getData":"蓝牙手柄[ONE][TWO]值",
        "carMotor.bluetoothController.leftUp":"左前",
        "carMotor.bluetoothController.leftDown":"左后",
        "carMotor.bluetoothController.rightUp":"右前",
        "carMotor.bluetoothController.rightDown":"右后",
        "carMotor.bluetoothController.pressDown":"按下",
        "carMotor.bluetoothController.undo":"松开",
    },
    "zh-tw": {
        "carMotor.firing": "槍口單次射擊",
        "carMotor.continuous.firing": "槍口[ONE]連續射擊",
        "carMotor.bluetoothController.expansion.name": "藍牙手柄",
        "carMotor.bluetoothController.connect": "連接藍牙手柄[ONE]",
        "carMotor.bluetoothController.isConnect": "是否連接藍牙手柄",
        "carMotor.bluetoothController.buttons": "藍牙手柄[ONE]被[TWO]",
        "carMotor.bluetoothController.disConnect": "斷開連接",
        "carMotor.bluetoothController.move": "藍牙手柄[ONE]是否移動",
        "carMotor.bluetoothController.getData": "藍牙手柄[ONE][TWO]值",
        "carMotor.bluetoothController.leftUp": "左前",
        "carMotor.bluetoothController.leftDown": "左後",
        "carMotor.bluetoothController.rightUp": "右前",
        "carMotor.bluetoothController.rightDown": "右後",
        "carMotor.bluetoothController.pressDown": "按下",
        "carMotor.bluetoothController.undo": "鬆開"
    },
    "en": {
        "carMotor.firing": "gun muzzle single shot",
        "carMotor.continuous.firing": "gun muzzle [ONE] continuous shooting",
        "carMotor.bluetoothController.expansion.name": "bluetooth controller",
        "carMotor.bluetoothController.connect": "connect bluetooth controller [ONE]",
        "carMotor.bluetoothController.isConnect": "is bluetooth controller connected",
        "carMotor.bluetoothController.buttons": "bluetooth controller [ONE] is [TWO]",
        "carMotor.bluetoothController.disConnect": "disconnect",
        "carMotor.bluetoothController.move": "bluetooth controller [ONE] is moving",
        "carMotor.bluetoothController.getData": "bluetooth controller [ONE] [TWO] value",
        "carMotor.bluetoothController.leftUp": "left front",
        "carMotor.bluetoothController.leftDown": "left rear",
        "carMotor.bluetoothController.rightUp": "right front",
        "carMotor.bluetoothController.rightDown": "right rear",
        "carMotor.bluetoothController.pressDown": "pressed",
        "carMotor.bluetoothController.undo": "released"
    },
    "fr": {
        "carMotor.firing": "tir unique de la bouche du canon",
        "carMotor.continuous.firing": "bouche du canon [ONE] tir continu",
        "carMotor.bluetoothController.expansion.name": "manette bluetooth",
        "carMotor.bluetoothController.connect": "connecter la manette bluetooth [ONE]",
        "carMotor.bluetoothController.isConnect": "la manette bluetooth est-elle connectée",
        "carMotor.bluetoothController.buttons": "la manette bluetooth [ONE] est [TWO]",
        "carMotor.bluetoothController.disConnect": "déconnecter",
        "carMotor.bluetoothController.move": "la manette bluetooth [ONE] se déplace",
        "carMotor.bluetoothController.getData": "valeur [TWO] de la manette bluetooth [ONE]",
        "carMotor.bluetoothController.leftUp": "avant gauche",
        "carMotor.bluetoothController.leftDown": "arrière gauche",
        "carMotor.bluetoothController.rightUp": "avant droit",
        "carMotor.bluetoothController.rightDown": "arrière droit",
        "carMotor.bluetoothController.pressDown": "appuyé",
        "carMotor.bluetoothController.undo": "relâché"
    },
    "ja": {
        "carMotor.firing": "銃口の単発射撃",
        "carMotor.continuous.firing": "銃口[ONE]の連続射撃",
        "carMotor.bluetoothController.expansion.name": "ブルートゥースコントローラー",
        "carMotor.bluetoothController.connect": "ブルートゥースコントローラー[ONE]を接続",
        "carMotor.bluetoothController.isConnect": "ブルートゥースコントローラーが接続されていますか",
        "carMotor.bluetoothController.buttons": "ブルートゥースコントローラー[ONE]が[TWO]",
        "carMotor.bluetoothController.disConnect": "接続解除",
        "carMotor.bluetoothController.move": "ブルートゥースコントローラー[ONE]が移動中",
        "carMotor.bluetoothController.getData": "ブルートゥースコントローラー[ONE][TWO]の値",
        "carMotor.bluetoothController.leftUp": "左前",
        "carMotor.bluetoothController.leftDown": "左後",
        "carMotor.bluetoothController.rightUp": "右前",
        "carMotor.bluetoothController.rightDown": "右後",
        "carMotor.bluetoothController.pressDown": "押下",
        "carMotor.bluetoothController.undo": "解除"
    },
    "de": {
        "carMotor.firing": "einzelschuss aus der mündung",
        "carMotor.continuous.firing": "mündung [ONE] dauerfeuer",
        "carMotor.bluetoothController.expansion.name": "bluetooth-controller",
        "carMotor.bluetoothController.connect": "bluetooth-controller [ONE] verbinden",
        "carMotor.bluetoothController.isConnect": "bluetooth-controller verbunden",
        "carMotor.bluetoothController.buttons": "bluetooth-controller [ONE] ist [TWO]",
        "carMotor.bluetoothController.disConnect": "trennen",
        "carMotor.bluetoothController.move": "bluetooth-controller [ONE] bewegt sich",
        "carMotor.bluetoothController.getData": "wert [TWO] des bluetooth-controllers [ONE]",
        "carMotor.bluetoothController.leftUp": "vorne links",
        "carMotor.bluetoothController.leftDown": "hinten links",
        "carMotor.bluetoothController.rightUp": "vorne rechts",
        "carMotor.bluetoothController.rightDown": "hinten rechts",
        "carMotor.bluetoothController.pressDown": "gedrückt",
        "carMotor.bluetoothController.undo": "freigegeben"
    },
    "es": {
        "carMotor.firing": "disparo único desde la boca",
        "carMotor.continuous.firing": "boca [ONE] disparo continuo",
        "carMotor.bluetoothController.expansion.name": "controlador bluetooth",
        "carMotor.bluetoothController.connect": "conectar controlador bluetooth [ONE]",
        "carMotor.bluetoothController.isConnect": "controlador bluetooth conectado",
        "carMotor.bluetoothController.buttons": "el controlador bluetooth [ONE] está [TWO]",
        "carMotor.bluetoothController.disConnect": "desconectar",
        "carMotor.bluetoothController.move": "controlador bluetooth [ONE] se está moviendo",
        "carMotor.bluetoothController.getData": "valor [TWO] del controlador bluetooth [ONE]",
        "carMotor.bluetoothController.leftUp": "frontal izquierdo",
        "carMotor.bluetoothController.leftDown": "trasero izquierdo",
        "carMotor.bluetoothController.rightUp": "frontal derecho",
        "carMotor.bluetoothController.rightDown": "trasero derecho",
        "carMotor.bluetoothController.pressDown": "presionado",
        "carMotor.bluetoothController.undo": "liberado"
    },
    "ru": {
        "carMotor.firing": "одиночный выстрел из дула",
        "carMotor.continuous.firing": "дуло [ONE] непрерывная стрельба",
        "carMotor.bluetoothController.expansion.name": "bluetooth-контроллер",
        "carMotor.bluetoothController.connect": "подключить bluetooth-контроллер [ONE]",
        "carMotor.bluetoothController.isConnect": "bluetooth-контроллер подключен",
        "carMotor.bluetoothController.buttons": "bluetooth-контроллер [ONE] [TWO]",
        "carMotor.bluetoothController.disConnect": "отключить",
        "carMotor.bluetoothController.move": "bluetooth-контроллер [ONE] двигается",
        "carMotor.bluetoothController.getData": "значение [TWO] bluetooth-контроллера [ONE]",
        "carMotor.bluetoothController.leftUp": "левый передний",
        "carMotor.bluetoothController.leftDown": "левый задний",
        "carMotor.bluetoothController.rightUp": "правый передний",
        "carMotor.bluetoothController.rightDown": "правый задний",
        "carMotor.bluetoothController.pressDown": "нажато",
        "carMotor.bluetoothController.undo": "отпущено"
    },
    "cs": {
        "carMotor.firing": "jednorázový výstřel z hlavně",
        "carMotor.continuous.firing": "hlaveň [ONE] nepřetržitá střelba",
        "carMotor.bluetoothController.expansion.name": "bluetooth ovladač",
        "carMotor.bluetoothController.connect": "připojit bluetooth ovladač [ONE]",
        "carMotor.bluetoothController.isConnect": "je bluetooth ovladač připojen",
        "carMotor.bluetoothController.buttons": "bluetooth ovladač [ONE] je [TWO]",
        "carMotor.bluetoothController.disConnect": "odpojit",
        "carMotor.bluetoothController.move": "bluetooth ovladač [ONE] se pohybuje",
        "carMotor.bluetoothController.getData": "hodnota [TWO] bluetooth ovladače [ONE]",
        "carMotor.bluetoothController.leftUp": "levý přední",
        "carMotor.bluetoothController.leftDown": "levý zadní",
        "carMotor.bluetoothController.rightUp": "pravý přední",
        "carMotor.bluetoothController.rightDown": "pravý zadní",
        "carMotor.bluetoothController.pressDown": "stisknuto",
        "carMotor.bluetoothController.undo": "uvolněno"
    },
    "it": {
        "carMotor.firing": "singolo colpo dalla canna",
        "carMotor.continuous.firing": "canna [ONE] tiro continuo",
        "carMotor.bluetoothController.expansion.name": "controller bluetooth",
        "carMotor.bluetoothController.connect": "collega il controller bluetooth [ONE]",
        "carMotor.bluetoothController.isConnect": "il controller bluetooth è connesso",
        "carMotor.bluetoothController.buttons": "il controller bluetooth [ONE] è [TWO]",
        "carMotor.bluetoothController.disConnect": "disconnetti",
        "carMotor.bluetoothController.move": "il controller bluetooth [ONE] si sta muovendo",
        "carMotor.bluetoothController.getData": "valore [TWO] del controller bluetooth [ONE]",
        "carMotor.bluetoothController.leftUp": "anteriore sinistro",
        "carMotor.bluetoothController.leftDown": "posteriore sinistro",
        "carMotor.bluetoothController.rightUp": "anteriore destro",
        "carMotor.bluetoothController.rightDown": "posteriore destro",
        "carMotor.bluetoothController.pressDown": "premuto",
        "carMotor.bluetoothController.undo": "rilasciato"
    },
    "pl": {
        "carMotor.firing": "pojedynczy strzał z lufy",
        "carMotor.continuous.firing": "lufa [ONE] ciągły strzał",
        "carMotor.bluetoothController.expansion.name": "kontroler bluetooth",
        "carMotor.bluetoothController.connect": "połącz kontroler bluetooth [ONE]",
        "carMotor.bluetoothController.isConnect": "czy kontroler bluetooth jest połączony",
        "carMotor.bluetoothController.buttons": "kontroler bluetooth [ONE] jest [TWO]",
        "carMotor.bluetoothController.disConnect": "rozłącz",
        "carMotor.bluetoothController.move": "kontroler bluetooth [ONE] porusza się",
        "carMotor.bluetoothController.getData": "wartość [TWO] kontrolera bluetooth [ONE]",
        "carMotor.bluetoothController.leftUp": "przód lewy",
        "carMotor.bluetoothController.leftDown": "tył lewy",
        "carMotor.bluetoothController.rightUp": "przód prawy",
        "carMotor.bluetoothController.rightDown": "tył prawy",
        "carMotor.bluetoothController.pressDown": "naciśnięte",
        "carMotor.bluetoothController.undo": "zwolnione"
    },
    "tr": {
        "carMotor.firing": "namludan tek atış",
        "carMotor.continuous.firing": "namlu [ONE] sürekli ateş",
        "carMotor.bluetoothController.expansion.name": "bluetooth kontrolcü",
        "carMotor.bluetoothController.connect": "bluetooth kontrolcüyü bağla [ONE]",
        "carMotor.bluetoothController.isConnect": "bluetooth kontrolcü bağlı mı",
        "carMotor.bluetoothController.buttons": "bluetooth kontrolcü [ONE] [TWO]",
        "carMotor.bluetoothController.disConnect": "bağlantıyı kes",
        "carMotor.bluetoothController.move": "bluetooth kontrolcü [ONE] hareket ediyor",
        "carMotor.bluetoothController.getData": "bluetooth kontrolcü [ONE] [TWO] değeri",
        "carMotor.bluetoothController.leftUp": "sol ön",
        "carMotor.bluetoothController.leftDown": "sol arka",
        "carMotor.bluetoothController.rightUp": "sağ ön",
        "carMotor.bluetoothController.rightDown": "sağ arka",
        "carMotor.bluetoothController.pressDown": "basıldı",
        "carMotor.bluetoothController.undo": "serbest bırakıldı"
    },
    "pt": {
        "carMotor.firing": "disparo único da boca do cano",
        "carMotor.continuous.firing": "boca do cano [ONE] disparo contínuo",
        "carMotor.bluetoothController.expansion.name": "controlador bluetooth",
        "carMotor.bluetoothController.connect": "conectar controlador bluetooth [ONE]",
        "carMotor.bluetoothController.isConnect": "controlador bluetooth conectado",
        "carMotor.bluetoothController.buttons": "controlador bluetooth [ONE] está [TWO]",
        "carMotor.bluetoothController.disConnect": "desconectar",
        "carMotor.bluetoothController.move": "controlador bluetooth [ONE] está se movendo",
        "carMotor.bluetoothController.getData": "valor [TWO] do controlador bluetooth [ONE]",
        "carMotor.bluetoothController.leftUp": "frontal esquerdo",
        "carMotor.bluetoothController.leftDown": "traseiro esquerdo",
        "carMotor.bluetoothController.rightUp": "frontal direito",
        "carMotor.bluetoothController.rightDown": "traseiro direito",
        "carMotor.bluetoothController.pressDown": "pressionado",
        "carMotor.bluetoothController.undo": "liberado"
    },
    "hr": {
        "carMotor.firing": "jednokratno ispaljivanje iz cijevi",
        "carMotor.continuous.firing": "cijev [ONE] neprekidna paljba",
        "carMotor.bluetoothController.expansion.name": "bluetooth kontroler",
        "carMotor.bluetoothController.connect": "poveži bluetooth kontroler [ONE]",
        "carMotor.bluetoothController.isConnect": "je li bluetooth kontroler povezan",
        "carMotor.bluetoothController.buttons": "bluetooth kontroler [ONE] je [TWO]",
        "carMotor.bluetoothController.disConnect": "odspoji",
        "carMotor.bluetoothController.move": "bluetooth kontroler [ONE] se kreće",
        "carMotor.bluetoothController.getData": "vrijednost [TWO] bluetooth kontrolera [ONE]",
        "carMotor.bluetoothController.leftUp": "lijevo prednje",
        "carMotor.bluetoothController.leftDown": "lijevo stražnje",
        "carMotor.bluetoothController.rightUp": "desno prednje",
        "carMotor.bluetoothController.rightDown": "desno stražnje",
        "carMotor.bluetoothController.pressDown": "pritisnuto",
        "carMotor.bluetoothController.undo": "otpušteno"
    },
    "ko": {
        "carMotor.firing": "총구 단일 발사",
        "carMotor.continuous.firing": "총구 [ONE] 연속 발사",
        "carMotor.bluetoothController.expansion.name": "블루투스 컨트롤러",
        "carMotor.bluetoothController.connect": "블루투스 컨트롤러 [ONE] 연결",
        "carMotor.bluetoothController.isConnect": "블루투스 컨트롤러 연결 여부",
        "carMotor.bluetoothController.buttons": "블루투스 컨트롤러 [ONE]이(가) [TWO]",
        "carMotor.bluetoothController.disConnect": "연결 해제",
        "carMotor.bluetoothController.move": "블루투스 컨트롤러 [ONE] 이동 여부",
        "carMotor.bluetoothController.getData": "블루투스 컨트롤러 [ONE][TWO] 값",
        "carMotor.bluetoothController.leftUp": "왼쪽 앞",
        "carMotor.bluetoothController.leftDown": "왼쪽 뒤",
        "carMotor.bluetoothController.rightUp": "오른쪽 앞",
        "carMotor.bluetoothController.rightDown": "오른쪽 뒤",
        "carMotor.bluetoothController.pressDown": "누름",
        "carMotor.bluetoothController.undo": "해제"
    },
    "th": {
        "carMotor.firing": "ยิงครั้งเดียวจากปากกระบอกปืน",
        "carMotor.continuous.firing": "ปากกระบอกปืน [ONE] ยิงต่อเนื่อง",
        "carMotor.bluetoothController.expansion.name": "ตัวควบคุมบลูทูธ",
        "carMotor.bluetoothController.connect": "เชื่อมต่อตัวควบคุมบลูทูธ [ONE]",
        "carMotor.bluetoothController.isConnect": "ตัวควบคุมบลูทูธเชื่อมต่อแล้วหรือไม่",
        "carMotor.bluetoothController.buttons": "ตัวควบคุมบลูทูธ [ONE] ถูก[TWO]",
        "carMotor.bluetoothController.disConnect": "ยกเลิกการเชื่อมต่อ",
        "carMotor.bluetoothController.move": "ตัวควบคุมบลูทูธ [ONE] เคลื่อนไหวหรือไม่",
        "carMotor.bluetoothController.getData": "ค่าตัวควบคุมบลูทูธ [ONE][TWO]",
        "carMotor.bluetoothController.leftUp": "ซ้ายหน้า",
        "carMotor.bluetoothController.leftDown": "ซ้ายหลัง",
        "carMotor.bluetoothController.rightUp": "ขวาหน้า",
        "carMotor.bluetoothController.rightDown": "ขวาหลัง",
        "carMotor.bluetoothController.pressDown": "กด",
        "carMotor.bluetoothController.undo": "ปล่อย"
    },
    "nl": {
        "carMotor.firing": "enkele schot uit de loop",
        "carMotor.continuous.firing": "loop [ONE] continu schieten",
        "carMotor.bluetoothController.expansion.name": "bluetooth-controller",
        "carMotor.bluetoothController.connect": "bluetooth-controller [ONE] verbinden",
        "carMotor.bluetoothController.isConnect": "bluetooth-controller verbonden",
        "carMotor.bluetoothController.buttons": "bluetooth-controller [ONE] is [TWO]",
        "carMotor.bluetoothController.disConnect": "verbinding verbreken",
        "carMotor.bluetoothController.move": "bluetooth-controller [ONE] beweegt",
        "carMotor.bluetoothController.getData": "waarde [TWO] van bluetooth-controller [ONE]",
        "carMotor.bluetoothController.leftUp": "linksvoor",
        "carMotor.bluetoothController.leftDown": "linksonder",
        "carMotor.bluetoothController.rightUp": "rechtsvoor",
        "carMotor.bluetoothController.rightDown": "rechtsonder",
        "carMotor.bluetoothController.pressDown": "ingedrukt",
        "carMotor.bluetoothController.undo": "losgelaten"
    },
    "ar": {
        "carMotor.firing": "إطلاق طلقة واحدة من الفوهة",
        "carMotor.continuous.firing": "فوهة [ONE] إطلاق مستمر",
        "carMotor.bluetoothController.expansion.name": "وحدة تحكم بلوتوث",
        "carMotor.bluetoothController.connect": "اتصال وحدة تحكم بلوتوث [ONE]",
        "carMotor.bluetoothController.isConnect": "هل وحدة تحكم البلوتوث متصلة",
        "carMotor.bluetoothController.buttons": "وحدة تحكم بلوتوث [ONE] [TWO]",
        "carMotor.bluetoothController.disConnect": "قطع الاتصال",
        "carMotor.bluetoothController.move": "وحدة تحكم بلوتوث [ONE] تتحرك",
        "carMotor.bluetoothController.getData": "قيمة [TWO] لوحدة تحكم بلوتوث [ONE]",
        "carMotor.bluetoothController.leftUp": "الأمام الأيسر",
        "carMotor.bluetoothController.leftDown": "الخلف الأيسر",
        "carMotor.bluetoothController.rightUp": "الأمام الأيمن",
        "carMotor.bluetoothController.rightDown": "الخلف الأيمن",
        "carMotor.bluetoothController.pressDown": "مضغوط",
        "carMotor.bluetoothController.undo": "مطلق"
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

