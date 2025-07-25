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

  },
  "he": {
    "CATEGORY_ROBOTS": "רובוטים",
    "ROBOT_LED": "LED חד-צבעוני%1%2",
    "ROBOT_ON": "הפעל",
    "ROBOT_OFF": "כבה",
    "ROBOT_LED_LUMINANCE": "LED חד-צבעוני%1 הגדר בהירות %2",
    "EVENT_WHENARDUINOBEGIN": "הפעל תוכנית",
    "ROBOT_IR_RECEIVER_MODULE": "מודול מקלט IR %1 קיבל %2 נלחץ",
    "ROBOT_ULTRASONIC_SENSOR": "חיישן אולטרסוני (ס\"מ) טריג פין %1 אקו פין %2",
    "ROBOT_HUMIDITY_TEMPERATURE": "טמפרטורה ולחות %1 ערך %2",
    "ROBOT_TEMPERATURE": "טמפרטורה",
    "ROBOT_HUMIDITY": "לחות",
    "ROBOT_DC_MOTOR": "מנוע DC 130 IN-%1 IN+%2 מהירות %3",
    "ROBOT_BUTTON_MODULE": "כפתור %1 נלחץ",
    "ROBOT_PHOTORESISTOR_SENSOR": "חיישן אור %1",
    "ROBOT_SOUND_SENSOR": "חיישן קול %1",
    "ROBOT_PIR_MOTION_SENSOR": "חיישן תנועה PIR %1",
    "ROBOT_MOISTURE_SENSOR": "חיישן לחות קרקע %1",
    "ROBOT_RAINDROP_SENSOR": "חיישן טיפות גשם %1",
    "ROBOT_SG90_MODULE": "סרוו %1 הגדר זווית %2",
    "ROBOT_LASER_MODULE": "לייזר %1%2",
    "ROBOT_P_BUZZER": "בוזר פין %1 תדר %2 משך %3 פעימות",
    "ROBOT_HALF": "חצי",
    "ROBOT_QUARTER": "רבע",
    "ROBOT_ONE_EIGHTH": "שמונה",
    "ROBOT_WHOLE_BEAT": "שלם",
    "ROBOT_DOUBLE_BEAT": "כפול",
    "ROBOT_MQ4_GAS_SENSOR": "חיישן גז MQ-4 %1",
    "ROBOT_TRACE_SENSOR_SET": "הגדר חיישן קו פינים (R:%1,M:%2,L:%3)",
    "ROBOT_TRACE_SENSOR_GET": "קבלת ערך של שלושה חיישני קו %1",
    "ROBOT_POTENTIOMETER": "פוטנציומטר %1",
    "ROBOT_TOUCH_SENSOR": "חיישן מגע %1 נגע",
    "ROBOT_FLAME_SENSOR": "חיישן להבה %1",
    "ROBOT_RGB_MODULE": "נורת RGB אדום %1%2 ירוק %3%4 כחול %5%6",
    "ROBOT_SET_TAPE_LIGHTS": "רצועת תאורה %1%2%3",
    "ROBOT_TAPE_LIGHTS": "רצועת תאורה %1%2 אדום %3 ירוק %4 כחול %5",
    "ROBOT_HUMIDIFIER": "מכשיר אדים %1%2",
    "ROBOT_WATER_SENSOR": "חיישן רמת מים %1",
    "ROBOT_DIGIT_TUBE_DISPLAY_NUMBER": "תצוגת מספר ב-4 ספרות %1",
    "ROBOT_DIGIT_TUBE_DISPLAY_STRING": "תצוגת מחרוזת ב-4 ספרות %1",
    "ROBOT_DIGIT_TUBE_DISPLAY_NUMBER_PIN": "תצוגת מספר ב-4 ספרות CLK %1 DIO %2 %3",
    "ROBOT_DIGIT_TUBE_DISPLAY_STRING_PIN": "תצוגת מחרוזת ב-4 ספרות CLK %1 DIO %2 %3",
    "ROBOT_COLOR_SENSOR_LIGHT": "חיישן צבע %1 אור %2",
    "ROBOT_COLOR_SENSOR_COLORS": "חיישן צבע %1",
    "ROBOT_BEIGHTNESS": "בהירות",
    "ROBOT_RED": "אדום",
    "ROBOT_GREEN": "ירוק",
    "ROBOT_BLUE": "כחול",
    "ROBOT_RFID": "קריאת ID RFID",
    "ROBOT_LCD_STRING": "LCD x%1 y%2 הצג תווים %3",
    "ROBOT_LCD_NUMBER": "LCD x%1 y%2 הצג מספר %3",
    "ROBOT_LCD_CLEAR": "נקה מסך LCD",
    "ROBOT_LCD_MODEL": "מצב גלילה LCD %1%2 גלילה הצג תווים %3 כל %4 שניות",
    "ROBOT_FIRST_ROW": "שורה ראשונה",
    "ROBOT_SENCOND_ROW": "שורה שנייה",
    "ROBOT_ALEFT": "שמאלה",
    "ROBOT_RIGHT": "ימינה",
    "ROBOT_LCD_FLASH": "מצב הבהוב LCD %1",
    "ROBOT_ON_THE_BACKLIGHT": "הפעל תאורת רקע",
    "ROBOT_OFF_THE_BACKLIGHT": "כבה תאורת רקע",
    "ROBOT_BLDC": "מנוע BLDC %1 מהירות %2",
    "ROBOT_MP3": "MP3 RX%1 TX%2 %3",
    "ROBOT_PLAY": "להמשיך להפעיל",
    "ROBOT_PAUSE": "להשהות הפעלה",
    "ROBOT_PREVIOUS": "השיר הקודם",
    "ROBOT_NEXT": "השיר הבא",
    "ROBOT_MP3_MODULE_PLAY": "MP3 RX%1TX%2 לנגן את השיר ה%3",
    "ROBOT_MP3_MODULE_VOLUME": "MP3 RX%1TX%2 להגדיר עוצמת קול %3",
    "ROBOT_MP3_MODULE_PLAY_OVER": "MP3 RX%1TX%2 האם ההפעלה נעצרה",
    "ROBOT_VOICE_RECOGNITION": "מודול זיהוי קול RX%1TX%2 לקבל את ערך הפקודה",
    "ROBOT_OPEN_THE_DOOR": "לפתוח את הדלת",
    "ROBOT_CLOSE_THE_DOOR": "לסגור את הדלת",
    "ROBOT_OPEN_THE_WINDOW": "לפתוח את החלון",
    "ROBOT_CLOSE_THE_WINDOW": "לסגור את החלון",
    "ROBOT_OPEN_THE_BEE": "להפעיל את דבורה קטנה",
    "ROBOT_CLOSE_THE_BEE": "להפסיק את דבורה קטנה",
    "ROBOT_OPEN_THE_LIGHT": "להדליק את נורת LED",
    "ROBOT_CLOSE_THE_LIGHT": "לכבות את נורת LED",
    "ROBOT_OPEN_THE_LASER": "להדליק את לייזר",
    "ROBOT_CLOSE_THE_LASER": "לכבות את לייזר",
    "ROBOT_OPEN_THE_COLOR_LIGHT": "לפתוח את צבע ברירת המחדל של האבדון",
    "ROBOT_CLOSE_THE_COLOR_LIGHT": "לכבות את צבע ברירת המחדל של האבדון",
    "ROBOT_RELAY_MODULE": "ממסר %1%2",
    "ROBOT_OLED_SET": "OLED להגדיר גודל פונטים %1",
    "ROBOT_OLED_STRING": "OLED להגדיר x%1y%2 תו %3",
    "ROBOT_OLED_NUMBER": "OLED להגדיר x%1y%2 מספר %3",
    "ROBOT_OLED_CLEAR": "OLED לנקות מטמון",
    "ROBOT_PRINT": "פורט סידורי %1 הדפס %2",
    "ROBOT_WIFI_AP": "להפעיל מצב AP שם %1 סיסמה %2 ערוץ %3",
    "ROBOT_CLOSE_AP": "לכבות מצב AP",
    "ROBOT_WIFI": "wifi להתחבר שם %1 סיסמה %2",
    "ROBOT_WIFI_INFO": "wifi %1",
    "ROBOT_WIFI_INIT_SERVER": "אתחול שרת",
    "ROBOT_WIFI_RUN_SERVER": "להפעיל שרת",
    "ROBOT_WIFI_CLIENT": "האם לקוח WIFI קיים",
    "ROBOT_WIFI_CLIENT_GET": "לקבל נתוני לקוח WIFI",
    "ROBOT_WIFI_CLIENT_SENT": "לשלוח נתונים ללקוח WIFI %1",
    "ROBOT_WIFI_CLOSE_CLIENT": "לסגור לקוח WIFI",
    "ROBOT_WIFI_CLIENT_CONNECT": "האם לקוח WIFI מחובר",
    "ROBOT_WIFI_CLIENT_DISPLAY": "האם לקוח WIFI זמין",
    "ROBOT_WIFI_CLOSE": "לנתק חיבור WIFI",
    "ROBOT_WIFI_CONNECT_INFO": "מידע חיבור",
    "ROBOT_WIFI_CONNECT_IP": "כתובת IP",
    "ROBOT_VIBRATION": "חיישן רטט %1",
    "ROBOT_BLUE_TOOTH_INIT": "אתחול Bluetooth %1",
    "ROBOT_BLUE_TOOTH_GET": "קבלת נתוני Bluetooth",
    "ROBOT_BLUE_TOOTH_SEND": "שליחת נתוני Bluetooth %1",
    "ROBOT_BLUE_TOOTH_GET_MAC": "קבלת כתובת MAC של Bluetooth",
    "ROBOT_BLUE_TOOTH_CLOSE": "ניתוק חיבור Bluetooth",
    "ROBOT_GET_KEY_BOARD": "לקבל מקלדת מטריצה שורה: %1%2%3%4 עמודה: %5%6%7%8",
    "Blockly.Msg.SET.DATA.TYPE": "להגדיר סוג נתונים %1 %2",
    "ROBOT_FLOAT": "נקודה צפה",
    "ROBOT_INT": "מספר שלם",
    "SET_DATA_TYPE": "להגדיר סוג נתונים %1 %2",
    "OPERATOR_GETSTRING": "לקבל מ%1 את הסיבית ה %2 עד ה %3",
    "OPERATOR_LOCATION": "לקבל את מיקום %1 בתוך %2",
    "OPERATOR_CR": "כניסת שורה",
    "OPERATOR_BR": "שורה חדשה",
    "OPERATOR_CR_BR": "כניסת שורה & שורה חדשה",
    "ROBOT_VOICE_RECOGNITION_INIT": "אתחול מודול זיהוי קול RX%1TX%2",
    "ROBOT_GET_TIME": "לקבל זמן",
    "ROBOT_GET_TOUCH_BOARD": "לקבל מיקום מקש במקלדת מגע",
    "STRIN_TO_INT": "להמיר %1 למספר שלם",
    "ROBOT_GET_CITY_CODE": "קוד העיר הנוכחי",
    "ROBOT_REFRESH_WRATHER": "לרענן מזג אוויר %1",
    "ROBOT_GET_WEATHER_INFO": "לקבל %1",
    "ROBOT_CITY_NAME": "שם העיר באנגלית",
    "ROBOT_DIRECTION": "כיוון הרוח",
    "ROBOT_SPEED": "מהירות הרוח",
    "ROBOT_TEMP": "טמפרטורה",
    "ROBOT_weather": "מזג אוויר",
    "ROBOT_PM": "ערך pm",
    "ROBOT_NTP_INIT": "אתחול שרת NTP",
    "ROBOT_UPDATE_TIME": "עדכון זמן",
    "ROBOT_GET_TIME_INFO": "לקבל זמן %1",
    "ROBOT_HOUR": "שעה",
    "ROBOT_MINUTE": "דקה",
    "ROBOT_SECODE": "שנייה",
    "ROBOT_WEEK": "שבוע",
    "ROBOT_TRAFFIC_LIGHT": "רמזור ירוק %1%2 צהוב %3%4 אדום %5%6",
    "ROBOT_INFRARA_PROXIMITY": "מודול הימנעות מאור אינפרא אדום %1 האם זיהה מכשול",
    "ROBOT_OLED_SHOW": "תצוגת OLED",
    "ROBOT_OLED_INIT": "אתחול OLED",
    "ROBOT_GET_WEATHER_DATA": "לקבל נתוני מזג אוויר %1",
    "CATEGORY_ROBOTS_RGB": "רצועת LED RGB",
    "CATEGORY_ROBOTS_Digit_Tube": "צג דיגיטלי ארבע ספרות",
    "CATEGORY_ROBOTS_LCD": "מודול LCD",
    "CATEGORY_ROBOTS_MP3": "מודול MP3",
    "CATEGORY_ROBOTS_Voice_Recognition": "זיהוי קול",
    "CATEGORY_ROBOTS_OLED": "מודול OLED",
    "CATEGORY_ROBOTS_DIGIT": "צג מספרים בעל 4 ספרות",
    "CATEGORY_ROBOTS_VOICE": "זיהוי קול",
    "CATEGORY_ROBOTS_WIFI": "מודול WIFI",
    "CATEGORY_ROBOTS_BLUETOOTH": "מודול Bluetooth",
    "CATEGORY_ROBOTS_WRATHER": "מודול מזג אוויר",
    "CATEGORY_ROBOTS_ITS": "תעבורה חכמה",
    "ROBOT_INIT_WEB_SERVER": "אתחול שרת web יציאה %1",
    "ROBOT_WEB_DISPOSE_DATA": "שרת web מטפל בבקשה %1",
    "ROBOT_SEND_DATA_TO_WEB": "שרת web שולח ללקוח נתונים %1 %2",
    "ROBOT_TEXT": "טקסט",
    "ROBOT_WEBPAGE": "דף אינטרנט",
    "ROBOT_GET_WEB_DATA": "קבלת ערך %1 מהלקוח",
    "ROBOT_STRING": "מחרוזת %1",
    "ROBOT_BREAK": "יציאה מהלולאה הנוכחית",
    "ROBOT_ASYNC_DELAY": "השהייה אסינכרונית %1",
    "ROBOT_ROCKER_DATA": "מצערת x%1 y%2 sw%3 ערך %4",
    "ROBOT_SERIAL_PORT_BOOLEAN": "האם יצא נתונים מהפורט הסדרתי",
    "ROBOT_GET_SERIAL_PORT_DATA": "קבלת %1 מהפורט הסדרתי",
    "ROBOT_SERIAL_PORT_NULL": "ללא תו סיום",
    "ROBOT_OPERATOR_SPLIT_STRING": "פיצול %2 עם %1 פריט מספר %3",
    "ROBOT_LIST_SET_TYPE": "הגדרת סוג נתונים %1 כ %2",
    "ROBOT_ULTRAVIOLET_RAY": "חיישן קרינה אולטרה סגולה %1",
    "ROBOT_WIND_CUP": "מד רוח %1",
    "ROBOT_4BUTTON": "מודול 4 כפתורים %1 כפתור %2 נלחץ",
    "ROBOT_YELLOW": "צהוב",
    "ROBOT_ATMOSPHERIC_PRESSURE": "חיישן לחץ אטמוספירי %1",
    "ROBOT_PRESS": "לחץ אוויר",
    "ROBOT_ALTITUDE": "גובה מעל פני הים",
    "ROBOT_BLDC_SWITCH": "מנוע DC מצומצם TT IN-%1 IN+%2 %3",
    "ROBOT_PORT_DATA": "נתונים",
    "ROBOT_PORT_STRING": "תו",
    "ROBOT_PORT_NUMBER": "מספר",
    "ROBOT_GET_SERVO_ANGLE": "קבלת זווית סרוו %1",
    "ROBOT_CHAR": "תו %1",
    "ROBOT_LEFT_ROCKER": "מצערת שמאלית",
    "ROBOT_RIGHT_ROCKER": "מצערת ימנית",
    "ROBOT_ROCKER_SPEED": "%1 x%2 y%3 sw%4 ערך %5",
    "ROBOT_WIND_CUP_DATA": "ערך",
    "ROBOT_WIND_CUP_LEVEL": "רמה",
    "ROBOT_ADD_LOG": "הדפסה רציפה בפורט הסדרתי %1 %2",
    "ROBOT_DELAY_WS": "המתן %1 מילישניות",
    "ROBOT_MULTITHREADING": "רב-תהליכים",
    "ROBOT_OLED_TYPEfACE": "גופן OLED %1",
    "ROBOT_OLED_SET_IMG": "הגדרת תמונה OLED x%1 y%2 %3",
    "ROBOT_OLED_FONT_SUN": "שמש",
    "ROBOT_OLED_FONT_RAIN": "גשם",
    "ROBOT_OLED_FONT_ENGLISH1": "גופן אנגלי 1",
    "ROBOT_OLED_FONT_ENGLISH2": "גופן אנגלי 2",
    "ROBOT_OLED_FONT_CHIMESE": "גופן סיני",
    "ROBOT_OLED_FONT_BIG": "גופן גדול",
    "ROBOT_INIT_UDP_SERVER": "אתחול שרת UDP, יציאה %1",
    "ROBOT_UDP_CREATE_DATA": "יצירת חבילת נתוני UDP, IP %1 יציאה %2",
    "ROBOT_UDP_GET_IP": "קבלת IP שידור",
    "ROBOT_UDP_WRITE": "שליחת נתוני UDP %1",
    "ROBOT_UDP_IS_DATA": "האם התקבלו נתונים",
    "ROBOT_UDP_READ_DATA": "קריאת נתוני UDP",
    "ROBOT_BLE_INIT": "הגדרת Bluetooth צר-צריכה %1 %2",
    "ROBOT_BLE_START": "הפעלת Bluetooth במארח, שם %1",
    "ROBOT_BLE_SEND": "שליחת נתונים במארח %1",
    "ROBOT_BLE_DATA": "נתונים שהתקבלו במארח",
    "ROBOT_BLE_GET": "קבלת נתונים במארח",
    "ROBOT_BLE_CLIEN_IS_CONNECT": "האם הלקוח מחובר",
    "ROBOT_BLE_CLENT_CONNECT": "הלקוח מתחבר ל-Bluetooth, שם %1",
    "ROBOT_BLE_CLENT_SEND": "שליחת נתונים ללקוח %1",
    "ROBOT_BLE_CLENT_DATA": "נתונים שהתקבלו מהלקוח",
    "ROBOT_BLE_CLENT_GET": "קבלת נתונים מהלקוח",
    "CATEGORY_ROBOTS_BLE": "Bluetooth צר-צריכה",
    "ROBOT_PID_CREATE": "יצירת PID %1",
    "ROBOT_PID_SET": "PID %1 הגדרת קלט %2 פלט %3 יעד %4 KP %5 KI %6 KD %7",
    "ROBOT_PID_TYPE": "PID %1 הגדרת מצב עבודה %2",
    "ROBOT_PID_PERIOD": "PID %1 הגדרת מחזור חישוב %2",
    "ROBOT_PID_OUTPUT_SCOPE": "PID %1 הגדרת טווח פלט מ %2 עד %3",
    "ROBOT_PID_CALCULATE": "חישוב PID %1",
    "ROBOT_MANUAL": "ידני",
    "ROBOT_AUTOMATIC": "אוטומטי",
    "ROBOT_PID_INPUT": "ערך קלט",
    "ROBOT_PID_OUTPUT": "ערך פלט",
    "ROBOT_PID_TARGET": "ערך יעד",
    "ROBOT_ESPNOW_INIT_MAC": "אתחול ESP NOW כתובת mac %1",
    "ROBOT_ESPNOW_SEND": "שליחת מחרוזת ESP NOW %1",
    "ROBOT_ESPNOW_DATA_CALLBACK": "קבלת מחרוזת ESP NOW",
    "ROBOT_ESPNOW_GET_DATA": "מחרוזת שהתקבלה ב-ESP NOW",
    "ROBOT_ESPNOW_GET_MAC": "כתובת mac",
    "ROBOT_BLE_IS_CONNECT_HOST": "האם מחובר למארח"
  }
}

const extensions = {
  "zh-cn": {

  },
  "he": {
    "facial_recognition.camera": "הפעל מצלמה בחלון קופץ[ONE]",
    "facial_recognition.gather": "איסוף נתוני פנים מהמצלמה וסימון כ-[ONE]",
    "facial_recognition": "זיהוי פנים מהמצלמה פעם אחת",
    "facial_recognition.getFaceResult": "תוצאת זיהוי פנים",
    "facial_recognition.getFaceReliability": "אמינות תוצאת זיהוי הפנים",
    "facial_recognition.faceTracking": "מעקב אחר פנים[ONE]",
    "facial_recognition.initFaceGender": "אתחול זיהוי מגדר",
    "facial_recognition.faceGender": "זיהוי מגדר[ONE]",
    "open": "פתח",
    "close": "סגור",
    "facialRecognition": "זיהוי פנים",
    "weather.getWeather": "קבל מזג אוויר",
    "weather.getWeatherInfo": "קבל את מזג האוויר של [ONE]",
    "weather.weather": "מזג אוויר",
    "weather.maxTemp": "טמפרטורה מרבית",
    "weather.minTemp": "טמפרטורה מינימלית",
    "weather.pressure": "לחץ אוויר בגובה פני הים",
    "weather.humidity": "לחות",
    "weather.speed": "מהירות הרוח",
    "weather.deg": "כיוון הרוח",
    "weather.visibility": "ראות",
    "knn.machine.learning": "למידת מכונה",
    "knn.init": "אתחול מסווג knn",
    "knn.classify": "knn מסווג את תמונת המצלמה כ-[ONE]",
    "knn.forecast": "knn מזהה את סיווג תמונת המצלמה",
    "knn.getResult": "תוצאת סיווג knn",
    "knn.clearTag": "knn מנקה את תג הסיווג[ONE]",
    "knn.keepClasses": "knn שומר את מודל הסיווג",
    "knn.loadClasses": "knn טוען את מודל הסיווג",
    "knn.clearAll": "knn מנקה את נתוני מודל הסיווג",
    "knn.clearClassifier": "שחרור מסווג knn",
    "gestureRecognition.gesture.recognition": "זיהוי מחוות",
    "gestureRecognition.init": "אתחול שרת זיהוי מחוות עם api key[ONE] ו-api secret[TWO]",
    "gestureRecognition.result": "ההסתברות לזיהוי מחווה כ-[ONE]",
    "gestureRecognition.heart_a": "לב a",
    "gestureRecognition.heart_b": "לב b",
    "gestureRecognition.heart_c": "לב c",
    "gestureRecognition.heart_d": "לב d",
    "gestureRecognition.OK": "אישור",
    "gestureRecognition.hand_open": "יד פתוחה",
    "gestureRecognition.thumb_up": "אגודל למעלה",
    "gestureRecognition.thumb_down": "אגודל למטה",
    "gestureRecognition.rock": "רוק",
    "gestureRecognition.namaste": "נאמסטה",
    "gestureRecognition.palm_up": "כף היד כלפי מעלה",
    "gestureRecognition.fist": "אגרוף",
    "gestureRecognition.index_finger_up": "אצבע למעלה",
    "gestureRecognition.double_finger_up": "שתי אצבעות למעלה",
    "gestureRecognition.victory": "ניצחון",
    "gestureRecognition.big_v": "v גדול",
    "gestureRecognition.phonecall": "שיחת טלפון",
    "gestureRecognition.beg": "קידה",
    "gestureRecognition.thanks": "תודה",
    "gestureRecognition": "זיהוי מחוות",
    "carMotor.categoryName": "רכב חכם",
    "carMotor.move.value": "תנועה",
    "carMotor.move": "הרכב נע ל-[ONE] במהירות [TWO]",
    "carMotor.carInit": "אתחול רכב [ONE]",
    "carMotor.run": "תנועת הרכב",
    "carMotor.carGetInstruct": "קבלת אות [ONE]",
    "carMotor.cargetInstructData": "נתוני הוראה",
    "carMotor.front": "קדימה",
    "carMotor.back": "אחורה",
    "carMotor.left": "שמאלה",
    "carMotor.right": "ימינה",
    "carMotor.lf": "שמאל קדימה",
    "carMotor.lr": "שמאל אחורה",
    "carMotor.rf": "ימין קדימה",
    "carMotor.rr": "ימין אחורה",
    "carMotor.clockwise": "עם כיוון השעון",
    "carMotor.anticlockwise": "נגד כיוון השעון",
    "fourLeggedBionicSpider.categoryName": "עכביש ביוני עם ארבע רגליים",
    "fourLeggedBionicSpider.init": "אתחול עכביש [ONE]",
    "fourLeggedBionicSpider.spiderMove": "תנועה ל-[ONE]",
    "fourLeggedBionicSpider.spiderMode": "הפעלת מצב [ONE]",
    "fourLeggedBionicSpider.spiderExecute": "תנועת העכביש",
    "fourLeggedBionicSpider.spiderGetInstruct": "קבלת אות [ONE]",
    "fourLeggedBionicSpider.tcp": "רשת",
    "fourLeggedBionicSpider.uart": "פורט טורי",
    "fourLeggedBionicSpider.standby": "מצב המתנה",
    "fourLeggedBionicSpider.lying": "שוכב",
    "fourLeggedBionicSpider.sleep": "שינה",
    "fourLeggedBionicSpider.greet": "ברכה",
    "fourLeggedBionicSpider.pushup": "שכיבות סמיכה",
    "fourLeggedBionicSpider.fighting": "קרב",
    "fourLeggedBionicSpider.dancing": "ריקוד",
    "fourLeggedBionicSpider.swing": "נדנוד",
    "fourLeggedBionicSpider.handsome": "להיראות מגניב",
    "carMotor.mode.fun": "מצב [ONE] של הרכב",
    "carMotor.execute.mode": "הרכב מבצע מצב מותאם אישית [ONE]",
    "carMotor.speed": "מהירות",
    "carMotor.buzzer": "צופר",
    "carMotor.track": "עקיבה בקו",
    "carMotor.avoidance": "הימנעות ממכשולים",
    "carMotor.follow": "עקיבה",
    "carMotor.roundTrack": "עקיבה מעגלית",
    "carMotor.8track": "עקיבה בצורת 8",
    "carMotor.stop": "עצירת הרכב",
    "carMotor.move.stop": "עצירה",
    "carMotor.forward": "קדימה",
    "carMotor.backward": "אחורה",
    "carMotor.leftMove": "תזוזה שמאלה",
    "carMotor.rightMove": "תזוזה ימינה",
    "fourLeggedBionicSpider.leftMove": "פנייה שמאלה",
    "fourLeggedBionicSpider.rightMove": "פנייה ימינה",
    "ROBOT_ARM": "זרוע רובוטית",
    "ROBOT_ARM_START_SERVE": "הפעלת שירות זרוע רובוטית [ONE]",
    "ROBOT_ARM_INIT": "אתחול זרוע רובוטית chassis[ONE]shoulder[TWO]elbow[THREE]claws[FOUR]",
    "ROBOT_ARM_ACTION": "זרוע רובוטית [ONE]",
    "ROBOT_ARM_JOYSTICK": "הגדרת זווית [ONE] ל-[TWO]",
    "ROBOT_ARM_GET_ARM_ANGLE": "קבלת זווית זרוע רובוטית [ONE]",
    "ROBOT_ARM_ROCKER": "הגדרת [FOUR]x[ONE]y[TWO]sw[THREE]",
    "ROBOT_ARM_OPEN_MEMORY": "הפעלת מצב זיכרון של ג'ויסטיק",
    "ROBOT_ARM_COORD": "שליטה קואורדינטית בזרוע רובוטית x[ONE]y[TWO]z[THREE]",
    "ROBOT_ARM_GET_JOYSTICK_COORD": "קבלת קואורדינטות תלת-ציריות [ONE]",
    "ROBOT_ARM_ERROR": "כוונון שגיאת בסיס זרוע [ONE][TWO][THREE]",
    "ROBOT_ARM_MOTION": "מצב זיכרון wifi [ONE]",
    "ROBOT_ARM_RESET": "איפוס זרוע רובוטית",
    "ROBOT_ARM_NET_INIT": "עדכון נתונים לזרוע רובוטית דרך פורט טורי",
    "ROBOT_ARM_GET_COMMAND": "קבלת אות [ONE]",
    "ROBOT_ARM_GET_COMMAND_DATA": "קבלת ערך של הוראה [TWO]",
    "ROBOT_ARM_LEFT_ROCKER": "ג'ויסטיק שמאלי",
    "ROBOT_ARM_RIGHT_ROCKER": "ג'ויסטיק ימני",
    "ROBOT_ARM_WEB_SERVER": "דף אינטרנט",
    "ROBOT_ARM_MODE1": "מצב 1",
    "ROBOT_ARM_MODE2": "מצב 2",
    "ROBOT_ARM_MODE3": "מצב 3",
    "ROBOT_ARM_MODE4": "מצב 4",
    "ROBOT_ARM_MODE5": "מצב 5",
    "ROBOT_ARM_MODE6": "מצב 6",
    "ROBOT_ARM_KEEP": "שמירה",
    "ROBOT_ARM_RUN": "הפעלה",
    "ROBOT_ARM_CLEAR": "ניקוי",
    "ROBOT_ARM_OPEN_CLAWS": "פתיחת טפרים",
    "ROBOT_ARM_CLOSE_CLAWS": "סגירת טפרים",
    "ROBOT_ARM_UP_ELBOW": "מרפק למעלה",
    "ROBOT_ARM_DOWN_ELBOW": "מרפק למטה",
    "ROBOT_ARM_UP_SHOULDER": "כתף למעלה",
    "ROBOT_ARM_DOWN_SHOULDER": "כתף למטה",
    "ROBOT_ARM_LEFT_CHASSIS": "בסיס שמאלה",
    "ROBOT_ARM_RIGHT_CHASSIS": "בסיס ימינה",
    "ROBOT_ARM_CLAWS_SLIDE": "סליידר טפרים",
    "ROBOT_ARM_ELBOW_SLIDE": "סליידר מרפק",
    "ROBOT_ARM_SHOULDER_SLIDE": "סליידר כתף",
    "ROBOT_ARM_CHASSIS_SLIDE": "סליידר בסיס",
    "ROBOT_ARM_CLAWS_INPUT": "קלט טפרים",
    "ROBOT_ARM_ELBOW_INPUT": "קלט מרפק",
    "ROBOT_ARM_SHOULDER_INPUT": "קלט כתף",
    "ROBOT_ARM_CHASSIS_INPUT": "קלט בסיס",
    "ROBOT_ARM_DATA_RESRE": "איפוס",
    "ROBOT_ARM_KEEP_STATE": "שמירת מצב",
    "ROBOT_ARM_STOP": "עצירה",
    "ROBOT_ARM_START": "התחלה",
    "ROBOT_ARM_XYZ": "ביצוע קלט xyz",
    "ROBOT_ARM_ZERO": "איפוס לנקודת אפס",
    "ROBOT_ARM_CLAWS": "טפרים",
    "ROBOT_ARM_ELBOW": "מרפק",
    "ROBOT_ARM_SHOULDER": "כתף",
    "ROBOT_ARM_CHASSIS": "בסיס",
    "ROBOT_ARM_X": "קואורדינטת חלל x",
    "ROBOT_ARM_Y": "קואורדינטת חלל y",
    "ROBOT_ARM_Z": "קואורדינטת חלל z",
    "carMotor.slider": "סליידר",
    "arm_car.arm.init": "אתחול זרוע רובוטית chassis[ONE]shoulder[TWO]elbow[THREE]wrist[FOUR]claws[FIVE]",
    "arm_car.arm.setAngle": "הגדרת זווית זרוע רובוטית [ONE] ל-[TWO]",
    "arm_car.arm.wrist": "מפרק שורש כף היד",
    "arm_car.car.speed": "מהירות הרכב",
    "arm_car.arm.wristSlide": "סליידר מפרק שורש כף היד",
    "arm_car.arm.wristInput": "קלט מפרק שורש כף היד",
    "carMotor.openLED": "הדלקת אור",
    "carMotor.closeLED": "כיבוי אור",
    "carMotor.setArmAngleSpeed": "הגדרת זווית זרוע [ONE] ל-[TWO] ומהירות [THREE]",
    "carMotor.car.armExpand": "הרחבת זרוע רובוטית",
    "carMotor.clearCommand": "ניקוי פקודות",
    "bipedRobot.categoryName": "רובוט דו-רגלי",
    "bipedRobot.bipedRobotSetPin": "הגדרת ירך שמאלית [ONE] שוק שמאלית [TWO] ירך ימנית [THREE] שוק ימנית [FOUR]",
    "bipedRobot.bipedRobotRunAction": "ביצוע [ONE] במהירות [TWO]",
    "bipedRobot.bipedRobotCreatAction": "יצירת פעולה [ONE]",
    "bipedRobot.bipedRobotSetAngle": "ירך שמאלית [ONE] שוק שמאלית [TWO] ירך ימנית [THREE] שוק ימנית [FOUR] מהירות [FIVE]",
    "bipedRobot.bipedRobotRun": "ביצוע [ONE]",
    "bipedRobot.bipedRobotServe": "הפעלת שירות [ONE]",
    "bipedRobot.bipedRobotGetAppCommand": "קבלת פקודה [ONE]",
    "bipedRobot.leftTurn": "פנייה שמאלה",
    "bipedRobot.rightTurn": "פנייה ימינה",
    "bipedRobot.leftKick": "בעיטה שמאלית",
    "bipedRobot.rightKick": "בעיטה ימנית",
    "bipedRobot.leftTilt": "הטיה שמאלה",
    "bipedRobot.rightTilt": "הטיה ימינה",
    "bipedRobot.leftAnkles": "רגל שמאלית נעה",
    "bipedRobot.rightAnkles": "רגל ימנית נעה",
    "bipedRobot.leftStamp": "דריכה שמאלית",
    "bipedRobot.rightStamp": "דריכה ימנית",
    "bipedRobot.shadowsStep": "פריצה",
    "bipedRobot.dance": "ריקוד",
    "bipedRobot.follow": "עקוב",
    "bipedRobot.avoid": "הימנע ממכשולים",
    "bipedRobot.stop": "עצירת הרובוט",
    "bipedRobot.reset": "איפוס הרובוט",
    "ROBOT_ARM_LOOP_RUN": "הפעלה חוזרת",
    "carMotor.firing.expansion": "הרחבת ירי",
    "carMotor.firing.module": "אתחול מודול ירי [ONE]",
    "carMotor.firing": "ירי בודד מהקנה",
    "carMotor.firing.servoInit": "אתחול סרבו ירי [ONE]",
    "carMotor.firing.servoSetAngle": "הגדרת זווית סרבו ירי [ONE]",
    "carMotor.camera.module": "הרחבת מצלמה",
    "carMotor.camera.serverInit": "אתחול מצלמת רכב [ONE][TWO] באיכות [THREE]",
    "carMotor.camera.server": "שירות מצלמה [ONE]",
    "carMotor.camera.clientIsGetData": "האם אפליקציית הלקוח מקבלת נתונים",
    "carMotor.camera.dataForward": "העברת נתוני [ONE]",
    "carMotor.camera.carRun": "תנועת רכב עם מצלמה",
    "carMotor.item.firing": "ירי",
    "carMotor.item.firingAngle": "זווית ירי",
    "carMotor.item.forwardDirection": "היפוך כלפי מעלה",
    "carMotor.item.reverseDirection": "היפוך כלפי מטה",
    "carMotor.camera.open": "הפעל מצלמה [ONE]",
    "carMotor.camera.frames": "מסגרות",
    "carMotor.camera.webPageControl": "שליטה דרך דף אינטרנט",
    "carMotor.camera.highDefinition": "איכות גבוהה",
    "carMotor.camera.mediumQuality": "איכות בינונית",
    "carMotor.camera.lowQuality": "איכות נמוכה",
    "meteorologicalStation.categoryName": "תחנת מזג אוויר",
    "meteorologicalStation.server": "שירות מזג אוויר [ONE]",
    "meteorologicalStation.sendData": "שלח את הערך של [ONE] כ-[TWO]",
    "meteorologicalStation.light": "אור",
    "meteorologicalStation.uv": "אולטרה סגול",
    "meteorologicalStation.atm": "לחץ אוויר",
    "meteorologicalStation.rain": "גשם",
    "meteorologicalStation.PM25": "pm2.5",
    "meteorologicalStation.wind": "רוח",
    "meteorologicalStation.tem": "טמפרטורה",
    "meteorologicalStation.hum": "לחות",
    "meteorologicalStation.vibration": "רטט",
    "meteorologicalStation.servo": "סרבו",
    "meteorologicalStation.all": "כל החיישנים",
    "carMotor.item.flipToTheLeft": "היפוך שמאלה",
    "carMotor.item.flipToTheRight": "היפוך ימינה",
    "chart.categoryName": "תרשים נתונים",
    "chart.showChart": "פתח חלון תרשים",
    "chart.setTitle": "הגדר כותרת תרשים [ONE]",
    "chart.setAxisTitle": "הגדר כותרת ציר: ציר x [ONE] ציר y [TWO]",
    "chart.inputData": "קלט נתונים של [ONE]: ציר x [TWO] ציר y [THREE]",
    "chart.clearData": "נקה נתונים",
    "chart.closeChart": "סגור חלון תרשים",
    "smartHome.categoryName": "בית חכם",
    "smartHome.server": "בית חכם [ONE]",
    "smartHome.reset": "איפוס אות",
    "smartHome.openLED": "הדלק אור",
    "smartHome.closeLED": "כבה אור",
    "smartHome.openDoor": "פתח דלת",
    "smartHome.closeDoor": "סגור דלת",
    "smartHome.openWindow": "פתח חלון",
    "smartHome.closeWindow": "סגור חלון",
    "smartHome.openLaser": "הפעל לייזר",
    "smartHome.closeLaser": "כבה לייזר",
    "smartHome.openRGB": "הפעל rgb",
    "smartHome.closeRGB": "כבה rgb",
    "smartHome.light": "אור",
    "smartHome.PIR": "חיישן אינפרא-אדום לגוף האדם",
    "smartHome.raindrop": "טיפת גשם",
    "smartHome.Tem": "טמפרטורה",
    "smartHome.Hum": "לחות",
    "smartFarm.categoryName": "חווה חכמה",
    "smartFarm.server": "חווה חכמה [ONE]",
    "smartFarm.openFeeder": "הפעל מאכיל",
    "smartFarm.closeFeeder": "כבה מאכיל",
    "smartFarm.waterLevel": "גובה מים",
    "smartFarm.soilMoisture": "לחות קרקע",
    "carMotor.continuous.firing": "ירי רציף מהקנה [ONE]",
    "carMotor.bluetoothController.expansion.name": "בקר בלוטות'",
    "carMotor.bluetoothController.connect": "חבר בקר בלוטות' [ONE]",
    "carMotor.bluetoothController.isConnect": "אם מחובר לבקר בלוטות'",
    "carMotor.bluetoothController.buttons": "בקר בלוטות' [ONE] [TWO]",
    "carMotor.bluetoothController.disConnect": "נתק חיבור",
    "carMotor.bluetoothController.move": "אם בקר בלוטות' [ONE] זז",
    "carMotor.bluetoothController.getData": "ערך של בקר בלוטות' [ONE] [TWO]",
    "carMotor.bluetoothController.leftUp": "שמאל למעלה",
    "carMotor.bluetoothController.leftDown": "שמאל למטה",
    "carMotor.bluetoothController.rightUp": "ימין למעלה",
    "carMotor.bluetoothController.rightDown": "ימין למטה",
    "carMotor.bluetoothController.pressDown": "נלחץ",
    "carMotor.bluetoothController.undo": "שוחרר",
    "ASR.categoryName": "זיהוי קולי",
    "ASR.sound_config": "תצורת קול הגייה [ONE] עוצמה [TWO] מהירות דיבור [THREE]",
    "ASR.turn_on_the_radio": "דיווח הפעלה [ONE] זמן קצוב [TWO] שניות",
    "ASR.wakeword": "רגישות מילה מעוררת [ONE] מילה [TWO] תגובה [THREE]",
    "ASR.exit_reply": "תגובה ליציאה עקב זמן קצוב [ONE]",
    "ASR.initiative_exit": "פקודת יציאה יזומה [ONE] תגובה [TWO]",
    "ASR.command_recognition_sensitivity": "רגישות לזיהוי פקודות [ONE]",
    "ASR.recognition_command": "שם פעולה [ONE] מזהה [TWO] מילת פקודה [THREE] תגובה [FOUR] פלט יציאה [FIVE]",
    "ASR.sweet_girl": "קול נשי מתוק",
    "ASR.cute_girl_voice": "קול ילדה חמודה",
    "ASR.vivacious_female_voice": "קול נשי עליז",
    "ASR.male_announcer": "קריין גבר",
    "ASR.naive_boy_voice": "קול ילד תמים",
    "ASR.childs_voice": "קול ילדי",
    "carMotor.bluetoothControllerRealTime.expansion.name": "בקר אונליין",
    "carMotor.bluetoothControllerRealTime.buttons": "בקר [ONE] [TWO]",
    "carMotor.bluetoothControllerRealTime.getData": "ערך של בקר [ONE] [TWO]",
    "carMotor.bluetoothController.online": "מצב אונליין",
    "carMotor.bluetoothController.offline": "מצב אופליין",
    "carMotor.bluetoothController.multithreading": "ריבוי תהליכים",
    "carMotor.camera.led": "מצלמה [ONE]",
    "carMotor.camera.Commant": "פקודת קבלת מצלמה [ONE]",
    "ASR.LOW": "נמוך",
    "ASR.MIDDLE": "בינוני",
    "ASR.HIGH": "גבוה",
    "KNN.RESULT.POSSIBILITY": "ההסתברות של תוצאת הזיהוי",
    "sharnbot.app_init": "אתחול אפליקציית sharkbot",
    "sharnbot.get_commant": "sharkbot קבלת פקודה [ONE]",
    "sharnbot.get_commantData": "sharkbot קבלת ערך הפקודה [ONE]",
    "sharnbot.execute": "sharkbot תנועה",
    "sharnbot.setRGB_color": "נורת rgb [ONE][TWO]",
    "sharnbot.setRGB": "נורת rgb [ONE] אדום [TWO] ירוק [THREE] כחול [FOUR]",
    "sharnbot.IR_getData": "מודול ir קיבל לחיצה על [ONE]",
    "sharnbot.Ultrasonic_launch": "שיגור אולטרסוני",
    "sharnbot.Ultrasonic_get_time": "זמן התפשטות אולטרסוני",
    "sharnbot.P_Buzzer": "צפצפה תדר [ONE]hz למשך [TWO] שניות",
    "sharnbot.Trace_getData": "ערך חיישן קו [ONE]",
    "sharnbot.speed_move": "במהירות pwm של [ONE] ערך [TWO]",
    "sharnbot.time_move": "במהירות pwm של [ONE] ערך [TWO], למשך [THREE] שניות",
    "sharnbot.setPWM": "הגדרת ערכי pwm מנוע שמאלי [ONE] ימני [TWO]",
    "sharnbot.encoder_init": "אתחול מקודד [ONE]",
    "sharnbot.encoder_num": "מספר פולסים מקודד [ONE]",
    "sharnbot.encoder_reset": "איפוס מקודד [ONE]",
    "sharnbot.rotationAngle": "מנוע מקודד שמאלי סיבובים [ONE], ימני סיבובים [TWO]",
    "sharnbot.rotationAngle_time": "מנוע מקודד במהירות [ONE] ערך [TWO], למשך [THREE] שניות",
    "sharnbot.rotationAngle_speed": "מנוע מקודד במהירות [ONE] ערך [TWO]",
    "sharnbot.ASR_init": "אתחול זיהוי קולי",
    "sharnbot.ASR_get_command": "קבלת פקודת זיהוי קולי",
    "sharnbot.PLACES.left": "שמאל",
    "sharnbot.PLACES.right": "ימין",
    "sharnbot.PLACES.all": "הכל",
    "sharnbot.RUN.forward": "קדימה",
    "sharnbot.RUN.backward": "אחורה",
    "sharnbot.RUN.turnLeft": "פנייה שמאלה",
    "sharnbot.RUN.turnRight": "פנייה ימינה",
    "sharnbot.WHELL.left": "גלגל שמאלי",
    "sharnbot.WHELL.right": "גלגל ימני",
    "sharnbot.COMMANT.lineWalking": "מעקב קו",
    "sharnbot.COMMANT.left_light": "אור שמאלי",
    "sharnbot.COMMANT.right_light": "אור ימני",
    "sharnbot.COMMANT.all_light": "כל האורות",
    "sharnbot.COMMANT.input_forward": "קלט קדימה",
    "sharnbot.COMMANT.input_backward": "קלט אחורה",
    "sharnbot.COMMANT.input_turnLeft": "קלט שמאלה",
    "sharnbot.COMMANT.input_turnRight": "קלט ימינה",
    "sharnbot.COMMANT_DATA.speed": "מהירות",
    "PAW_MPU6050_init": "אתחול זרוע מכנית",
    "PAW_MPU6050_getData": "קבלת נתוני זרוע מכנית",
    "PAW_getXYZData": "קבלת תאוצה [ONE]",
    "PAW_getAngle": "קבלת זווית סטייה של פוטנציומטר [ONE]",
    "PAW_RPcomparison": "פוטנציומטר 1 [ONE][TWO][THREE] פוטנציומטר 2 [FOUR][FIVE][SIX] פוטנציומטר 3 [SEVEN][EIGHT][NINE] פוטנציומטר 4 [TEN][ELEVEN][TWELEV] פוטנציומטר 5 [THIRTEEN][FOURTEEN]",
    "PAW_getK1Button": "לחצן k1 נלחץ",
    "PAW_RP_potValue1": "פוטנציומטר מסתובב 1",
    "PAW_RP_potValue2": "פוטנציומטר מסתובב 2",
    "PAW_RP_potValue3": "פוטנציומטר מסתובב 3",
    "PAW_RP_potValue4": "פוטנציומטר מסתובב 4",
    "PAW_RP_potValue5": "פוטנציומטר מסתובב 5",
    "PAW_and": "וגם",
    "PAW_or": "או",
    "PAW_greaterThan": "גדול מ",
    "PAW_lessThan": "קטן מ",
    "PAW.categoryName": "כפפת חישה לתנועה",
    "sharnbot.P_Buzzer.name": "צפצפה תדר [ONE] למשך [TWO] שניות",
    "PAW.getCommand": "קבלת פקודת תנועה",
    "PAW.getCommand.bel_led": "נורית חיווי bluetooth [ONE]",
    "carMotor.aabutton.name": "מודול ראייה",
    "carMotor.visionModule.lcd_init": "אתחול מסך lcd",
    "carMotor.visionModule.lcd_rotation": "כיוון סיבוב מסך lcd [ONE]",
    "carMotor.visionModule.vision_camera_init": "אתחול מצלמה",
    "carMotor.visionModule.camera_resolution_ratio": "מצלמה [ONE]",
    "carMotor.visionModule.color_appoint_recognize": "זיהוי צבע [ONE]",
    "carMotor.visionModule.get_recognition_data": "קבלת [ONE]",
    "carMotor.visionModule.get_visionModule_command": "מודול ראייה קבלת פקודה [ONE]",
    "carMotor.visionModule.get_visionModule_command_data": "מודול ראייה קבלת ערך [ONE]",
    "carMotor.menus.qrCode": "זיהוי קוד qr",
    "carMotor.menus.barCode": "זיהוי ברקוד",
    "carMotor.menus.num": "זיהוי מספרים",
    "carMotor.menus.color": "זיהוי צבע",
    "carMotor.menus.image": "זיהוי תמונה",
    "carMotor.menus.color_red": "מעקב צבע: אדום",
    "carMotor.menus.color_blue": "מעקב צבע: כחול",
    "carMotor.menus.color_green": "מעקב צבע: ירוק",
    "carMotor.menus.visionModuleLine": "מעקב קו ויזואלי",
    "carMotor.menus.trafficIdentification": "זיהוי תנועה",
    "carMotor.menus.machineLearning": "למידת מכונה",
    "carMotor.menus.face": "זיהוי פנים",
    "carMotor.menus.photograph": "צילום",
    "carMotor.menus.x": "קואורדינטת x",
    "carMotor.menus.y": "קואורדינטת y",
    "carMotor.menus.width": "רוחב",
    "carMotor.menus.height": "גובה",
    "carMotor.menus.result": "תוצאת זיהוי",
    "carMotor.menus.lineData": "תוצאת מעקב קו",
    "carMotor.menus.QVGA": "רזולוציה גבוהה",
    "carMotor.menus.QQVGA": "רזולוציה נמוכה",
    "carMotor.menus.red": "אדום",
    "carMotor.menus.blue": "כחול",
    "carMotor.menus.green": "ירוק",
    "arm_car.ai_mode_init": "אתחול מודול ראייה [ONE][TWO]",
    "arm_car.ai_mode_return": "מודול ראייה חזרה לתפריט הראשי",
    "arm_car.ai_mode_set_color": "מודול ראייה הגדרת r[ONE] g[TWO] b[THREE]",
    "arm_car.color_appoint_recognize": "זיהוי צבע [ONE]",
    "carMotor.menus.anyColor": "כל צבע",
    "carMotor.menus.exit": "יציאה",
    "carMotor.menus.Traffic_recognize_card": "זיהוי תנועה: כרטיס",
    "carMotor.menus.Traffic_recognize_signPlate": "זיהוי תנועה: שלט",
    "mechanicalArm.armDefaultMotion": "מצב זיכרון [ONE]"
  }
}

const interfaceData = {
  "zh-cn": {

  },
  "he": {
    "gui.modify.notConnectd": "לא מחובר",
    "gui.modify.onLineMode": "מצב בזמן אמת",
    "gui.modify.uploadMode": "מצב העלאה",
    "gui.modify.autoGenerate": "יצירה אוטומטית",
    "gui.modify.manualEditing": "עריכה ידנית",
    "gui.modify.upload": "העלה למכשיר",
    "gui.modify.openSerial": "פתח פורט סידורי",
    "gui.modify.closeSerial": "סגור פורט סידורי",
    "gui.modify.clearOutput": "נקה פלט",
    "gui.modify.Send": "שלח",
    "gui.modify.hexForm": "מערכת הקס",
    "gui.modify.lineFeed": "תו מעבר שורה",
    "gui.modify.noLineTerminators": "ללא תו סיום",
    "gui.modify.carriageReturn": "החזרת סמן",
    "gui.modify.LFAndCR": "החזרת סמן + מעבר שורה",
    "gui.modify.uploadProgress": "התקדמות העלאה",
    "gui.modify.uploadFailure": "העלאה נכשלה, בדוק פרטים בפינה הימנית התחתונה!",
    "gui.modify.completeBurning": "תכנות הושלם",
    "gui.modify.burning": "מתכנת, אנא המתן...",
    "gui.modify.BurningSuccessful": "תכנות הצליח",
    "gui.modify.burningFailure": "תכנות נכשל",
    "gui.modify.baudRate": "קצב העברת נתונים (baud)",
    "gui.modify.displayStage": "הצג במה",
    "gui.modify.hiddenStage": "הסתר במה",
    "gui.modify.noDevicesWereFound": "לא נמצאו מכשירים",
    "gui.modify.note": "הערה",
    "gui.modify.noteMessage": "האם לשמור את הפרויקט הנוכחי?",
    "gui.modify.save": "שמור",
    "gui.modify.notSave": "אל תשמור",
    "gui.modify.newVersion": "גרסה חדשה: V",
    "gui.modify.updateLater": "עדכן מאוחר יותר",
    "gui.modify.updateNow": "עדכן עכשיו",
    "gui.modify.uploadConnect": "אנא חבר תחילה למכשיר",
    "gui.extension.facial_recognition": "זיהוי פנים",
    "gui.modify.textType": "ערך טקסט",
    "gui.modify.numberType": "ערך מספרי",
    "gui.extension.knn.machineLearning": "למידת מכונה",
    "gui.extension.weather.getWeather": "קבל מזג אוויר",
    "gui.extension.weather.description": "קבלת מידע על מזג אוויר דרך האינטרנט, המחשב חייב להיות מחובר לרשת",
    "gui.extension.gestureRecognition": "זיהוי מחוות",
    "gui.extension.gestureRecognition.description": "זיהוי מחוות דרך מצלמת רשת",
    "gui.modify.runPythonCode": "הפעל תוכנית",
    "gui.extension.carMotor": "רובוט חכם",
    "gui.extension.fourLeggedBionicSpider": "עכביש ביוני ארבע רגליים",
    "gui.extension.arm": "זרוע רובוטית",
    "gui.modify.searchBlock": "חפש בלוקים",
    "gui.modify.searchButton": "חיפוש בלוקים",
    "gui.extension.bipedRobot.description": "רובוט דו-רגלי המדמה הליכה של רגליים אנושיות, כולל שליטה על איזון ותנועה עצמאית.",
    "gui.modify.installTheDriver": "התקן דרייבר פורט סידורי בלחיצה אחת",
    "gui.extension.meteorologicalStation": "תחנת מטאורולוגיה",
    "gui.extension.chart": "תרשימים",
    "gui.extension.smartHome.name": "בית חכם",
    "gui.extension.smartFarm.name": "חווה חכמה",
    "gui.extension.bluetoothController.name": "שלט Bluetooth",
    "gui.modify.createSDK": "\nמייצר SDK, ייקח 1-3 דקות, אנא המתן......",
    "gui.modify.createSDKing": "ביצוע, ייקח 1-3 דקות, אנא המתן......",
    "gui.modify.SDKSuccess": "\nSDK נוצר בהצלחה\nמתחיל יצירת קושחה......",
    "gui.modify.createError": "\nיצירה נכשלה, יתכן שגיאה בהגדרות, בדוק את ההגדרות",
    "gui.modify.createFirmwareing": "\nיוצר קושחה......",
    "gui.modify.firmwareSuccess": "\nקושחה נוצרה בהצלחה......",
    "gui.modify.SDKing": "\nיוצר SDK......",
    "gui.modify.createFirmware": "צור קושחה",
    "gui.extension.ASR.name": "זיהוי דיבור",
    "gui.extension.ASR.description": "יצירת קושחה לזיהוי דיבור והעלאה.",
    "gui.modify.parameter": "פרמטר",
    "gui.modify.ChoosRole": "בחר דמות",
    "gui.modify.cameraWindow": "חלון וידאו",
    "gui.modify.closeFace": "מעקב פנים סגור",
    "gui.modify.closeGender": "זיהוי מגדר סגור",
    "gui.modify.runSeccess": "הפעלה הצליחה",
    "gui.modify.runError": "הפעלה נכשלה",
    "gui.modify.runing": "מריץ",
    "gui.modify.keepSuccess": "שמירה הצליחה",
    "gui.modify.keepError": "שמירה נכשלה",
    "gui.modify.keepErrorInfo": "שמירת בלוקים נכשלה, בדוק את הבלוקים",
    "gui.modify.sampleProgram": "תוכנית לדוגמה",
    "gui.modify.jumpLink": "מסמכי הדרכה",
    "gui.extension.bluetoothControllerRealTime.name": "שלט מקוון",
    "gui.modify.sampleProgramErr": "תוכנית לדוגמה לא ניתנת לעריכה, שמור כקובץ חדש!",
    "gui.modify.microPython": "קושחת microPython",
    "gui.modify.mobile": "קושחת מובייל",
    "CATEGORY_ROBOTS_BLE": "Bluetooth נמוך צריכת אנרגיה",
    "gui.extension.PAW.name": "כפפת חישה תנועתית",
    "gui.modify.serialPortMappingInstrument": "מיפוי פורט סידורי",
    "gui.extension.carMotor.description": "רובוט חכם הוא רובוט נייד המשולב עם חיישנים ומערכת בקרה, יכול לבצע הימנעות ממכשולים, עקיבת קו ושליטה מרחוק.",
    "gui.extension.mechanicalArm.description": "ערכת זרוע רובוטית כוללת זרוע מתוכנתת המסוגלת לתפוס, להזיז ולהפעיל חפצים.",
    "gui.extension.meteorologicalStation.description": "ערכת תחנת מטאורולוגיה משלבת חיישנים סביבתיים שונים למעקב בזמן אמת אחר טמפרטורה, לחות, לחץ אוויר ומהירות רוח.",
    "gui.extension.smartHome.description": "ערכת בית חכם כוללת חיישנים ומכשירי בקרה שונים המסייעים לניהול חכם של סביבת הבית.",
    "gui.extension.smartFarm.description": "ערכת חווה חכמה היא מערכת המשולבת עם חיישנים ומכשירי בקרה אוטומטיים לניטור פרמטרים כמו קרקע, טמפרטורה ולחות.",
    "gui.extension.PAW.description": "כפפת חישה תנועתית היא מכשיר לביש המסוגל ללכוד תנועות ויציבים של היד באמצעות חיישנים.",
    "gui.extension.sharkbot.description": "רובוט כריש עם זיהוי דיבור",
    "gui.extension.bluetoothController.description": "מודול מקלט שלט אוניברסלי",
    "gui.extension.chart.description": "הצגת נתונים בגרפים",
    "gui.extension.facialRecognition.description": "ניטור פנים, זיהוי פנים, מעקב פנים וזיהוי מגדר",
    "gui.extension.knnClassifier.description": "אימון וזיהוי מודל סיווג תמונות",
    "gui.extension.fourLeggedBionicSpider.description": "ערכת עכביש ביוני ארבע רגליים היא רובוט המדמה תנועות עכביש, עם יכולת תנועה גמישה ודפוסי הליכה מגוונים.",
    "gui.extension.bipedRobot": "רובוט דו-רגלי"
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

