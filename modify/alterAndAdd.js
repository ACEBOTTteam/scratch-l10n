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
    "ROBOT_ESPNOW_INIT_MAC": "ESP NOW初始化MAC地址%1",
    "ROBOT_ESPNOW_SEND": "ESP NOW发送字符串数据%1",
    "ROBOT_ESPNOW_DATA_CALLBACK": "ESP NOW接收到字符串数据",
    "ROBOT_ESPNOW_GET_DATA": "ESP NOW接收到的字符串数据",
    "ROBOT_ESPNOW_GET_MAC": "MAC地址",
  },
  "zh-cn": {
    "ROBOT_ESPNOW_INIT_MAC": "ESP NOW初始化mac地址%1",
    "ROBOT_ESPNOW_SEND": "ESP NOW发送字符串数据%1",
    "ROBOT_ESPNOW_DATA_CALLBACK": "ESP NOW接收到字符串数据",
    "ROBOT_ESPNOW_GET_DATA": "ESP NOW接收到的字符串数据",
    "ROBOT_ESPNOW_GET_MAC": "mac地址"
  },
  "zh-tw": {
    "ROBOT_ESPNOW_INIT_MAC": "ESP NOW初始化mac地址%1",
    "ROBOT_ESPNOW_SEND": "ESP NOW發送字串數據%1",
    "ROBOT_ESPNOW_DATA_CALLBACK": "ESP NOW接收到字串數據",
    "ROBOT_ESPNOW_GET_DATA": "ESP NOW接收到的字串數據",
    "ROBOT_ESPNOW_GET_MAC": "mac地址"
  },
  "en": {
    "ROBOT_ESPNOW_INIT_MAC": "ESP NOW initialize mac address %1",
    "ROBOT_ESPNOW_SEND": "ESP NOW send string data %1",
    "ROBOT_ESPNOW_DATA_CALLBACK": "ESP NOW received string data",
    "ROBOT_ESPNOW_GET_DATA": "ESP NOW received string data",
    "ROBOT_ESPNOW_GET_MAC": "mac address"
  },
  "fr": {
    "ROBOT_ESPNOW_INIT_MAC": "ESP NOW initialiser l'adresse mac %1",
    "ROBOT_ESPNOW_SEND": "ESP NOW envoyer des données de chaîne %1",
    "ROBOT_ESPNOW_DATA_CALLBACK": "ESP NOW données de chaîne reçues",
    "ROBOT_ESPNOW_GET_DATA": "ESP NOW données de chaîne reçues",
    "ROBOT_ESPNOW_GET_MAC": "adresse mac"
  },
  "ja": {
    "ROBOT_ESPNOW_INIT_MAC": "ESP NOW macアドレス%1を初期化",
    "ROBOT_ESPNOW_SEND": "ESP NOW 文字列データ%1を送信",
    "ROBOT_ESPNOW_DATA_CALLBACK": "ESP NOW 文字列データを受信",
    "ROBOT_ESPNOW_GET_DATA": "ESP NOW 受信した文字列データ",
    "ROBOT_ESPNOW_GET_MAC": "macアドレス"
  },
  "de": {
    "ROBOT_ESPNOW_INIT_MAC": "ESP NOW mac-adresse %1 initialisieren",
    "ROBOT_ESPNOW_SEND": "ESP NOW zeichenkettendaten %1 senden",
    "ROBOT_ESPNOW_DATA_CALLBACK": "ESP NOW zeichenkettendaten empfangen",
    "ROBOT_ESPNOW_GET_DATA": "ESP NOW empfangene zeichenkettendaten",
    "ROBOT_ESPNOW_GET_MAC": "mac-adresse"
  },
  "es": {
    "ROBOT_ESPNOW_INIT_MAC": "ESP NOW inicializar dirección mac %1",
    "ROBOT_ESPNOW_SEND": "ESP NOW enviar datos de cadena %1",
    "ROBOT_ESPNOW_DATA_CALLBACK": "ESP NOW datos de cadena recibidos",
    "ROBOT_ESPNOW_GET_DATA": "ESP NOW datos de cadena recibidos",
    "ROBOT_ESPNOW_GET_MAC": "dirección mac"
  },
  "ru": {
    "ROBOT_ESPNOW_INIT_MAC": "ESP NOW инициализировать mac-адрес %1",
    "ROBOT_ESPNOW_SEND": "ESP NOW отправить строковые данные %1",
    "ROBOT_ESPNOW_DATA_CALLBACK": "ESP NOW получены строковые данные",
    "ROBOT_ESPNOW_GET_DATA": "ESP NOW полученные строковые данные",
    "ROBOT_ESPNOW_GET_MAC": "mac-адрес"
  },
  "cs": {
    "ROBOT_ESPNOW_INIT_MAC": "ESP NOW inicializovat mac adresu %1",
    "ROBOT_ESPNOW_SEND": "ESP NOW odeslat řetězcová data %1",
    "ROBOT_ESPNOW_DATA_CALLBACK": "ESP NOW přijata řetězcová data",
    "ROBOT_ESPNOW_GET_DATA": "ESP NOW přijatá řetězcová data",
    "ROBOT_ESPNOW_GET_MAC": "mac adresa"
  },
  "it": {
    "ROBOT_ESPNOW_INIT_MAC": "ESP NOW inizializza indirizzo mac %1",
    "ROBOT_ESPNOW_SEND": "ESP NOW invia dati stringa %1",
    "ROBOT_ESPNOW_DATA_CALLBACK": "ESP NOW dati stringa ricevuti",
    "ROBOT_ESPNOW_GET_DATA": "ESP NOW dati stringa ricevuti",
    "ROBOT_ESPNOW_GET_MAC": "indirizzo mac"
  },
  "pl": {
    "ROBOT_ESPNOW_INIT_MAC": "ESP NOW zainicjuj adres mac %1",
    "ROBOT_ESPNOW_SEND": "ESP NOW wyślij dane tekstowe %1",
    "ROBOT_ESPNOW_DATA_CALLBACK": "ESP NOW odebrano dane tekstowe",
    "ROBOT_ESPNOW_GET_DATA": "ESP NOW odebrane dane tekstowe",
    "ROBOT_ESPNOW_GET_MAC": "adres mac"
  },
  "tr": {
    "ROBOT_ESPNOW_INIT_MAC": "ESP NOW mac adresini başlat %1",
    "ROBOT_ESPNOW_SEND": "ESP NOW dize verisini gönder %1",
    "ROBOT_ESPNOW_DATA_CALLBACK": "ESP NOW dize verisi alındı",
    "ROBOT_ESPNOW_GET_DATA": "ESP NOW alınan dize verisi",
    "ROBOT_ESPNOW_GET_MAC": "mac adresi"
  },
  "pt": {
    "ROBOT_ESPNOW_INIT_MAC": "ESP NOW inicializar endereço mac %1",
    "ROBOT_ESPNOW_SEND": "ESP NOW enviar dados de string %1",
    "ROBOT_ESPNOW_DATA_CALLBACK": "ESP NOW dados de string recebidos",
    "ROBOT_ESPNOW_GET_DATA": "ESP NOW dados de string recebidos",
    "ROBOT_ESPNOW_GET_MAC": "endereço mac"
  },
  "hr": {
    "ROBOT_ESPNOW_INIT_MAC": "ESP NOW inicijalizirati mac adresu %1",
    "ROBOT_ESPNOW_SEND": "ESP NOW pošalji podatke niza %1",
    "ROBOT_ESPNOW_DATA_CALLBACK": "ESP NOW primljeni podaci niza",
    "ROBOT_ESPNOW_GET_DATA": "ESP NOW primljeni podaci niza",
    "ROBOT_ESPNOW_GET_MAC": "mac adresa"
  },
  "hi": {
    "ROBOT_ESPNOW_INIT_MAC": "ESP NOW मैक पता प्रारंभ करें %1",
    "ROBOT_ESPNOW_SEND": "ESP NOW स्ट्रिंग डेटा भेजें %1",
    "ROBOT_ESPNOW_DATA_CALLBACK": "ESP NOW स्ट्रिंग डेटा प्राप्त हुआ",
    "ROBOT_ESPNOW_GET_DATA": "ESP NOW प्राप्त स्ट्रिंग डेटा",
    "ROBOT_ESPNOW_GET_MAC": "मैक पता"
  },
  "ko": {
    "ROBOT_ESPNOW_INIT_MAC": "ESP NOW mac 주소 초기화 %1",
    "ROBOT_ESPNOW_SEND": "ESP NOW 문자열 데이터 전송 %1",
    "ROBOT_ESPNOW_DATA_CALLBACK": "ESP NOW 문자열 데이터 수신",
    "ROBOT_ESPNOW_GET_DATA": "ESP NOW 수신된 문자열 데이터",
    "ROBOT_ESPNOW_GET_MAC": "mac 주소"
  },
  "th": {
    "ROBOT_ESPNOW_INIT_MAC": "ESP NOW เริ่มต้นที่อยู่ mac %1",
    "ROBOT_ESPNOW_SEND": "ESP NOW ส่งข้อมูลสตริง %1",
    "ROBOT_ESPNOW_DATA_CALLBACK": "ESP NOW ได้รับข้อมูลสตริง",
    "ROBOT_ESPNOW_GET_DATA": "ESP NOW ข้อมูลสตริงที่ได้รับ",
    "ROBOT_ESPNOW_GET_MAC": "ที่อยู่ mac"
  },
  "nl": {
    "ROBOT_ESPNOW_INIT_MAC": "ESP NOW mac-adres initialiseren %1",
    "ROBOT_ESPNOW_SEND": "ESP NOW tekenreeksgegevens verzenden %1",
    "ROBOT_ESPNOW_DATA_CALLBACK": "ESP NOW tekenreeksgegevens ontvangen",
    "ROBOT_ESPNOW_GET_DATA": "ESP NOW ontvangen tekenreeksgegevens",
    "ROBOT_ESPNOW_GET_MAC": "mac-adres"
  },
  "ar": {
    "ROBOT_ESPNOW_INIT_MAC": "ESP NOW تهيئة عنوان mac %1",
    "ROBOT_ESPNOW_SEND": "ESP NOW إرسال بيانات السلسلة %1",
    "ROBOT_ESPNOW_DATA_CALLBACK": "ESP NOW تم استلام بيانات السلسلة",
    "ROBOT_ESPNOW_GET_DATA": "ESP NOW البيانات المستلمة للسلسلة",
    "ROBOT_ESPNOW_GET_MAC": "عنوان mac"
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

