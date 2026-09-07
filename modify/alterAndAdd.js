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
    "CATEGORY_ROBOTS_R4_LatticeScreen": "点阵屏",
    "CATEGORY_ROBOTS_R4_Buzzer": "无源蜂鸣器",
    "CATEGORY_ROBOTS_R4_7segmentDigitalTube": "7段数码管",
    "CATEGORY_ROBOTS_R4_4digit7SegmentDigitalTube": "4位7段数码管",
  },

  "zh-cn": {
    "CATEGORY_ROBOTS_R4_LatticeScreen": "点阵屏",
    "CATEGORY_ROBOTS_R4_Buzzer": "无源蜂鸣器",
    "CATEGORY_ROBOTS_R4_7segmentDigitalTube": "7段数码管",
    "CATEGORY_ROBOTS_R4_4digit7SegmentDigitalTube": "4位7段数码管"
  },
  "zh-tw": {
    "CATEGORY_ROBOTS_R4_LatticeScreen": "點陣屏",
    "CATEGORY_ROBOTS_R4_Buzzer": "無源蜂鳴器",
    "CATEGORY_ROBOTS_R4_7segmentDigitalTube": "7段數碼管",
    "CATEGORY_ROBOTS_R4_4digit7SegmentDigitalTube": "4位7段數碼管"
  },
  "en": {
    "CATEGORY_ROBOTS_R4_LatticeScreen": "dot matrix screen",
    "CATEGORY_ROBOTS_R4_Buzzer": "passive buzzer",
    "CATEGORY_ROBOTS_R4_7segmentDigitalTube": "7-segment digital tube",
    "CATEGORY_ROBOTS_R4_4digit7SegmentDigitalTube": "4-digit 7-segment digital tube"
  },
  "fr": {
    "CATEGORY_ROBOTS_R4_LatticeScreen": "écran à matrice de points",
    "CATEGORY_ROBOTS_R4_Buzzer": "buzzer passif",
    "CATEGORY_ROBOTS_R4_7segmentDigitalTube": "tube numérique 7 segments",
    "CATEGORY_ROBOTS_R4_4digit7SegmentDigitalTube": "tube numérique 7 segments 4 chiffres"
  },
  "ja": {
    "CATEGORY_ROBOTS_R4_LatticeScreen": "ドットマトリックス画面",
    "CATEGORY_ROBOTS_R4_Buzzer": "パッシブブザー",
    "CATEGORY_ROBOTS_R4_7segmentDigitalTube": "7セグメントデジタルチューブ",
    "CATEGORY_ROBOTS_R4_4digit7SegmentDigitalTube": "4桁7セグメントデジタルチューブ"
  },
  "de": {
    "CATEGORY_ROBOTS_R4_LatticeScreen": "Punktmatrix-Bildschirm",
    "CATEGORY_ROBOTS_R4_Buzzer": "passiver Summer",
    "CATEGORY_ROBOTS_R4_7segmentDigitalTube": "7-Segment-Digitalanzeige",
    "CATEGORY_ROBOTS_R4_4digit7SegmentDigitalTube": "4-stellige 7-Segment-Digitalanzeige"
  },
  "es": {
    "CATEGORY_ROBOTS_R4_LatticeScreen": "pantalla de matriz de puntos",
    "CATEGORY_ROBOTS_R4_Buzzer": "zumbador pasivo",
    "CATEGORY_ROBOTS_R4_7segmentDigitalTube": "tubo digital de 7 segmentos",
    "CATEGORY_ROBOTS_R4_4digit7SegmentDigitalTube": "tubo digital de 7 segmentos de 4 dígitos"
  },
  "ru": {
    "CATEGORY_ROBOTS_R4_LatticeScreen": "матричный экран",
    "CATEGORY_ROBOTS_R4_Buzzer": "пассивный зуммер",
    "CATEGORY_ROBOTS_R4_7segmentDigitalTube": "7-сегментный цифровой индикатор",
    "CATEGORY_ROBOTS_R4_4digit7SegmentDigitalTube": "4-разрядный 7-сегментный цифровой индикатор"
  },
  "cs": {
    "CATEGORY_ROBOTS_R4_LatticeScreen": "matricový displej",
    "CATEGORY_ROBOTS_R4_Buzzer": "pasivní bzučák",
    "CATEGORY_ROBOTS_R4_7segmentDigitalTube": "7-segmentový displej",
    "CATEGORY_ROBOTS_R4_4digit7SegmentDigitalTube": "4místný 7-segmentový displej"
  },
  "it": {
    "CATEGORY_ROBOTS_R4_LatticeScreen": "display a matrice di punti",
    "CATEGORY_ROBOTS_R4_Buzzer": "cicalino passivo",
    "CATEGORY_ROBOTS_R4_7segmentDigitalTube": "display a 7 segmenti",
    "CATEGORY_ROBOTS_R4_4digit7SegmentDigitalTube": "display a 7 segmenti a 4 cifre"
  },
  "pl": {
    "CATEGORY_ROBOTS_R4_LatticeScreen": "wyświetlacz matrycowy",
    "CATEGORY_ROBOTS_R4_Buzzer": "brzęczyk pasywny",
    "CATEGORY_ROBOTS_R4_7segmentDigitalTube": "wyświetlacz 7-segmentowy",
    "CATEGORY_ROBOTS_R4_4digit7SegmentDigitalTube": "4-cyfrowy wyświetlacz 7-segmentowy"
  },
  "tr": {
    "CATEGORY_ROBOTS_R4_LatticeScreen": "nokta matris ekran",
    "CATEGORY_ROBOTS_R4_Buzzer": "pasif buzzer",
    "CATEGORY_ROBOTS_R4_7segmentDigitalTube": "7 segment dijital tüp",
    "CATEGORY_ROBOTS_R4_4digit7SegmentDigitalTube": "4 haneli 7 segment dijital tüp"
  },
  "pt": {
    "CATEGORY_ROBOTS_R4_LatticeScreen": "display de matriz de pontos",
    "CATEGORY_ROBOTS_R4_Buzzer": "buzzer passivo",
    "CATEGORY_ROBOTS_R4_7segmentDigitalTube": "tubo digital de 7 segmentos",
    "CATEGORY_ROBOTS_R4_4digit7SegmentDigitalTube": "tubo digital de 7 segmentos de 4 dígitos"
  },
  "hr": {
    "CATEGORY_ROBOTS_R4_LatticeScreen": "matrični zaslon",
    "CATEGORY_ROBOTS_R4_Buzzer": "pasivni zujalica",
    "CATEGORY_ROBOTS_R4_7segmentDigitalTube": "7-segmentni digitalni zaslon",
    "CATEGORY_ROBOTS_R4_4digit7SegmentDigitalTube": "4-znamenkasti 7-segmentni digitalni zaslon"
  },
  "hi": {
    "CATEGORY_ROBOTS_R4_LatticeScreen": "डॉट मैट्रिक्स स्क्रीन",
    "CATEGORY_ROBOTS_R4_Buzzer": "निष्क्रिय बज़र",
    "CATEGORY_ROBOTS_R4_7segmentDigitalTube": "7-सेगमेंट डिजिटल ट्यूब",
    "CATEGORY_ROBOTS_R4_4digit7SegmentDigitalTube": "4-अंकीय 7-सेगमेंट डिजिटल ट्यूब"
  },
  "ko": {
    "CATEGORY_ROBOTS_R4_LatticeScreen": "도트 매트릭스 화면",
    "CATEGORY_ROBOTS_R4_Buzzer": "수동 부저",
    "CATEGORY_ROBOTS_R4_7segmentDigitalTube": "7세그먼트 디지털 튜브",
    "CATEGORY_ROBOTS_R4_4digit7SegmentDigitalTube": "4자리 7세그먼트 디지털 튜브"
  },
  "th": {
    "CATEGORY_ROBOTS_R4_LatticeScreen": "หน้าจอดอตแมทริกซ์",
    "CATEGORY_ROBOTS_R4_Buzzer": "บัซเซอร์แบบพาสซีฟ",
    "CATEGORY_ROBOTS_R4_7segmentDigitalTube": "หลอดดิจิทัล 7 ส่วน",
    "CATEGORY_ROBOTS_R4_4digit7SegmentDigitalTube": "หลอดดิจิทัล 7 ส่วน 4 หลัก"
  },
  "nl": {
    "CATEGORY_ROBOTS_R4_LatticeScreen": "puntmatrixscherm",
    "CATEGORY_ROBOTS_R4_Buzzer": "passieve zoemer",
    "CATEGORY_ROBOTS_R4_7segmentDigitalTube": "7-segments display",
    "CATEGORY_ROBOTS_R4_4digit7SegmentDigitalTube": "4-cijferig 7-segments display"
  },
  "ar": {
    "CATEGORY_ROBOTS_R4_LatticeScreen": "شاشة المصفوفة النقطية",
    "CATEGORY_ROBOTS_R4_Buzzer": "الجرس السلبي",
    "CATEGORY_ROBOTS_R4_7segmentDigitalTube": "شاشة 7 أجزاء رقمية",
    "CATEGORY_ROBOTS_R4_4digit7SegmentDigitalTube": "شاشة 7 أجزاء رقمية 4 أرقام"
  },
  "vi": {
    "CATEGORY_ROBOTS_R4_LatticeScreen": "màn hình ma trận điểm",
    "CATEGORY_ROBOTS_R4_Buzzer": "còi báo động thụ động",
    "CATEGORY_ROBOTS_R4_7segmentDigitalTube": "màn hình 7 đoạn",
    "CATEGORY_ROBOTS_R4_4digit7SegmentDigitalTube": "màn hình 7 đoạn 4 chữ số"
  },
  "he": {
    "CATEGORY_ROBOTS_R4_LatticeScreen": "מסך מטריצת נקודות",
    "CATEGORY_ROBOTS_R4_Buzzer": "זמזם פסיבי",
    "CATEGORY_ROBOTS_R4_7segmentDigitalTube": "תצוגת 7 מקטעים דיגיטלית",
    "CATEGORY_ROBOTS_R4_4digit7SegmentDigitalTube": "תצוגת 7 מקטעים דיגיטלית 4 ספרות"
  }

}

const extensions = {}

const interfaceData = {
  "zh-cn": {
    "gui.AIModel.color.blue": "蓝色"
  },
  "zh-tw": {
    "gui.AIModel.color.blue": "藍色"
  },
  "en": {
    "gui.AIModel.color.blue": "blue"
  },
  "fr": {
    "gui.AIModel.color.blue": "bleu"
  },
  "ja": {
    "gui.AIModel.color.blue": "青"
  },
  "de": {
    "gui.AIModel.color.blue": "blau"
  },
  "es": {
    "gui.AIModel.color.blue": "azul"
  },
  "ru": {
    "gui.AIModel.color.blue": "синий"
  },
  "cs": {
    "gui.AIModel.color.blue": "modrá"
  },
  "it": {
    "gui.AIModel.color.blue": "blu"
  },
  "pl": {
    "gui.AIModel.color.blue": "niebieski"
  },
  "tr": {
    "gui.AIModel.color.blue": "mavi"
  },
  "pt": {
    "gui.AIModel.color.blue": "azul"
  },
  "hr": {
    "gui.AIModel.color.blue": "plava"
  },
  "hi": {
    "gui.AIModel.color.blue": "नीला"
  },
  "ko": {
    "gui.AIModel.color.blue": "파란색"
  },
  "th": {
    "gui.AIModel.color.blue": "สีน้ำเงิน"
  },
  "nl": {
    "gui.AIModel.color.blue": "blauw"
  },
  "ar": {
    "gui.AIModel.color.blue": "أزرق"
  },
  "vi": {
    "gui.AIModel.color.blue": "xanh dương"
  },
  "he": {
    "gui.AIModel.color.blue": "כחול"
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

