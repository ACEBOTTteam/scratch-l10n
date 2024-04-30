const fs = require('fs')

const block = {
    "zh-cn": {
        "OPERATOR_CR": "回车",
        "OPERATOR_BR": "换行",
        "OPERATOR_CR_BR": "回车&换行"
    },
    "zh-tw": {
        "OPERATOR_CR": "回車",
        "OPERATOR_BR": "換行",
        "OPERATOR_CR_BR": "回車&換行"
    },
    "en": {
        "OPERATOR_CR": "Carriage Return",
        "OPERATOR_BR": "Line Break",
        "OPERATOR_CR_BR": "Carriage Return & Line Break"
    },
    "fr": {
        "OPERATOR_CR": "Retour chariot",
        "OPERATOR_BR": "Saut de ligne",
        "OPERATOR_CR_BR": "Retour chariot et saut de ligne"
    },
    "ja": {
        "OPERATOR_CR": "キャリッジリターン",
        "OPERATOR_BR": "改行",
        "OPERATOR_CR_BR": "キャリッジリターンと改行"
    },
    "de": {
        "OPERATOR_CR": "Wagenrücklauf",
        "OPERATOR_BR": "Zeilenumbruch",
        "OPERATOR_CR_BR": "Wagenrücklauf und Zeilenumbruch"
    },
    "es": {
        "OPERATOR_CR": "Retorno de carro",
        "OPERATOR_BR": "Salto de línea",
        "OPERATOR_CR_BR": "Retorno de carro y salto de línea"
    },
    "ru": {
        "OPERATOR_CR": "Возврат каретки",
        "OPERATOR_BR": "Перенос строки",
        "OPERATOR_CR_BR": "Возврат каретки и перенос строки"
    },
    "cs": {
        "OPERATOR_CR": "Závod vozíku",
        "OPERATOR_BR": "Přerušení řádku",
        "OPERATOR_CR_BR": "Závod vozíku a přerušení řádku"
    },
    "it": {
        "OPERATOR_CR": "Carriage Return",
        "OPERATOR_BR": "Interruzione di riga",
        "OPERATOR_CR_BR": "Carriage Return e interruzione di riga"
    },
    "pl": {
        "OPERATOR_CR": "Powrót karetki",
        "OPERATOR_BR": "Przerwanie linii",
        "OPERATOR_CR_BR": "Powrót karetki i przerwanie linii"
    },
    "tr": {
        "OPERATOR_CR": "Karet Dönüş",
        "OPERATOR_BR": "Satır Sonu",
        "OPERATOR_CR_BR": "Karet Dönüş ve Satır Sonu"
    },
    "pt": {
        "OPERATOR_CR": "Retorno de Carro",
        "OPERATOR_BR": "Quebra de Linha",
        "OPERATOR_CR_BR": "Retorno de Carro e Quebra de Linha"
    },
    "hr": {
        "OPERATOR_CR": "Povratak kolica",
        "OPERATOR_BR": "Prekid reda",
        "OPERATOR_CR_BR": "Povratak kolica i prekid reda"
    },
    "ko": {
        "OPERATOR_CR": "캐리지 리턴",
        "OPERATOR_BR": "줄 바꿈",
        "OPERATOR_CR_BR": "캐리지 리턴과 줄 바꿈"
    },
    "th": {
        "OPERATOR_CR": "Return Carriage",
        "OPERATOR_BR": "Break Line",
        "OPERATOR_CR_BR": "Return Carriage และ Break Line"
    },
    "nl": {
        "OPERATOR_CR": "Carriage Return",
        "OPERATOR_BR": "Regelafbreking",
        "OPERATOR_CR_BR": "Carriage Return en Regelafbreking"
    },
    "ar": {
        "OPERATOR_CR": "عودة العربة",
        "OPERATOR_BR": "انتقال إلى السطر التالي",
        "OPERATOR_CR_BR": "عودة العربة & انتقال إلى السطر التالي"
    }
}

const extensions = {
    "zh-cn": {
        "gestureRecognition": "手势识别",
        "gestureRecognition.gesture.recognition": "识别手势",
        "gestureRecognition.init": "手势识别服务器初始化 API Key[ONE]API Secret[TWO]",
        "gestureRecognition.result": "手势识别结果为[ONE]的概率",
        "gestureRecognition.heart_a": "比心 A",
        "gestureRecognition.heart_b": "比心 B",
        "gestureRecognition.heart_c": "比心 C",
        "gestureRecognition.heart_d": "比心 D",
        "gestureRecognition.OK": "ok",
        "gestureRecognition.hand_open": "手张开",
        "gestureRecognition.thumb_up": "点赞",
        "gestureRecognition.thumb_down": "差评",
        "gestureRecognition.rock": "ROCK",
        "gestureRecognition.namaste": "合十",
        "gestureRecognition.palm_up": "手心向上",
        "gestureRecognition.fist": "握拳",
        "gestureRecognition.index_finger_up": "食指朝上",
        "gestureRecognition.double_finger_up": "双指朝上",
        "gestureRecognition.victory": "胜利",
        "gestureRecognition.big_v": "大V",
        "gestureRecognition.phonecall": "打电话",
        "gestureRecognition.beg": "作揖",
        "gestureRecognition.thanks": "感谢",
    },
    "zh-tw": {
        "gestureRecognition": "手勢識別",
        "gestureRecognition.gesture.recognition": "辨識手勢",
        "gestureRecognition.init": "初始化手勢辨識伺服器 API 金鑰[ONE]API 密鑰[TWO]",
        "gestureRecognition.result": "手勢辨識結果為[ONE]的機率",
        "gestureRecognition.heart_a": "比心 A",
        "gestureRecognition.heart_b": "比心 B",
        "gestureRecognition.heart_c": "比心 C",
        "gestureRecognition.heart_d": "比心 D",
        "gestureRecognition.OK": "確定",
        "gestureRecognition.hand_open": "手張開",
        "gestureRecognition.thumb_up": "讚",
        "gestureRecognition.thumb_down": "差評",
        "gestureRecognition.rock": "ROCK",
        "gestureRecognition.namaste": "合十",
        "gestureRecognition.palm_up": "手心向上",
        "gestureRecognition.fist": "握拳",
        "gestureRecognition.index_finger_up": "食指朝上",
        "gestureRecognition.double_finger_up": "雙指朝上",
        "gestureRecognition.victory": "勝利",
        "gestureRecognition.big_v": "大 V",
        "gestureRecognition.phonecall": "打電話",
        "gestureRecognition.beg": "作揖",
        "gestureRecognition.thanks": "感謝"
    },
    "en": {
        "gestureRecognition": "Gesture Recognition",
        "gestureRecognition.gesture.recognition": "Recognize Gesture",
        "gestureRecognition.init": "Initialize Gesture Recognition Server API Key [ONE] API Secret [TWO]",
        "gestureRecognition.result": "Gesture Recognition Result is [ONE] with probability",
        "gestureRecognition.heart_a": "Heart A",
        "gestureRecognition.heart_b": "Heart B",
        "gestureRecognition.heart_c": "Heart C",
        "gestureRecognition.heart_d": "Heart D",
        "gestureRecognition.OK": "OK",
        "gestureRecognition.hand_open": "Hand Open",
        "gestureRecognition.thumb_up": "Thumb Up",
        "gestureRecognition.thumb_down": "Thumb Down",
        "gestureRecognition.rock": "ROCK",
        "gestureRecognition.namaste": "Namaste",
        "gestureRecognition.palm_up": "Palm Up",
        "gestureRecognition.fist": "Fist",
        "gestureRecognition.index_finger_up": "Index Finger Up",
        "gestureRecognition.double_finger_up": "Two Fingers Up",
        "gestureRecognition.victory": "Victory",
        "gestureRecognition.big_v": "Big V",
        "gestureRecognition.phonecall": "Phone Call",
        "gestureRecognition.beg": "Beg",
        "gestureRecognition.thanks": "Thanks"
    },
    "fr": {
        "gestureRecognition": "Reconnaissance de gestes",
        "gestureRecognition.gesture.recognition": "Reconnaissance de gestes",
        "gestureRecognition.init": "Initialiser le serveur de reconnaissance de gestes Clé API [ONE] Secret API [TWO]",
        "gestureRecognition.result": "Le résultat de la reconnaissance de gestes est [ONE] avec une probabilité",
        "gestureRecognition.heart_a": "Cœur A",
        "gestureRecognition.heart_b": "Cœur B",
        "gestureRecognition.heart_c": "Cœur C",
        "gestureRecognition.heart_d": "Cœur D",
        "gestureRecognition.OK": "OK",
        "gestureRecognition.hand_open": "Main Ouverte",
        "gestureRecognition.thumb_up": "Pouce Levé",
        "gestureRecognition.thumb_down": "Pouce Baissé",
        "gestureRecognition.rock": "ROCK",
        "gestureRecognition.namaste": "Namaste",
        "gestureRecognition.palm_up": "Paume Levée",
        "gestureRecognition.fist": "Poing",
        "gestureRecognition.index_finger_up": "Index Levé",
        "gestureRecognition.double_finger_up": "Deux Doigts Levés",
        "gestureRecognition.victory": "Victoire",
        "gestureRecognition.big_v": "Grand V",
        "gestureRecognition.phonecall": "Appel Téléphonique",
        "gestureRecognition.beg": "Supplie",
        "gestureRecognition.thanks": "Merci"
    },
    "ja": {
        "gestureRecognition": "ジェスチャー認識",
        "gestureRecognition.gesture.recognition": "ジェスチャー認識",
        "gestureRecognition.init": "ジェスチャー認識サーバーの初期化 APIキー[ONE] APIシークレット[TWO]",
        "gestureRecognition.result": "ジェスチャー認識結果は[ONE]の確率です",
        "gestureRecognition.heart_a": "ハート A",
        "gestureRecognition.heart_b": "ハート B",
        "gestureRecognition.heart_c": "ハート C",
        "gestureRecognition.heart_d": "ハート D",
        "gestureRecognition.OK": "OK",
        "gestureRecognition.hand_open": "手を開く",
        "gestureRecognition.thumb_up": "いいね",
        "gestureRecognition.thumb_down": "評価ダウン",
        "gestureRecognition.rock": "ROCK",
        "gestureRecognition.namaste": "合掌",
        "gestureRecognition.palm_up": "手のひらを上に",
        "gestureRecognition.fist": "拳",
        "gestureRecognition.index_finger_up": "人差し指を上に",
        "gestureRecognition.double_finger_up": "両指を上に",
        "gestureRecognition.victory": "勝利",
        "gestureRecognition.big_v": "ビッグV",
        "gestureRecognition.phonecall": "電話をかける",
        "gestureRecognition.beg": "お願い",
        "gestureRecognition.thanks": "ありがとう"
    },
    "de": {
        "gestureRecognition": "Gestenerkennung",
        "gestureRecognition.gesture.recognition": "Geste erkennen",
        "gestureRecognition.init": "Initialisieren Sie den Gestenerkennungsserver API Key [ONE] API Secret [TWO]",
        "gestureRecognition.result": "Gestenerkennungsergebnis ist [ONE] mit Wahrscheinlichkeit",
        "gestureRecognition.heart_a": "Herz A",
        "gestureRecognition.heart_b": "Herz B",
        "gestureRecognition.heart_c": "Herz C",
        "gestureRecognition.heart_d": "Herz D",
        "gestureRecognition.OK": "OK",
        "gestureRecognition.hand_open": "Hand öffnen",
        "gestureRecognition.thumb_up": "Daumen hoch",
        "gestureRecognition.thumb_down": "Daumen runter",
        "gestureRecognition.rock": "ROCK",
        "gestureRecognition.namaste": "Namaste",
        "gestureRecognition.palm_up": "Handfläche nach oben",
        "gestureRecognition.fist": "Faust",
        "gestureRecognition.index_finger_up": "Zeigefinger nach oben",
        "gestureRecognition.double_finger_up": "Zwei Finger nach oben",
        "gestureRecognition.victory": "Sieg",
        "gestureRecognition.big_v": "Großes V",
        "gestureRecognition.phonecall": "Telefonanruf",
        "gestureRecognition.beg": "Bitten",
        "gestureRecognition.thanks": "Danke"
    },
    "es": {
        "gestureRecognition": "Reconocimiento de gestos",
        "gestureRecognition.gesture.recognition": "Reconocimiento de gestos",
        "gestureRecognition.init": "Inicializar servidor de reconocimiento de gestos Clave API [ONE] Secreto API [TWO]",
        "gestureRecognition.result": "El resultado del reconocimiento de gestos es [ONE] con probabilidad",
        "gestureRecognition.heart_a": "Corazón A",
        "gestureRecognition.heart_b": "Corazón B",
        "gestureRecognition.heart_c": "Corazón C",
        "gestureRecognition.heart_d": "Corazón D",
        "gestureRecognition.OK": "OK",
        "gestureRecognition.hand_open": "Mano Abierta",
        "gestureRecognition.thumb_up": "Pulgar Arriba",
        "gestureRecognition.thumb_down": "Pulgar Abajo",
        "gestureRecognition.rock": "ROCK",
        "gestureRecognition.namaste": "Namaste",
        "gestureRecognition.palm_up": "Palma hacia Arriba",
        "gestureRecognition.fist": "Puño",
        "gestureRecognition.index_finger_up": "Dedo Índice Arriba",
        "gestureRecognition.double_finger_up": "Dos Dedos Arriba",
        "gestureRecognition.victory": "Victoria",
        "gestureRecognition.big_v": "Gran V",
        "gestureRecognition.phonecall": "Llamada Telefónica",
        "gestureRecognition.beg": "Rogar",
        "gestureRecognition.thanks": "Gracias"
    },
    "ru": {
        "gestureRecognition": "Распознавание жестов",
        "gestureRecognition.gesture.recognition": "Распознавание жестов",
        "gestureRecognition.init": "Инициализация сервера распознавания жестов API-ключ [ONE] API-секрет [TWO]",
        "gestureRecognition.result": "Результат распознавания жестов - [ONE] с вероятностью",
        "gestureRecognition.heart_a": "Сердце A",
        "gestureRecognition.heart_b": "Сердце B",
        "gestureRecognition.heart_c": "Сердце C",
        "gestureRecognition.heart_d": "Сердце D",
        "gestureRecognition.OK": "OK",
        "gestureRecognition.hand_open": "Открытая ладонь",
        "gestureRecognition.thumb_up": "Палец вверх",
        "gestureRecognition.thumb_down": "Палец вниз",
        "gestureRecognition.rock": "ROCK",
        "gestureRecognition.namaste": "Намасте",
        "gestureRecognition.palm_up": "Ладонь вверх",
        "gestureRecognition.fist": "Кулак",
        "gestureRecognition.index_finger_up": "Указательный палец вверх",
        "gestureRecognition.double_finger_up": "Два пальца вверх",
        "gestureRecognition.victory": "Победа",
        "gestureRecognition.big_v": "Большая V",
        "gestureRecognition.phonecall": "Телефонный звонок",
        "gestureRecognition.beg": "Умолять",
        "gestureRecognition.thanks": "Спасибо"
    },
    "cs": {
        "gestureRecognition": "Rozpoznávání gest",
        "gestureRecognition.gesture.recognition": "Rozpoznání gest",
        "gestureRecognition.init": "Inicializace serveru pro rozpoznávání gest API klíč [ONE] API tajemství [TWO]",
        "gestureRecognition.result": "Výsledek rozpoznání gest je [ONE] s pravděpodobností",
        "gestureRecognition.heart_a": "Srdce A",
        "gestureRecognition.heart_b": "Srdce B",
        "gestureRecognition.heart_c": "Srdce C",
        "gestureRecognition.heart_d": "Srdce D",
        "gestureRecognition.OK": "OK",
        "gestureRecognition.hand_open": "Otevřená dlaň",
        "gestureRecognition.thumb_up": "Palec nahoru",
        "gestureRecognition.thumb_down": "Palec dolů",
        "gestureRecognition.rock": "ROCK",
        "gestureRecognition.namaste": "Namasté",
        "gestureRecognition.palm_up": "Dlaň nahoru",
        "gestureRecognition.fist": "Pěst",
        "gestureRecognition.index_finger_up": "Ukazovák nahoru",
        "gestureRecognition.double_finger_up": "Dva prsty nahoru",
        "gestureRecognition.victory": "Vítězství",
        "gestureRecognition.big_v": "Velké V",
        "gestureRecognition.phonecall": "Telefonní hovor",
        "gestureRecognition.beg": "Prosím",
        "gestureRecognition.thanks": "Děkuji"
    },
    "it": {
        "gestureRecognition": "Riconoscimento dei gesti",
        "gestureRecognition.gesture.recognition": "Riconoscimento dei gesti",
        "gestureRecognition.init": "Inizializza il server di riconoscimento dei gesti Chiave API [ONE] Segreto API [TWO]",
        "gestureRecognition.result": "Il risultato del riconoscimento dei gesti è [ONE] con probabilità",
        "gestureRecognition.heart_a": "Cuore A",
        "gestureRecognition.heart_b": "Cuore B",
        "gestureRecognition.heart_c": "Cuore C",
        "gestureRecognition.heart_d": "Cuore D",
        "gestureRecognition.OK": "OK",
        "gestureRecognition.hand_open": "Mano Aperta",
        "gestureRecognition.thumb_up": "Pollice in Su",
        "gestureRecognition.thumb_down": "Pollice in Giù",
        "gestureRecognition.rock": "ROCK",
        "gestureRecognition.namaste": "Namastè",
        "gestureRecognition.palm_up": "Palmo in Su",
        "gestureRecognition.fist": "Pugno",
        "gestureRecognition.index_finger_up": "Dito Indice in Su",
        "gestureRecognition.double_finger_up": "Due Dita in Su",
        "gestureRecognition.victory": "Vittoria",
        "gestureRecognition.big_v": "Grande V",
        "gestureRecognition.phonecall": "Chiamata Telefonica",
        "gestureRecognition.beg": "Chiedere",
        "gestureRecognition.thanks": "Grazie"
    },
    "pl": {
        "gestureRecognition": "Rozpoznawanie gestów",
        "gestureRecognition.gesture.recognition": "Rozpoznawanie gestów",
        "gestureRecognition.init": "Inicjalizacja serwera rozpoznawania gestów Klucz API [ONE] Sekret API [TWO]",
        "gestureRecognition.result": "Wynik rozpoznawania gestów to [ONE] z prawdopodobieństwem",
        "gestureRecognition.heart_a": "Serce A",
        "gestureRecognition.heart_b": "Serce B",
        "gestureRecognition.heart_c": "Serce C",
        "gestureRecognition.heart_d": "Serce D",
        "gestureRecognition.OK": "OK",
        "gestureRecognition.hand_open": "Otwarta Dłoń",
        "gestureRecognition.thumb_up": "Kciuk w Górę",
        "gestureRecognition.thumb_down": "Kciuk w Dół",
        "gestureRecognition.rock": "ROCK",
        "gestureRecognition.namaste": "Namaste",
        "gestureRecognition.palm_up": "Dłoń w Górę",
        "gestureRecognition.fist": "Pięść",
        "gestureRecognition.index_finger_up": "Palec Wskaźnikowy w Górę",
        "gestureRecognition.double_finger_up": "Dwa Palce w Górę",
        "gestureRecognition.victory": "Zwycięstwo",
        "gestureRecognition.big_v": "Duże V",
        "gestureRecognition.phonecall": "Rozmowa Telefoniczna",
        "gestureRecognition.beg": "Prośba",
        "gestureRecognition.thanks": "Dziękuję"
    },
    "tr": {
        "gestureRecognition": "Jest Tanıma",
        "gestureRecognition.gesture.recognition": "Gest Tanıma",
        "gestureRecognition.init": "Gest Tanıma Sunucusunu Başlatma API Anahtarı [ONE] API Gizliliği [TWO]",
        "gestureRecognition.result": "Gest Tanıma Sonucu [ONE] Olasılığıyla",
        "gestureRecognition.heart_a": "Kalp A",
        "gestureRecognition.heart_b": "Kalp B",
        "gestureRecognition.heart_c": "Kalp C",
        "gestureRecognition.heart_d": "Kalp D",
        "gestureRecognition.OK": "OK",
        "gestureRecognition.hand_open": "Açık El",
        "gestureRecognition.thumb_up": "Başparmak Yukarı",
        "gestureRecognition.thumb_down": "Başparmak Aşağı",
        "gestureRecognition.rock": "ROCK",
        "gestureRecognition.namaste": "Namaste",
        "gestureRecognition.palm_up": "Avuç İçi Yukarı",
        "gestureRecognition.fist": "Yumruk",
        "gestureRecognition.index_finger_up": "İşaret Parmak Yukarı",
        "gestureRecognition.double_finger_up": "İki Parmak Yukarı",
        "gestureRecognition.victory": "Zafer",
        "gestureRecognition.big_v": "Büyük V",
        "gestureRecognition.phonecall": "Telefon Görüşmesi",
        "gestureRecognition.beg": "Rica",
        "gestureRecognition.thanks": "Teşekkürler"
    },
    "pt": {
        "gestureRecognition": "Reconhecimento de Gestos",
        "gestureRecognition.gesture.recognition": "Reconhecimento de gestos",
        "gestureRecognition.init": "Inicialização da API do servidor de reconhecimento de gestos - API Key[ONE]API Secret[TWO]",
        "gestureRecognition.result": "Resultado do reconhecimento de gestos com probabilidade de [ONE]",
        "gestureRecognition.heart_a": "Coração A",
        "gestureRecognition.heart_b": "Coração B",
        "gestureRecognition.heart_c": "Coração C",
        "gestureRecognition.heart_d": "Coração D",
        "gestureRecognition.OK": "ok",
        "gestureRecognition.hand_open": "Mão aberta",
        "gestureRecognition.thumb_up": "Aprovado",
        "gestureRecognition.thumb_down": "Reprovado",
        "gestureRecognition.rock": "Rock",
        "gestureRecognition.namaste": "Namaste",
        "gestureRecognition.palm_up": "Palma para cima",
        "gestureRecognition.fist": "Punho fechado",
        "gestureRecognition.index_finger_up": "Dedo indicador para cima",
        "gestureRecognition.double_finger_up": "Dois dedos para cima",
        "gestureRecognition.victory": "Vitória",
        "gestureRecognition.big_v": "Grande V",
        "gestureRecognition.phonecall": "Telefonema",
        "gestureRecognition.beg": "Fazer um reverência",
        "gestureRecognition.thanks": "Obrigado",
    },
    "hr": {
        "gestureRecognition": "Prepoznavanje pokreta",
        "gestureRecognition.gesture.recognition": "Prepoznavanje pokreta",
        "gestureRecognition.init": "Inicijalizacija API ključa za prepoznavanje pokreta[ONE]Tajni API kod[TWO]",
        "gestureRecognition.result": "Rezultat prepoznavanja pokreta za [ONE] je",
        "gestureRecognition.heart_a": "Srce A",
        "gestureRecognition.heart_b": "Srce B",
        "gestureRecognition.heart_c": "Srce C",
        "gestureRecognition.heart_d": "Srce D",
        "gestureRecognition.OK": "ok",
        "gestureRecognition.hand_open": "Otvorena ruka",
        "gestureRecognition.thumb_up": "Palec gore",
        "gestureRecognition.thumb_down": "Palec dolje",
        "gestureRecognition.rock": "Rock",
        "gestureRecognition.namaste": "Namaste",
        "gestureRecognition.palm_up": "Dlan gore",
        "gestureRecognition.fist": "Pest",
        "gestureRecognition.index_finger_up": "Pokazivač gore",
        "gestureRecognition.double_finger_up": "Dva prsta gore",
        "gestureRecognition.victory": "Pobjeda",
        "gestureRecognition.big_v": "Velika V",
        "gestureRecognition.phonecall": "Poziv",
        "gestureRecognition.beg": "Poklon",
        "gestureRecognition.thanks": "Hvala",
    },
    "ko": {
        "gestureRecognition": "제스처 인식",
        "gestureRecognition.gesture.recognition": "제스처 인식",
        "gestureRecognition.init": "제스처 인식 서버 API 키[ONE]API 비밀번호[TWO] 초기화",
        "gestureRecognition.result": "[ONE]의 인식 확률은",
        "gestureRecognition.heart_a": "심장 A",
        "gestureRecognition.heart_b": "심장 B",
        "gestureRecognition.heart_c": "심장 C",
        "gestureRecognition.heart_d": "심장 D",
        "gestureRecognition.OK": "ok",
        "gestureRecognition.hand_open": "손 열기",
        "gestureRecognition.thumb_up": "엄지 쳐오기",
        "gestureRecognition.thumb_down": "엄지 내리기",
        "gestureRecognition.rock": "ROCK",
        "gestureRecognition.namaste": "나마스테",
        "gestureRecognition.palm_up": "손바닥 위쪽",
        "gestureRecognition.fist": "拳",
        "gestureRecognition.index_finger_up": "첫손가락 위쪽",
        "gestureRecognition.double_finger_up": "두 손가락 위쪽",
        "gestureRecognition.victory": "승리",
        "gestureRecognition.big_v": "대 V",
        "gestureRecognition.phonecall": "전화 통화",
        "gestureRecognition.beg": "절",
        "gestureRecognition.thanks": "감사",
    },
    "th": {
        "gestureRecognition": "การระบุท่าทาง",
        "gestureRecognition.gesture.recognition": "การระบุท่าทาง",
        "gestureRecognition.init": "API Key[ONE]API Secret[TWO] - การเริ่มต้นเซิร์ฟเวอร์การระบุท่าทาง",
        "gestureRecognition.result": "ผลการระบุท่าทาง [ONE] ความน่าจะเป็น",
        "gestureRecognition.heart_a": "หัวใจ A",
        "gestureRecognition.heart_b": "หัวใจ B",
        "gestureRecognition.heart_c": "หัวใจ C",
        "gestureRecognition.heart_d": "หัวใจ D",
        "gestureRecognition.OK": "ok",
        "gestureRecognition.hand_open": "เปิดมือ",
        "gestureRecognition.thumb_up": "ข挑起大拇指",
        "gestureRecognition.thumb_down": "ฝอยลงหัวข挑起大拇指",
        "gestureRecognition.rock": "ROCK",
        "gestureRecognition.namaste": "Namaste",
        "gestureRecognition.palm_up": "ฝ�มือ",
        "gestureRecognition.fist": "ปugno",
        "gestureRecognition.index_finger_up": "นิ้วชี้ขึ้น",
        "gestureRecognition.double_finger_up": "สองนิ้วขึ้น",
        "gestureRecognition.victory": "ชัยชนะ",
        "gestureRecognition.big_v": "Vធំ",
        "gestureRecognition.phonecall": "โทรศัพท์",
        "gestureRecognition.beg": "អោន",
        "gestureRecognition.thanks": "ขອບคุณ",
    },
    "nl": {
        "gestureRecognition": "Gesteherkenning",
        "gestureRecognition.gesture.recognition": "Gestenherkenning",
        "gestureRecognition.init": "Initialisatie API-sleutel gestenherkenningsserver[ONE]API-geheim[TWO]",
        "gestureRecognition.result": "Resultaat van gestenherkenning met waarschijnlijkheid voor [ONE]",
        "gestureRecognition.heart_a": "Hart A",
        "gestureRecognition.heart_b": "Hart B",
        "gestureRecognition.heart_c": "Hart C",
        "gestureRecognition.heart_d": "Hart D",
        "gestureRecognition.OK": "ok",
        "gestureRecognition.hand_open": "Open hand",
        "gestureRecognition.thumb_up": "Duim omhoog",
        "gestureRecognition.thumb_down": "Duim omlaag",
        "gestureRecognition.rock": "Rock",
        "gestureRecognition.namaste": "Namaste",
        "gestureRecognition.palm_up": "Handpalm omhoog",
        "gestureRecognition.fist": "Vuist",
        "gestureRecognition.index_finger_up": "Vingerwijzer omhoog",
        "gestureRecognition.double_finger_up": "Twee vingers omhoog",
        "gestureRecognition.victory": "Victorie",
        "gestureRecognition.big_v": "Grote V",
        "gestureRecognition.phonecall": "Telefoongesprek",
        "gestureRecognition.beg": "Verbeuging",
        "gestureRecognition.thanks": "Dank u",
    },
    "ar": {
        "gestureRecognition": "تعرف على الإيماءات",
        "gestureRecognition.gesture.recognition": "تعرف على الإيماءات",
        "gestureRecognition.init": "API مفتاح[ONE]API السر[TWO] - بداية الخادم التعرف على الإيماءات",
        "gestureRecognition.result": "نتيجة التعرف على الإيماءة [ONE] احتمالية",
        "gestureRecognition.heart_a": "قلب A",
        "gestureRecognition.heart_b": "قلب B",
        "gestureRecognition.heart_c": "قلب C",
        "gestureRecognition.heart_d": "قلب D",
        "gestureRecognition.OK": "ok",
        "gestureRecognition.hand_open": "يد مفتوحة",
        "gestureRecognition.thumb_up": "إبهام مرفوع",
        "gestureRecognition.thumb_down": "إبهام مكفوف",
        "gestureRecognition.rock": "صخرة",
        "gestureRecognition.namaste": "نامستي",
        "gestureRecognition.palm_up": "مفاتيح يد مرتفوعة",
        "gestureRecognition.fist": "قبضة",
        "gestureRecognition.index_finger_up": "إبهام الإشارة مرفوع",
        "gestureRecognition.double_finger_up": "إبهامين مرفوعين",
        "gestureRecognition.victory": "النصر",
        "gestureRecognition.big_v": "V كبير",
        "gestureRecognition.phonecall": "مكالمة هاتفية",
        "gestureRecognition.beg": "التوسل",
        "gestureRecognition.thanks": "شكرا",
    },
}

const interfaceData = {
    "zh-cn": {
        "gui.extension.gestureRecognition": "手势识别",
        "gui.extension.gestureRecognition.description": "通过网络摄像头识别手势"
    },
    "zh-tw": {
        "gui.extension.gestureRecognition": "手勢識別",
        "gui.extension.gestureRecognition.description": "透過網路攝像頭識別手勢"
    },
    "en": {
        "gui.extension.gestureRecognition": "Gesture Recognition",
        "gui.extension.gestureRecognition.description": "Recognize gestures through a webcam"
    },
    "fr": {
        "gui.extension.gestureRecognition": "Reconnaissance de gestes",
        "gui.extension.gestureRecognition.description": "Reconnaître les gestes par une webcam"
    },
    "ja": {
        "gui.extension.gestureRecognition": "ジェスチャー認識",
        "gui.extension.gestureRecognition.description": "ウェブカメラを通じてジェスチャーを認識"
    },
    "de": {
        "gui.extension.gestureRecognition": "Gestenerkennung",
        "gui.extension.gestureRecognition.description": "Erkenne Gesten über eine Webcam"
    },
    "es": {
        "gui.extension.gestureRecognition": "Reconocimiento de gestos",
        "gui.extension.gestureRecognition.description": "Reconocer gestos mediante una cámara web"
    },
    "ru": {
        "gui.extension.gestureRecognition": "Распознавание жестов",
        "gui.extension.gestureRecognition.description": "Распознавание жестов через веб-камеру"
    },
    "cs": {
        "gui.extension.gestureRecognition": "Rozpoznávání gest",
        "gui.extension.gestureRecognition.description": "Rozpoznávání gest pomocí webkamery"
    },
    "it": {
        "gui.extension.gestureRecognition": "Riconoscimento dei gesti",
        "gui.extension.gestureRecognition.description": "Riconoscere i gesti attraverso una webcam"
    },
    "pl": {
        "gui.extension.gestureRecognition": "Rozpoznawanie gestów",
        "gui.extension.gestureRecognition.description": "Rozpoznawanie gestów za pomocą kamery internetowej"
    },
    "tr": {
        "gui.extension.gestureRecognition": "Jest Tanıma",
        "gui.extension.gestureRecognition.description": "Web kamerası üzerinden jest tanıma"
    },
    "pt": {
        "gui.extension.gestureRecognition": "Reconhecimento de Gestos",
        "gui.extension.gestureRecognition.description": "Reconhecer gestos através de uma webcam"
    },
    "hr": {
        "gui.extension.gestureRecognition": "Prepoznavanje pokreta",
        "gui.extension.gestureRecognition.description": "Prepoznavanje pokreta putem web kamere"
    },
    "ko": {
        "gui.extension.gestureRecognition": "제스처 인식",
        "gui.extension.gestureRecognition.description": "웹캠을 통해 제스처를 인식"
    },
    "th": {
        "gui.extension.gestureRecognition": "การระบุท่าทาง",
        "gui.extension.gestureRecognition.description": "ระบุท່າทางผ่านเว็บแคม"
    },
    "nl": {
        "gui.extension.gestureRecognition": "Gesteherkenning",
        "gui.extension.gestureRecognition.description": "Gesten herkennen via een webcam"
    },
    "ar": {
        "gui.extension.gestureRecognition": "تعرف على الإيماءات",
        "gui.extension.gestureRecognition.description": "تعرف على الإيماءات باستخدام كاميرا الويب"
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

