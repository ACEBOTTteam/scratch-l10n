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

const extensions = {}

const interfaceData = {
  "zh-cn": {
    "gui.modify.oneClickExport": "导出串口信息",
    "gui.modify.noSerialData": "没有串口信息"
  },
  "zh-tw": {
    "gui.modify.oneClickExport": "匯出序列埠資訊",
    "gui.modify.noSerialData": "沒有序列埠資訊"
  },
  "en": {
    "gui.modify.oneClickExport": "export serial port information",
    "gui.modify.noSerialData": "no serial port information"
  },
  "fr": {
    "gui.modify.oneClickExport": "exporter les informations du port série",
    "gui.modify.noSerialData": "aucune information de port série"
  },
  "ja": {
    "gui.modify.oneClickExport": "シリアルポート情報をエクスポート",
    "gui.modify.noSerialData": "シリアルポート情報がありません"
  },
  "de": {
    "gui.modify.oneClickExport": "serielle portinformationen exportieren",
    "gui.modify.noSerialData": "keine seriellen portinformationen"
  },
  "es": {
    "gui.modify.oneClickExport": "exportar información del puerto serie",
    "gui.modify.noSerialData": "no hay información del puerto serie"
  },
  "ru": {
    "gui.modify.oneClickExport": "экспорт информации последовательного порта",
    "gui.modify.noSerialData": "нет информации последовательного порта"
  },
  "cs": {
    "gui.modify.oneClickExport": "exportovat informace sériového portu",
    "gui.modify.noSerialData": "žádné informace o sériovém portu"
  },
  "it": {
    "gui.modify.oneClickExport": "esporta informazioni della porta seriale",
    "gui.modify.noSerialData": "nessuna informazione sulla porta seriale"
  },
  "pl": {
    "gui.modify.oneClickExport": "eksportuj informacje portu szeregowego",
    "gui.modify.noSerialData": "brak informacji o porcie szeregowym"
  },
  "tr": {
    "gui.modify.oneClickExport": "seri port bilgilerini dışa aktar",
    "gui.modify.noSerialData": "seri port bilgisi yok"
  },
  "pt": {
    "gui.modify.oneClickExport": "exportar informações da porta serial",
    "gui.modify.noSerialData": "nenhuma informação da porta serial"
  },
  "hr": {
    "gui.modify.oneClickExport": "izvezi informacije serijskog porta",
    "gui.modify.noSerialData": "nema informacija o serijskom portu"
  },
  "hi": {
    "gui.modify.oneClickExport": "सीरियल पोर्ट जानकारी निर्यात करें",
    "gui.modify.noSerialData": "कोई सीरियल पोर्ट जानकारी नहीं"
  },
  "ko": {
    "gui.modify.oneClickExport": "시리얼 포트 정보 내보내기",
    "gui.modify.noSerialData": "시리얼 포트 정보 없음"
  },
  "th": {
    "gui.modify.oneClickExport": "ส่งออกข้อมูลพอร์ตอนุกรม",
    "gui.modify.noSerialData": "ไม่มีข้อมูลพอร์ตอนุกรม"
  },
  "nl": {
    "gui.modify.oneClickExport": "seriële poortinformatie exporteren",
    "gui.modify.noSerialData": "geen seriële poortinformatie"
  },
  "ar": {
    "gui.modify.oneClickExport": "تصدير معلومات المنفذ التسلسلي",
    "gui.modify.noSerialData": "لا توجد معلومات عن المنفذ التسلسلي"
  },
  "vi": {
    "gui.modify.oneClickExport": "xuất thông tin cổng nối tiếp",
    "gui.modify.noSerialData": "không có thông tin cổng nối tiếp"
  },
  "he": {
    "gui.modify.oneClickExport": "ייצוא מידע יציאה טורית",
    "gui.modify.noSerialData": "אין מידע על יציאה טורית"
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

