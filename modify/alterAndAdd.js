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
        "carMotor.camera.serverInit": "小车摄像头[ONE]清晰度[TWO]初始化",
        "carMotor.camera.open": "开启摄像头[ONE]",
        "carMotor.camera.frames": "画面",
        "carMotor.camera.webPageControl": "网页控制",
        "carMotor.camera.highDefinition": "高画质",
        "carMotor.camera.mediumQuality": "中画质",
        "carMotor.camera.lowQuality": "低画质"
    },
    "zh-tw": {
        "carMotor.camera.serverInit": "小車攝像頭[ONE]清晰度[TWO]初始化",
        "carMotor.camera.open": "開啟攝像頭[ONE]",
        "carMotor.camera.frames": "畫面",
        "carMotor.camera.webPageControl": "網頁控制",
        "carMotor.camera.highDefinition": "高畫質",
        "carMotor.camera.mediumQuality": "中畫質",
        "carMotor.camera.lowQuality": "低畫質"
    },
    "en": {
        "carMotor.camera.serverInit": "car camera [ONE] resolution [TWO] initialization",
        "carMotor.camera.open": "open camera [ONE]",
        "carMotor.camera.frames": "frames",
        "carMotor.camera.webPageControl": "web page control",
        "carMotor.camera.highDefinition": "high definition",
        "carMotor.camera.mediumQuality": "medium quality",
        "carMotor.camera.lowQuality": "low quality"
    },
    "fr": {
        "carMotor.camera.serverInit": "initialisation de la caméra de voiture [ONE] résolution [TWO]",
        "carMotor.camera.open": "ouvrir la caméra [ONE]",
        "carMotor.camera.frames": "images",
        "carMotor.camera.webPageControl": "contrôle de page web",
        "carMotor.camera.highDefinition": "haute définition",
        "carMotor.camera.mediumQuality": "qualité moyenne",
        "carMotor.camera.lowQuality": "basse qualité"
    },
    "ja": {
        "carMotor.camera.serverInit": "カメラ[ONE]解像度[TWO]初期化",
        "carMotor.camera.open": "カメラ[ONE]を開く",
        "carMotor.camera.frames": "フレーム",
        "carMotor.camera.webPageControl": "ウェブページコントロール",
        "carMotor.camera.highDefinition": "高画質",
        "carMotor.camera.mediumQuality": "中画質",
        "carMotor.camera.lowQuality": "低画質"
    },
    "de": {
        "carMotor.camera.serverInit": "kamera [ONE] auflösung [TWO] initialisierung",
        "carMotor.camera.open": "kamera [ONE] öffnen",
        "carMotor.camera.frames": "bilder",
        "carMotor.camera.webPageControl": "webseitensteuerung",
        "carMotor.camera.highDefinition": "hohe auflösung",
        "carMotor.camera.mediumQuality": "mittlere qualität",
        "carMotor.camera.lowQuality": "niedrige qualität"
    },
    "es": {
        "carMotor.camera.serverInit": "inicialización de la cámara del coche [ONE] resolución [TWO]",
        "carMotor.camera.open": "abrir cámara [ONE]",
        "carMotor.camera.frames": "fotogramas",
        "carMotor.camera.webPageControl": "control de página web",
        "carMotor.camera.highDefinition": "alta definición",
        "carMotor.camera.mediumQuality": "calidad media",
        "carMotor.camera.lowQuality": "baja calidad"
    },
    "ru": {
        "carMotor.camera.serverInit": "инициализация камеры автомобиля [ONE] разрешение [TWO]",
        "carMotor.camera.open": "открыть камеру [ONE]",
        "carMotor.camera.frames": "кадры",
        "carMotor.camera.webPageControl": "управление через веб-страницу",
        "carMotor.camera.highDefinition": "высокое качество",
        "carMotor.camera.mediumQuality": "среднее качество",
        "carMotor.camera.lowQuality": "низкое качество"
    },
    "cs": {
        "carMotor.camera.serverInit": "inicializace kamery auta [ONE] rozlišení [TWO]",
        "carMotor.camera.open": "otevřít kameru [ONE]",
        "carMotor.camera.frames": "snímky",
        "carMotor.camera.webPageControl": "ovládání webové stránky",
        "carMotor.camera.highDefinition": "vysoká kvalita",
        "carMotor.camera.mediumQuality": "střední kvalita",
        "carMotor.camera.lowQuality": "nízká kvalita"
    },
    "it": {
        "carMotor.camera.serverInit": "inizializzazione della videocamera dell'auto [ONE] risoluzione [TWO]",
        "carMotor.camera.open": "apri videocamera [ONE]",
        "carMotor.camera.frames": "fotogrammi",
        "carMotor.camera.webPageControl": "controllo della pagina web",
        "carMotor.camera.highDefinition": "alta definizione",
        "carMotor.camera.mediumQuality": "qualità media",
        "carMotor.camera.lowQuality": "bassa qualità"
    },
    "pl": {
        "carMotor.camera.serverInit": "inicjalizacja kamery samochodowej [ONE] rozdzielczość [TWO]",
        "carMotor.camera.open": "otwórz kamerę [ONE]",
        "carMotor.camera.frames": "klatki",
        "carMotor.camera.webPageControl": "sterowanie stroną internetową",
        "carMotor.camera.highDefinition": "wysoka jakość",
        "carMotor.camera.mediumQuality": "średnia jakość",
        "carMotor.camera.lowQuality": "niska jakość"
    },
    "tr": {
        "carMotor.camera.serverInit": "araba kamerası [ONE] çözünürlük [TWO] başlatma",
        "carMotor.camera.open": "kamera [ONE]'ı aç",
        "carMotor.camera.frames": "kareler",
        "carMotor.camera.webPageControl": "web sayfası kontrolü",
        "carMotor.camera.highDefinition": "yüksek çözünürlük",
        "carMotor.camera.mediumQuality": "orta çözünürlük",
        "carMotor.camera.lowQuality": "düşük çözünürlük"
    },
    "pt": {
        "carMotor.camera.serverInit": "inicialização da câmera do carro [ONE] resolução [TWO]",
        "carMotor.camera.open": "abrir câmera [ONE]",
        "carMotor.camera.frames": "quadros",
        "carMotor.camera.webPageControl": "controle da página web",
        "carMotor.camera.highDefinition": "alta definição",
        "carMotor.camera.mediumQuality": "qualidade média",
        "carMotor.camera.lowQuality": "baixa qualidade"
    },
    "hr": {
        "carMotor.camera.serverInit": "inicijalizacija kamere auta [ONE] rezolucija [TWO]",
        "carMotor.camera.open": "otvori kameru [ONE]",
        "carMotor.camera.frames": "okviri",
        "carMotor.camera.webPageControl": "kontrola putem web stranice",
        "carMotor.camera.highDefinition": "visoka kvaliteta",
        "carMotor.camera.mediumQuality": "srednja kvaliteta",
        "carMotor.camera.lowQuality": "niska kvaliteta"
    },
    "ko": {
        "carMotor.camera.serverInit": "자동차 카메라 [ONE] 해상도 [TWO] 초기화",
        "carMotor.camera.open": "카메라 [ONE] 열기",
        "carMotor.camera.frames": "프레임",
        "carMotor.camera.webPageControl": "웹 페이지 제어",
        "carMotor.camera.highDefinition": "고화질",
        "carMotor.camera.mediumQuality": "중간 화질",
        "carMotor.camera.lowQuality": "저화질"
    },
    "th": {
        "carMotor.camera.serverInit": "การตั้งค่ากล้องรถยนต์ [ONE] ความละเอียด [TWO]",
        "carMotor.camera.open": "เปิดกล้อง [ONE]",
        "carMotor.camera.frames": "เฟรม",
        "carMotor.camera.webPageControl": "ควบคุมผ่านเว็บเพจ",
        "carMotor.camera.highDefinition": "ความคมชัดสูง",
        "carMotor.camera.mediumQuality": "คุณภาพปานกลาง",
        "carMotor.camera.lowQuality": "คุณภาพต่ำ"
    },
    "nl": {
        "carMotor.camera.serverInit": "camera auto [ONE] resolutie [TWO] initialisatie",
        "carMotor.camera.open": "camera [ONE] openen",
        "carMotor.camera.frames": "frames",
        "carMotor.camera.webPageControl": "webpagina besturing",
        "carMotor.camera.highDefinition": "hoge definitie",
        "carMotor.camera.mediumQuality": "gemiddelde kwaliteit",
        "carMotor.camera.lowQuality": "lage kwaliteit"
    },
    "ar": {
        "carMotor.camera.serverInit": "تثبيت كاميرا السيارة [ONE] الدقة [TWO]",
        "carMotor.camera.open": "فتح الكاميرا [ONE]",
        "carMotor.camera.frames": "الإطارات",
        "carMotor.camera.webPageControl": "التحكم عبر صفحة الويب",
        "carMotor.camera.highDefinition": "عالي الدقة",
        "carMotor.camera.mediumQuality": "جودة متوسطة",
        "carMotor.camera.lowQuality": "جودة منخفضة"
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

