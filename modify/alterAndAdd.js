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
        "chart.categoryName": "数据图表",
        "chart.showChart": "打开图表窗口",
        "chart.setTitle": "设置图表标题[ONE]",
        "chart.setAxisTitle": "设置轴标题: x轴[ONE] y轴[TWO]",
        "chart.inputData": "输入[ONE]的数据: x轴[TWO] y轴[THREE]",
        "chart.clearData": "清除数据",
        "chart.closeChart": "关闭图表窗口",
    },
    "zh-tw": {
        "chart.categoryName": "數據圖表",
        "chart.showChart": "打開圖表窗口",
        "chart.setTitle": "設置圖表標題[ONE]",
        "chart.setAxisTitle": "設置軸標題: x軸[ONE] y軸[TWO]",
        "chart.inputData": "輸入[ONE]的數據: x軸[TWO] y軸[THREE]",
        "chart.clearData": "清除數據",
        "chart.closeChart": "關閉圖表窗口"
    },
    "en": {
        "chart.categoryName": "Data Chart",
        "chart.showChart": "Open Chart Window",
        "chart.setTitle": "Set Chart Title [ONE]",
        "chart.setAxisTitle": "Set Axis Titles: x-axis [ONE] y-axis [TWO]",
        "chart.inputData": "Input data for [ONE]: x-axis [TWO] y-axis [THREE]",
        "chart.clearData": "Clear Data",
        "chart.closeChart": "Close Chart Window"
    },
    "fr": {
        "chart.categoryName": "Graphique de Données",
        "chart.showChart": "Ouvrir la Fenêtre de Graphique",
        "chart.setTitle": "Définir le Titre du Graphique [ONE]",
        "chart.setAxisTitle": "Définir les Titres des Axes : axe des x [ONE] axe des y [TWO]",
        "chart.inputData": "Saisir les données pour [ONE] : axe des x [TWO] axe des y [THREE]",
        "chart.clearData": "Effacer les Données",
        "chart.closeChart": "Fermer la Fenêtre de Graphique"
    },
    "ja": {
        "chart.categoryName": "データチャート",
        "chart.showChart": "チャートウィンドウを開く",
        "chart.setTitle": "チャートタイトルを設定する[ONE]",
        "chart.setAxisTitle": "軸タイトルを設定する: x軸[ONE] y軸[TWO]",
        "chart.inputData": "[ONE]のデータを入力する: x軸[TWO] y軸[THREE]",
        "chart.clearData": "データをクリアする",
        "chart.closeChart": "チャートウィンドウを閉じる"
    },
    "de": {
        "chart.categoryName": "Daten Diagramm",
        "chart.showChart": "Diagrammfenster öffnen",
        "chart.setTitle": "Diagrammtitel festlegen [ONE]",
        "chart.setAxisTitle": "Achsentitel festlegen: x-Achse [ONE] y-Achse [TWO]",
        "chart.inputData": "Daten für [ONE] eingeben: x-Achse [TWO] y-Achse [THREE]",
        "chart.clearData": "Daten löschen",
        "chart.closeChart": "Diagrammfenster schließen"
    },
    "es": {
        "chart.categoryName": "Gráfico de Datos",
        "chart.showChart": "Abrir Ventana de Gráfico",
        "chart.setTitle": "Establecer Título del Gráfico [ONE]",
        "chart.setAxisTitle": "Establecer Títulos de Ejes: eje x [ONE] eje y [TWO]",
        "chart.inputData": "Ingresar datos para [ONE]: eje x [TWO] eje y [THREE]",
        "chart.clearData": "Borrar Datos",
        "chart.closeChart": "Cerrar Ventana de Gráfico"
    },
    "ru": {
        "chart.categoryName": "График данных",
        "chart.showChart": "Открыть окно графика",
        "chart.setTitle": "Задать название графика [ONE]",
        "chart.setAxisTitle": "Задать названия осей: ось x [ONE] ось y [TWO]",
        "chart.inputData": "Ввести данные для [ONE]: ось x [TWO] ось y [THREE]",
        "chart.clearData": "Очистить данные",
        "chart.closeChart": "Закрыть окно графика"
    },
    "cs": {
        "chart.categoryName": "Datový Graf",
        "chart.showChart": "Otevřít okno grafu",
        "chart.setTitle": "Nastavit název grafu [ONE]",
        "chart.setAxisTitle": "Nastavit názvy os: osa x [ONE] osa y [TWO]",
        "chart.inputData": "Zadat data pro [ONE]: osa x [TWO] osa y [THREE]",
        "chart.clearData": "Vymazat data",
        "chart.closeChart": "Zavřít okno grafu"
    },
    "it": {
        "chart.categoryName": "Grafico Dati",
        "chart.showChart": "Apri Finestra Grafico",
        "chart.setTitle": "Imposta Titolo del Grafico [ONE]",
        "chart.setAxisTitle": "Imposta Titoli degli Assi: asse x [ONE] asse y [TWO]",
        "chart.inputData": "Inserisci dati per [ONE]: asse x [TWO] asse y [THREE]",
        "chart.clearData": "Cancella Dati",
        "chart.closeChart": "Chiudi Finestra Grafico"
    },
    "pl": {
        "chart.categoryName": "Wykres Danych",
        "chart.showChart": "Otwórz okno wykresu",
        "chart.setTitle": "Ustaw tytuł wykresu [ONE]",
        "chart.setAxisTitle": "Ustaw tytuły osi: oś x [ONE] oś y [TWO]",
        "chart.inputData": "Wprowadź dane dla [ONE]: oś x [TWO] oś y [THREE]",
        "chart.clearData": "Wyczyść dane",
        "chart.closeChart": "Zamknij okno wykresu"
    },
    "tr": {
        "chart.categoryName": "Veri Grafiği",
        "chart.showChart": "Grafik Penceresini Aç",
        "chart.setTitle": "Grafik Başlığını Ayarla [ONE]",
        "chart.setAxisTitle": "Eksen Başlıklarını Ayarla: x ekseni [ONE] y ekseni [TWO]",
        "chart.inputData": "[ONE] için veri girin: x ekseni [TWO] y ekseni [THREE]",
        "chart.clearData": "Verileri Temizle",
        "chart.closeChart": "Grafik Penceresini Kapat"
    },
    "pt": {
        "chart.categoryName": "Gráfico de Dados",
        "chart.showChart": "Abrir Janela do Gráfico",
        "chart.setTitle": "Definir Título do Gráfico [ONE]",
        "chart.setAxisTitle": "Definir Títulos dos Eixos: eixo x [ONE] eixo y [TWO]",
        "chart.inputData": "Inserir dados para [ONE]: eixo x [TWO] eixo y [THREE]",
        "chart.clearData": "Limpar Dados",
        "chart.closeChart": "Fechar Janela do Gráfico"
    },
    "hr": {
        "chart.categoryName": "Graf Podataka",
        "chart.showChart": "Otvori prozor grafikona",
        "chart.setTitle": "Postavi naslov grafikona [ONE]",
        "chart.setAxisTitle": "Postavi naslove osi: x-os [ONE] y-os [TWO]",
        "chart.inputData": "Unesi podatke za [ONE]: x-os [TWO] y-os [THREE]",
        "chart.clearData": "Očisti podatke",
        "chart.closeChart": "Zatvori prozor grafikona"
    },
    "ko": {
        "chart.categoryName": "데이터 차트",
        "chart.showChart": "차트 창 열기",
        "chart.setTitle": "차트 제목 설정 [ONE]",
        "chart.setAxisTitle": "축 제목 설정: x축 [ONE] y축 [TWO]",
        "chart.inputData": "[ONE]에 대한 데이터 입력: x축 [TWO] y축 [THREE]",
        "chart.clearData": "데이터 지우기",
        "chart.closeChart": "차트 창 닫기"
    },
    "th": {
        "chart.categoryName": "แผนภูมิข้อมูล",
        "chart.showChart": "เปิดหน้าต่างแผนภูมิ",
        "chart.setTitle": "ตั้งชื่อแผนภูมิ [ONE]",
        "chart.setAxisTitle": "ตั้งชื่อแกน: แกน x [ONE] แกน y [TWO]",
        "chart.inputData": "ป้อนข้อมูลสำหรับ [ONE]: แกน x [TWO] แกน y [THREE]",
        "chart.clearData": "ล้างข้อมูล",
        "chart.closeChart": "ปิดหน้าต่างแผนภูมิ"
    },
    "nl": {
        "chart.categoryName": "Data Grafiek",
        "chart.showChart": "Grafiekvenster openen",
        "chart.setTitle": "Grafiektitel instellen [ONE]",
        "chart.setAxisTitle": "As-titels instellen: x-as [ONE] y-as [TWO]",
        "chart.inputData": "Gegevens invoeren voor [ONE]: x-as [TWO] y-as [THREE]",
        "chart.clearData": "Gegevens wissen",
        "chart.closeChart": "Grafiekvenster sluiten"
    },
    "ar": {
        "chart.categoryName": "مخطط البيانات",
        "chart.showChart": "فتح نافذة المخطط",
        "chart.setTitle": "تعيين عنوان المخطط [ONE]",
        "chart.setAxisTitle": "تعيين عناوين المحاور: المحور x [ONE] المحور y [TWO]",
        "chart.inputData": "إدخال بيانات [ONE]: المحور x [TWO] المحور y [THREE]",
        "chart.clearData": "مسح البيانات",
        "chart.closeChart": "إغلاق نافذة المخطط"
    }
}

const interfaceData = {
    "zh-cn": {
        "gui.extension.chart": "数据图表"
    },
    "zh-tw": {
        "gui.extension.chart": "數據圖表"
    },
    "en": {
        "gui.extension.chart": "Data Chart"
    },
    "fr": {
        "gui.extension.chart": "Graphique de Données"
    },
    "ja": {
        "gui.extension.chart": "データチャート"
    },
    "de": {
        "gui.extension.chart": "Daten Diagramm"
    },
    "es": {
        "gui.extension.chart": "Gráfico de Datos"
    },
    "ru": {
        "gui.extension.chart": "График данных"
    },
    "cs": {
        "gui.extension.chart": "Datový Graf"
    },
    "it": {
        "gui.extension.chart": "Grafico Dati"
    },
    "pl": {
        "gui.extension.chart": "Wykres Danych"
    },
    "tr": {
        "gui.extension.chart": "Veri Grafiği"
    },
    "pt": {
        "gui.extension.chart": "Gráfico de Dados"
    },
    "hr": {
        "gui.extension.chart": "Graf Podataka"
    },
    "ko": {
        "gui.extension.chart": "데이터 차트"
    },
    "th": {
        "gui.extension.chart": "แผนภูมิข้อมูล"
    },
    "nl": {
        "gui.extension.chart": "Data Grafiek"
    },
    "ar": {
        "gui.extension.chart": "مخطط البيانات"
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

