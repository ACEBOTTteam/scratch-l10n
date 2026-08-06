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
    "chatbot.menu.img": "图像识别",
    "chatbot.menu.classicFont": "经典字体",
    "chatbot.menu.smallFont": "小字体",
    "chatbot.menu.mediumFont": "中字体",
    "chatbot.menu.h": "色块高度",
    "chatbot.setFont": "设置屏幕文字 字体[ONE]大小[TWO]颜色 red[THREE] green[FOUR] blue[FIVE]",
  },

  "zh-tw": {
    "chatbot.menu.img": "圖像識別",
    "chatbot.menu.classicFont": "經典字體",
    "chatbot.menu.smallFont": "小字體",
    "chatbot.menu.mediumFont": "中字體",
    "chatbot.menu.h": "色塊高度",
    "chatbot.setFont": "設置屏幕文字 字體[ONE]大小[TWO]顏色 red[THREE] green[FOUR] blue[FIVE]"
  },
  "en": {
    "chatbot.menu.img": "image iecognition",
    "chatbot.menu.classicFont": "classic font",
    "chatbot.menu.smallFont": "small Font",
    "chatbot.menu.mediumFont": "medium font",
    "chatbot.menu.h": "color block height",
    "chatbot.setFont": "set screen text font[ONE] size[TWO] color red[THREE] green[FOUR] blue[FIVE]"
  },
  "fr": {
    "chatbot.menu.img": "Reconnaissance d'image",
    "chatbot.menu.classicFont": "Police classique",
    "chatbot.menu.smallFont": "Petite police",
    "chatbot.menu.mediumFont": "Police moyenne",
    "chatbot.menu.h": "Hauteur du bloc de couleur",
    "chatbot.setFont": "Définir le texte de l'écran police[ONE] taille[TWO] couleur red[THREE] green[FOUR] blue[FIVE]"
  },
  "ja": {
    "chatbot.menu.img": "画像認識",
    "chatbot.menu.classicFont": "クラシックフォント",
    "chatbot.menu.smallFont": "小フォント",
    "chatbot.menu.mediumFont": "中フォント",
    "chatbot.menu.h": "色ブロックの高さ",
    "chatbot.setFont": "画面テキストを設定 フォント[ONE] サイズ[TWO] 色 red[THREE] green[FOUR] blue[FIVE]"
  },
  "de": {
    "chatbot.menu.img": "Bilderkennung",
    "chatbot.menu.classicFont": "Klassische Schriftart",
    "chatbot.menu.smallFont": "Kleine Schriftart",
    "chatbot.menu.mediumFont": "Mittlere Schriftart",
    "chatbot.menu.h": "Farbblockhöhe",
    "chatbot.setFont": "Bildschirmtext einstellen Schriftart[ONE] Größe[TWO] Farbe red[THREE] green[FOUR] blue[FIVE]"
  },
  "es": {
    "chatbot.menu.img": "Reconocimiento de imagen",
    "chatbot.menu.classicFont": "Fuente clásica",
    "chatbot.menu.smallFont": "Fuente pequeña",
    "chatbot.menu.mediumFont": "Fuente mediana",
    "chatbot.menu.h": "Altura del bloque de color",
    "chatbot.setFont": "Establecer texto en pantalla fuente[ONE] tamaño[TWO] color red[THREE] green[FOUR] blue[FIVE]"
  },
  "ru": {
    "chatbot.menu.img": "Распознавание изображений",
    "chatbot.menu.classicFont": "Классический шрифт",
    "chatbot.menu.smallFont": "Мелкий шрифт",
    "chatbot.menu.mediumFont": "Средний шрифт",
    "chatbot.menu.h": "Высота цветового блока",
    "chatbot.setFont": "Установить текст на экране шрифт[ONE] размер[TWO] цвет red[THREE] green[FOUR] blue[FIVE]"
  },
  "cs": {
    "chatbot.menu.img": "Rozpoznávání obrázků",
    "chatbot.menu.classicFont": "Klasické písmo",
    "chatbot.menu.smallFont": "Malé písmo",
    "chatbot.menu.mediumFont": "Střední písmo",
    "chatbot.menu.h": "Výška barevného bloku",
    "chatbot.setFont": "Nastavit text na obrazovce písmo[ONE] velikost[TWO] barva red[THREE] green[FOUR] blue[FIVE]"
  },
  "it": {
    "chatbot.menu.img": "Riconoscimento immagini",
    "chatbot.menu.classicFont": "Carattere classico",
    "chatbot.menu.smallFont": "Carattere piccolo",
    "chatbot.menu.mediumFont": "Carattere medio",
    "chatbot.menu.h": "Altezza del blocco colore",
    "chatbot.setFont": "Imposta testo sullo schermo font[ONE] dimensione[TWO] colore red[THREE] green[FOUR] blue[FIVE]"
  },
  "pl": {
    "chatbot.menu.img": "Rozpoznawanie obrazów",
    "chatbot.menu.classicFont": "Klasyczna czcionka",
    "chatbot.menu.smallFont": "Mała czcionka",
    "chatbot.menu.mediumFont": "Średnia czcionka",
    "chatbot.menu.h": "Wysokość bloku koloru",
    "chatbot.setFont": "Ustaw tekst na ekranie czcionka[ONE] rozmiar[TWO] kolor red[THREE] green[FOUR] blue[FIVE]"
  },
  "tr": {
    "chatbot.menu.img": "Görüntü Tanıma",
    "chatbot.menu.classicFont": "Klasik Yazı Tipi",
    "chatbot.menu.smallFont": "Küçük Yazı Tipi",
    "chatbot.menu.mediumFont": "Orta Yazı Tipi",
    "chatbot.menu.h": "Renk Bloğu Yüksekliği",
    "chatbot.setFont": "Ekran metnini ayarla yazı tipi[ONE] boyut[TWO] renk red[THREE] green[FOUR] blue[FIVE]"
  },
  "pt": {
    "chatbot.menu.img": "Reconhecimento de imagem",
    "chatbot.menu.classicFont": "Fonte clássica",
    "chatbot.menu.smallFont": "Fonte pequena",
    "chatbot.menu.mediumFont": "Fonte média",
    "chatbot.menu.h": "Altura do bloco de cor",
    "chatbot.setFont": "Definir texto na tela fonte[ONE] tamanho[TWO] cor red[THREE] green[FOUR] blue[FIVE]"
  },
  "hr": {
    "chatbot.menu.img": "Prepoznavanje slika",
    "chatbot.menu.classicFont": "Klasični font",
    "chatbot.menu.smallFont": "Mali font",
    "chatbot.menu.mediumFont": "Srednji font",
    "chatbot.menu.h": "Visina bloka boje",
    "chatbot.setFont": "Postavi tekst na zaslonu font[ONE] veličina[TWO] boja red[THREE] green[FOUR] blue[FIVE]"
  },
  "hi": {
    "chatbot.menu.img": "छवि पहचान",
    "chatbot.menu.classicFont": "क्लासिक फ़ॉन्ट",
    "chatbot.menu.smallFont": "छोटा फ़ॉन्ट",
    "chatbot.menu.mediumFont": "मध्यम फ़ॉन्ट",
    "chatbot.menu.h": "रंग ब्लॉक ऊंचाई",
    "chatbot.setFont": "स्क्रीन टेक्स्ट सेट करें फ़ॉन्ट[ONE] आकार[TWO] रंग red[THREE] green[FOUR] blue[FIVE]"
  },
  "ko": {
    "chatbot.menu.img": "이미지 인식",
    "chatbot.menu.classicFont": "클래식 폰트",
    "chatbot.menu.smallFont": "작은 폰트",
    "chatbot.menu.mediumFont": "중간 폰트",
    "chatbot.menu.h": "색상 블록 높이",
    "chatbot.setFont": "화면 텍스트 설정 폰트[ONE] 크기[TWO] 색상 red[THREE] green[FOUR] blue[FIVE]"
  },
  "th": {
    "chatbot.menu.img": "การรู้จำภาพ",
    "chatbot.menu.classicFont": "แบบอักษรคลาสสิก",
    "chatbot.menu.smallFont": "แบบอักษรเล็ก",
    "chatbot.menu.mediumFont": "แบบอักษรกลาง",
    "chatbot.menu.h": "ความสูงของบล็อกสี",
    "chatbot.setFont": "ตั้งค่าข้อความบนหน้าจอ แบบอักษร[ONE] ขนาด[TWO] สี red[THREE] green[FOUR] blue[FIVE]"
  },
  "nl": {
    "chatbot.menu.img": "Beeldherkenning",
    "chatbot.menu.classicFont": "Klassiek lettertype",
    "chatbot.menu.smallFont": "Klein lettertype",
    "chatbot.menu.mediumFont": "Middelgroot lettertype",
    "chatbot.menu.h": "Kleurblokhoogte",
    "chatbot.setFont": "Schermtekst instellen lettertype[ONE] grootte[TWO] kleur red[THREE] green[FOUR] blue[FIVE]"
  },
  "ar": {
    "chatbot.menu.img": "التعرف على الصور",
    "chatbot.menu.classicFont": "خط كلاسيكي",
    "chatbot.menu.smallFont": "خط صغير",
    "chatbot.menu.mediumFont": "خط متوسط",
    "chatbot.menu.h": "ارتفاع كتلة اللون",
    "chatbot.setFont": "تعيين نص الشاشة خط[ONE] حجم[TWO] لون red[THREE] green[FOUR] blue[FIVE]"
  },
  "vi": {
    "chatbot.menu.img": "Nhận dạng hình ảnh",
    "chatbot.menu.classicFont": "Phông chữ cổ điển",
    "chatbot.menu.smallFont": "Phông chữ nhỏ",
    "chatbot.menu.mediumFont": "Phông chữ trung bình",
    "chatbot.menu.h": "Chiều cao khối màu",
    "chatbot.setFont": "Đặt văn bản màn hình phông chữ[ONE] kích thước[TWO] màu red[THREE] green[FOUR] blue[FIVE]"
  },
  "he": {
    "chatbot.menu.img": "זיהוי תמונה",
    "chatbot.menu.classicFont": "גופן קלאסי",
    "chatbot.menu.smallFont": "גופן קטן",
    "chatbot.menu.mediumFont": "גופן בינוני",
    "chatbot.menu.h": "גובה בלוק הצבע",
    "chatbot.setFont": "הגדר טקסט על המסך גופן[ONE] גודל[TWO] צבע red[THREE] green[FOUR] blue[FIVE]"
  }

}

const interfaceData = {
  "zh-cn": {
    "gui.AIModel.import.errModel": "导入了无法识别的模型",
    "gui.AIModel.audio.sampleSize": "共采集音频样本：",
    "gui.AIModel.audio.stopTranscribe": "按下停止录制",
    "gui.AIModel.audio.transcribe": "按下开始录制",
    "gui.AIModel.train.period": "一个周期是指训练数据集中的每个样本都已至少向训练模型馈送一次。例如，如果您的周期设为 50，则表示您正在训练的模型会处理整个训练数据集 50 次。一般情况下，该数值越大，您的模型学习预测数据的效果越好。",
    "gui.AIModel.train.batch": "批次是指在训练的一次迭代中使用的一组样本。例如，假设您有 80 张图片，并将批次大小设为 16。这意味着，数据将拆分为 80 / 16 = 5 个批次。所有这 5 个批次都已馈送到模型后，正好完成一个周期。",
    "gui.AIModel.train.learningRate": "请谨慎微调此数值！即使较小的差异也可能会对模型学习效果产生很大的影响。",
  },

  "zh-tw": {
    "gui.AIModel.import.errModel": "匯入了無法識別的模型",
    "gui.AIModel.audio.sampleSize": "共採集音頻樣本：",
    "gui.AIModel.audio.stopTranscribe": "按下停止錄製",
    "gui.AIModel.audio.transcribe": "按下開始錄製",
    "gui.AIModel.train.period": "一個週期是指訓練數據集中的每個樣本都已至少向訓練模型饋送一次。例如，如果您的週期設為 50，則表示您正在訓練的模型會處理整個訓練數據集 50 次。一般情況下，該數值越大，您的模型學習預測數據的效果越好。",
    "gui.AIModel.train.batch": "批次是指在訓練的一次迭代中使用的一組樣本。例如，假設您有 80 張圖片，並將批次大小設為 16。這意味著，數據將拆分為 80 / 16 = 5 個批次。所有這 5 個批次都已饋送到模型後，正好完成一個週期。",
    "gui.AIModel.train.learningRate": "請謹慎微調此數值！即使較小的差異也可能會對模型學習效果產生很大的影響。"
  },
  "en": {
    "gui.AIModel.import.errModel": "Imported an unrecognized model",
    "gui.AIModel.audio.sampleSize": "Total audio samples collected:",
    "gui.AIModel.audio.stopTranscribe": "Press to stop recording",
    "gui.AIModel.audio.transcribe": "Press to start recording",
    "gui.AIModel.train.period": "An epoch means that each sample in the training dataset has been fed to the training model at least once. For example, if your epoch is set to 50, it means the model you are training will process the entire training dataset 50 times. Generally, the larger this value, the better your model learns to predict the data.",
    "gui.AIModel.train.batch": "A batch is a set of samples used in one iteration of training. For example, suppose you have 80 images and set the batch size to 16. This means the data will be split into 80 / 16 = 5 batches. After all these 5 batches have been fed to the model, exactly one epoch is completed.",
    "gui.AIModel.train.learningRate": "Please fine-tune this value carefully! Even small differences can have a large impact on your model's learning effectiveness."
  },
  "fr": {
    "gui.AIModel.import.errModel": "Modèle non reconnu importé",
    "gui.AIModel.audio.sampleSize": "Total des échantillons audio collectés :",
    "gui.AIModel.audio.stopTranscribe": "Appuyez pour arrêter l'enregistrement",
    "gui.AIModel.audio.transcribe": "Appuyez pour démarrer l'enregistrement",
    "gui.AIModel.train.period": "Une époque signifie que chaque échantillon de l'ensemble de données d'entraînement a été envoyé au moins une fois au modèle en cours d'entraînement. Par exemple, si votre époque est définie sur 50, cela signifie que le modèle que vous entraînez traitera l'ensemble du jeu de données d'entraînement 50 fois. En général, plus cette valeur est grande, mieux votre modèle apprend à prédire les données.",
    "gui.AIModel.train.batch": "Un lot est un ensemble d'échantillons utilisé lors d'une itération d'entraînement. Par exemple, supposons que vous ayez 80 images et que vous définissiez la taille du lot sur 16. Cela signifie que les données seront divisées en 80 / 16 = 5 lots. Une fois que ces 5 lots ont été envoyés au modèle, une époque est terminée.",
    "gui.AIModel.train.learningRate": "Veuillez ajuster cette valeur avec précaution ! Même de petites différences peuvent avoir un impact important sur l'efficacité de l'apprentissage de votre modèle."
  },
  "ja": {
    "gui.AIModel.import.errModel": "認識できないモデルをインポートしました",
    "gui.AIModel.audio.sampleSize": "収集した音声サンプル数：",
    "gui.AIModel.audio.stopTranscribe": "録音を停止するには押してください",
    "gui.AIModel.audio.transcribe": "録音を開始するには押してください",
    "gui.AIModel.train.period": "1エポックとは、トレーニングデータセット内の各サンプルがトレーニングモデルに少なくとも1回は送られたことを意味します。例えば、エポックを50に設定した場合、トレーニング中のモデルがトレーニングデータセット全体を50回処理することを意味します。一般的に、この値が大きいほど、モデルがデータを予測する学習効果が向上します。",
    "gui.AIModel.train.batch": "バッチは、トレーニングの1回のイテレーションで使用されるサンプルのセットです。例えば、80枚の画像があり、バッチサイズを16に設定したとします。これは、データが80 / 16 = 5つのバッチに分割されることを意味します。これら5つのバッチすべてがモデルに送られると、ちょうど1エポックが完了します。",
    "gui.AIModel.train.learningRate": "この値の調整には注意してください！小さな違いでも、モデルの学習効果に大きな影響を与える可能性があります。"
  },
  "de": {
    "gui.AIModel.import.errModel": "Ein nicht erkanntes Modell wurde importiert",
    "gui.AIModel.audio.sampleSize": "Insgesamt gesammelte Audio-Beispiele:",
    "gui.AIModel.audio.stopTranscribe": "Zum Stoppen der Aufnahme drücken",
    "gui.AIModel.audio.transcribe": "Zum Starten der Aufnahme drücken",
    "gui.AIModel.train.period": "Eine Epoche bedeutet, dass jedes Sample im Trainingsdatensatz mindestens einmal an das Trainingsmodell übergeben wurde. Wenn Ihre Epoche beispielsweise auf 50 gesetzt ist, bedeutet dies, dass das Modell, das Sie trainieren, den gesamten Trainingsdatensatz 50-mal verarbeitet. Im Allgemeinen gilt: Je größer dieser Wert, desto besser lernt Ihr Modell, die Daten vorherzusagen.",
    "gui.AIModel.train.batch": "Ein Batch ist eine Gruppe von Samples, die in einer Trainingsiteration verwendet wird. Angenommen, Sie haben 80 Bilder und setzen die Batch-Größe auf 16. Das bedeutet, dass die Daten in 80 / 16 = 5 Batches aufgeteilt werden. Nachdem alle diese 5 Batches an das Modell übergeben wurden, ist genau eine Epoche abgeschlossen.",
    "gui.AIModel.train.learningRate": "Bitte passen Sie diesen Wert vorsichtig an! Selbst kleine Unterschiede können einen großen Einfluss auf die Lernfähigkeit Ihres Modells haben."
  },
  "es": {
    "gui.AIModel.import.errModel": "Se importó un modelo no reconocido",
    "gui.AIModel.audio.sampleSize": "Total de muestras de audio recopiladas:",
    "gui.AIModel.audio.stopTranscribe": "Presione para detener la grabación",
    "gui.AIModel.audio.transcribe": "Presione para iniciar la grabación",
    "gui.AIModel.train.period": "Una época significa que cada muestra del conjunto de datos de entrenamiento se ha alimentado al modelo de entrenamiento al menos una vez. Por ejemplo, si su época está configurada en 50, significa que el modelo que está entrenando procesará todo el conjunto de datos de entrenamiento 50 veces. En general, cuanto mayor sea este valor, mejor aprenderá su modelo a predecir los datos.",
    "gui.AIModel.train.batch": "Un lote es un conjunto de muestras utilizado en una iteración de entrenamiento. Por ejemplo, supongamos que tiene 80 imágenes y establece el tamaño del lote en 16. Esto significa que los datos se dividirán en 80 / 16 = 5 lotes. Después de que todos estos 5 lotes se hayan alimentado al modelo, se completa exactamente una época.",
    "gui.AIModel.train.learningRate": "¡Ajuste este valor con cuidado! Incluso pequeñas diferencias pueden tener un gran impacto en la efectividad del aprendizaje de su modelo."
  },
  "ru": {
    "gui.AIModel.import.errModel": "Импортирована нераспознанная модель",
    "gui.AIModel.audio.sampleSize": "Всего собрано аудиообразцов:",
    "gui.AIModel.audio.stopTranscribe": "Нажмите для остановки записи",
    "gui.AIModel.audio.transcribe": "Нажмите для начала записи",
    "gui.AIModel.train.period": "Эпоха означает, что каждый образец из обучающего набора данных был подан в обучаемую модель как минимум один раз. Например, если ваша эпоха установлена на 50, это означает, что модель, которую вы обучаете, обработает весь набор обучающих данных 50 раз. Как правило, чем больше это значение, тем лучше ваша модель учится прогнозировать данные.",
    "gui.AIModel.train.batch": "Пакет — это набор образцов, используемых за одну итерацию обучения. Например, предположим, у вас есть 80 изображений, и вы устанавливаете размер пакета на 16. Это означает, что данные будут разделены на 80 / 16 = 5 пакетов. После того как все эти 5 пакетов поданы в модель, завершается ровно одна эпоха.",
    "gui.AIModel.train.learningRate": "Настраивайте это значение осторожно! Даже небольшие различия могут сильно повлиять на эффективность обучения вашей модели."
  },
  "cs": {
    "gui.AIModel.import.errModel": "Importován nerozpoznatelný model",
    "gui.AIModel.audio.sampleSize": "Celkem shromážděných zvukových vzorků:",
    "gui.AIModel.audio.stopTranscribe": "Stiskněte pro zastavení nahrávání",
    "gui.AIModel.audio.transcribe": "Stiskněte pro zahájení nahrávání",
    "gui.AIModel.train.period": "Epocha znamená, že každý vzorek v trénovací datové sadě byl alespoň jednou předložen trénovanému modelu. Například pokud je vaše epocha nastavena na 50, znamená to, že model, který trénujete, zpracuje celou trénovací datovou sadu 50krát. Obecně platí, že čím větší je tato hodnota, tím lépe se váš model učí předpovídat data.",
    "gui.AIModel.train.batch": "Dávka je sada vzorků použitých v jedné iteraci tréninku. Předpokládejme například, že máte 80 obrázků a nastavíte velikost dávky na 16. To znamená, že data budou rozdělena na 80 / 16 = 5 dávek. Poté, co jsou všechny tyto 5 dávek předloženy modelu, je dokončena přesně jedna epocha.",
    "gui.AIModel.train.learningRate": "Tuto hodnotu upravujte opatrně! I malé rozdíly mohou mít velký vliv na efektivitu učení vašeho modelu."
  },
  "it": {
    "gui.AIModel.import.errModel": "Importato un modello non riconosciuto",
    "gui.AIModel.audio.sampleSize": "Campioni audio totali raccolti:",
    "gui.AIModel.audio.stopTranscribe": "Premere per interrompere la registrazione",
    "gui.AIModel.audio.transcribe": "Premere per avviare la registrazione",
    "gui.AIModel.train.period": "Un'epoca significa che ogni campione nel set di dati di addestramento è stato fornito al modello in addestramento almeno una volta. Ad esempio, se la tua epoca è impostata su 50, significa che il modello che stai addestrando elaborerà l'intero set di dati di addestramento 50 volte. In generale, maggiore è questo valore, meglio il tuo modello impara a prevedere i dati.",
    "gui.AIModel.train.batch": "Un batch è un insieme di campioni utilizzati in una iterazione di addestramento. Ad esempio, supponiamo che tu abbia 80 immagini e imposti la dimensione del batch a 16. Ciò significa che i dati saranno suddivisi in 80 / 16 = 5 batch. Dopo che tutti questi 5 batch sono stati forniti al modello, viene completata esattamente un'epoca.",
    "gui.AIModel.train.learningRate": "Si prega di regolare questo valore con cautela! Anche piccole differenze possono avere un grande impatto sull'efficacia dell'apprendimento del modello."
  },
  "pl": {
    "gui.AIModel.import.errModel": "Zaimportowano nierozpoznany model",
    "gui.AIModel.audio.sampleSize": "Łącznie zebranych próbek audio:",
    "gui.AIModel.audio.stopTranscribe": "Naciśnij, aby zatrzymać nagrywanie",
    "gui.AIModel.audio.transcribe": "Naciśnij, aby rozpocząć nagrywanie",
    "gui.AIModel.train.period": "Epoka oznacza, że każda próbka w zbiorze danych treningowych została przesłana do modelu co najmniej raz. Na przykład, jeśli epoka jest ustawiona na 50, oznacza to, że model przetworzy cały zbiór danych treningowych 50 razy. Ogólnie rzecz biorąc, im większa ta wartość, tym lepiej model uczy się przewidywać dane.",
    "gui.AIModel.train.batch": "Partia to zestaw próbek używanych w jednej iteracji treningu. Na przykład, załóżmy, że masz 80 obrazów i ustawiasz rozmiar partii na 16. Oznacza to, że dane zostaną podzielone na 80 / 16 = 5 partii. Po przesłaniu wszystkich 5 partii do modelu, kończy się dokładnie jedna epoka.",
    "gui.AIModel.train.learningRate": "Dostosuj tę wartość ostrożnie! Nawet małe różnice mogą mieć duży wpływ na skuteczność uczenia się modelu."
  },
  "tr": {
    "gui.AIModel.import.errModel": "Tanınmayan bir model içe aktarıldı",
    "gui.AIModel.audio.sampleSize": "Toplanan toplam ses örneği:",
    "gui.AIModel.audio.stopTranscribe": "Kaydı durdurmak için basın",
    "gui.AIModel.audio.transcribe": "Kayda başlamak için basın",
    "gui.AIModel.train.period": "Bir dönem, eğitim veri setindeki her örneğin eğitim modeline en az bir kez gönderildiği anlamına gelir. Örneğin, döneminiz 50 olarak ayarlandıysa, eğittiğiniz modelin tüm eğitim veri setini 50 kez işleyeceği anlamına gelir. Genel olarak, bu değer ne kadar büyük olursa, modeliniz verileri tahmin etmeyi o kadar iyi öğrenir.",
    "gui.AIModel.train.batch": "Parti, eğitimin bir iterasyonunda kullanılan bir grup örnektir. Örneğin, 80 resminiz olduğunu ve parti boyutunu 16 olarak ayarladığınızı varsayalım. Bu, verilerin 80 / 16 = 5 partiye bölüneceği anlamına gelir. Bu 5 partinin tamamı modele gönderildikten sonra, tam olarak bir dönem tamamlanır.",
    "gui.AIModel.train.learningRate": "Lütfen bu değeri dikkatlice ayarlayın! Küçük farklılıklar bile modelin öğrenme etkinliği üzerinde büyük bir etkiye sahip olabilir."
  },
  "pt": {
    "gui.AIModel.import.errModel": "Modelo não reconhecido importado",
    "gui.AIModel.audio.sampleSize": "Total de amostras de áudio coletadas:",
    "gui.AIModel.audio.stopTranscribe": "Pressione para parar a gravação",
    "gui.AIModel.audio.transcribe": "Pressione para iniciar a gravação",
    "gui.AIModel.train.period": "Uma época significa que cada amostra no conjunto de dados de treinamento foi alimentada ao modelo em treinamento pelo menos uma vez. Por exemplo, se sua época for definida como 50, isso significa que o modelo que você está treinando processará todo o conjunto de dados de treinamento 50 vezes. Em geral, quanto maior esse valor, melhor seu modelo aprende a prever os dados.",
    "gui.AIModel.train.batch": "Um lote é um conjunto de amostras usado em uma iteração de treinamento. Por exemplo, suponha que você tenha 80 imagens e defina o tamanho do lote como 16. Isso significa que os dados serão divididos em 80 / 16 = 5 lotes. Depois que todos esses 5 lotes forem alimentados ao modelo, exatamente uma época será concluída.",
    "gui.AIModel.train.learningRate": "Por favor, ajuste este valor com cuidado! Mesmo pequenas diferenças podem ter um grande impacto na eficácia de aprendizado do seu modelo."
  },
  "hr": {
    "gui.AIModel.import.errModel": "Uvezen neprepoznatljiv model",
    "gui.AIModel.audio.sampleSize": "Ukupno prikupljenih audio uzoraka:",
    "gui.AIModel.audio.stopTranscribe": "Pritisnite za zaustavljanje snimanja",
    "gui.AIModel.audio.transcribe": "Pritisnite za početak snimanja",
    "gui.AIModel.train.period": "Epoha znači da je svaki uzorak u skupu podataka za obuku barem jednom proslijeđen modelu koji se obučava. Na primjer, ako je vaša epoha postavljena na 50, to znači da će model koji trenirate obraditi cijeli skup podataka za obuku 50 puta. Općenito, što je veća ova vrijednost, vaš model bolje uči predviđati podatke.",
    "gui.AIModel.train.batch": "Šarža je skup uzoraka koji se koriste u jednoj iteraciji obuke. Na primjer, pretpostavimo da imate 80 slika i postavite veličinu šarže na 16. To znači da će se podaci podijeliti u 80 / 16 = 5 šarži. Nakon što se svih tih 5 šarži proslijedi modelu, završava se točno jedna epoha.",
    "gui.AIModel.train.learningRate": "Molimo pažljivo podesite ovu vrijednost! Čak i male razlike mogu imati veliki utjecaj na učinkovitost učenja vašeg modela."
  },
  "hi": {
    "gui.AIModel.import.errModel": "एक अपरिचित मॉडल आयात किया गया",
    "gui.AIModel.audio.sampleSize": "कुल एकत्रित ऑडियो नमूने:",
    "gui.AIModel.audio.stopTranscribe": "रिकॉर्डिंग रोकने के लिए दबाएं",
    "gui.AIModel.audio.transcribe": "रिकॉर्डिंग शुरू करने के लिए दबाएं",
    "gui.AIModel.train.period": "एक युग का अर्थ है कि प्रशिक्षण डेटासेट में प्रत्येक नमूना प्रशिक्षण मॉडल को कम से कम एक बार भेजा गया है। उदाहरण के लिए, यदि आपका युग 50 पर सेट है, तो इसका मतलब है कि आप जिस मॉडल को प्रशिक्षित कर रहे हैं वह संपूर्ण प्रशिक्षण डेटासेट को 50 बार संसाधित करेगा। आम तौर पर, यह मान जितना बड़ा होगा, आपका मॉडल डेटा की भविष्यवाणी करना उतना ही बेहतर सीखता है।",
    "gui.AIModel.train.batch": "बैच प्रशिक्षण के एक पुनरावृत्ति में उपयोग किए जाने वाले नमूनों का एक समूह है। उदाहरण के लिए, मान लें कि आपके पास 80 छवियां हैं और बैच आकार 16 पर सेट करते हैं। इसका मतलब है कि डेटा को 80 / 16 = 5 बैचों में विभाजित किया जाएगा। इन सभी 5 बैचों के मॉडल को भेजे जाने के बाद, ठीक एक युग पूरा होता है।",
    "gui.AIModel.train.learningRate": "कृपया इस मान को सावधानीपूर्वक समायोजित करें! छोटे अंतर भी आपके मॉडल की सीखने की प्रभावशीलता पर बड़ा प्रभाव डाल सकते हैं।"
  },
  "ko": {
    "gui.AIModel.import.errModel": "인식할 수 없는 모델을 가져왔습니다",
    "gui.AIModel.audio.sampleSize": "수집된 총 오디오 샘플:",
    "gui.AIModel.audio.stopTranscribe": "녹음을 중지하려면 누르세요",
    "gui.AIModel.audio.transcribe": "녹음을 시작하려면 누르세요",
    "gui.AIModel.train.period": "에포크는 훈련 데이터세트의 각 샘플이 훈련 모델에 최소 한 번 이상 제공되었음을 의미합니다. 예를 들어, 에포크를 50으로 설정하면 훈련 중인 모델이 전체 훈련 데이터세트를 50회 처리한다는 의미입니다. 일반적으로 이 값이 클수록 모델이 데이터를 예측하는 학습 효과가 더 좋아집니다.",
    "gui.AIModel.train.batch": "배치는 훈련의 한 번의 반복에서 사용되는 샘플 집합입니다. 예를 들어, 80개의 이미지가 있고 배치 크기를 16으로 설정했다고 가정합니다. 이는 데이터가 80 / 16 = 5개의 배치로 분할됨을 의미합니다. 이 5개의 배치가 모두 모델에 제공되면 정확히 하나의 에포크가 완료됩니다.",
    "gui.AIModel.train.learningRate": "이 값을 신중하게 조정하십시오! 작은 차이라도 모델의 학습 효과에 큰 영향을 미칠 수 있습니다."
  },
  "th": {
    "gui.AIModel.import.errModel": "นำเข้าโมเดลที่ไม่รู้จัก",
    "gui.AIModel.audio.sampleSize": "รวมตัวอย่างเสียงที่เก็บรวบรวม:",
    "gui.AIModel.audio.stopTranscribe": "กดเพื่อหยุดการบันทึก",
    "gui.AIModel.audio.transcribe": "กดเพื่อเริ่มการบันทึก",
    "gui.AIModel.train.period": "หนึ่งยุคหมายความว่าตัวอย่างแต่ละรายการในชุดข้อมูลการฝึกอบรมถูกป้อนให้กับโมเดลที่ฝึกอบรมอย่างน้อยหนึ่งครั้ง ตัวอย่างเช่น หากยุคของคุณตั้งไว้ที่ 50 หมายความว่าโมเดลที่คุณฝึกจะประมวลผลชุดข้อมูลการฝึกอบรมทั้งหมด 50 ครั้ง โดยทั่วไป ยิ่งค่านี้มากเท่าใด โมเดลของคุณจะเรียนรู้การทำนายข้อมูลได้ดีขึ้นเท่านั้น",
    "gui.AIModel.train.batch": "แบตช์คือชุดตัวอย่างที่ใช้ในการทำซ้ำหนึ่งครั้งของการฝึกอบรม ตัวอย่างเช่น สมมติว่าคุณมีภาพ 80 รูปและตั้งค่าขนาดแบตช์เป็น 16 ซึ่งหมายความว่าข้อมูลจะถูกแบ่งเป็น 80 / 16 = 5 แบตช์ หลังจากที่แบตช์ทั้ง 5 นี้ถูกป้อนให้กับโมเดลแล้ว ก็จะครบหนึ่งยุคพอดี",
    "gui.AIModel.train.learningRate": "โปรดปรับค่านี้อย่างระมัดระวัง! แม้แต่ความแตกต่างเล็กน้อยก็อาจมีผลกระทบอย่างมากต่อประสิทธิภาพการเรียนรู้ของโมเดลของคุณ"
  },
  "nl": {
    "gui.AIModel.import.errModel": "Een onherkenbaar model geïmporteerd",
    "gui.AIModel.audio.sampleSize": "Totaal verzamelde audiovoorbeelden:",
    "gui.AIModel.audio.stopTranscribe": "Druk om de opname te stoppen",
    "gui.AIModel.audio.transcribe": "Druk om de opname te starten",
    "gui.AIModel.train.period": "Een epoch betekent dat elk voorbeeld in de trainingsdataset minstens één keer aan het trainingsmodel is aangeboden. Als uw epoch bijvoorbeeld is ingesteld op 50, betekent dit dat het model dat u traint, de hele trainingsdataset 50 keer zal verwerken. Over het algemeen geldt: hoe groter deze waarde, hoe beter uw model leert om gegevens te voorspellen.",
    "gui.AIModel.train.batch": "Een batch is een set voorbeelden die in één trainingsiteratie worden gebruikt. Stel bijvoorbeeld dat u 80 afbeeldingen heeft en de batchgrootte instelt op 16. Dit betekent dat de gegevens worden verdeeld in 80 / 16 = 5 batches. Nadat al deze 5 batches aan het model zijn aangeboden, is precies één epoch voltooid.",
    "gui.AIModel.train.learningRate": "Pas deze waarde voorzichtig aan! Zelfs kleine verschillen kunnen een grote invloed hebben op de leereffectiviteit van uw model."
  },
  "ar": {
    "gui.AIModel.import.errModel": "تم استيراد نموذج غير معروف",
    "gui.AIModel.audio.sampleSize": "إجمالي عينات الصوت التي تم جمعها:",
    "gui.AIModel.audio.stopTranscribe": "اضغط لإيقاف التسجيل",
    "gui.AIModel.audio.transcribe": "اضغط لبدء التسجيل",
    "gui.AIModel.train.period": "العصر يعني أن كل عينة في مجموعة بيانات التدريب قد تم تغذيتها إلى نموذج التدريب مرة واحدة على الأقل. على سبيل المثال، إذا تم تعيين العصر الخاص بك على 50، فهذا يعني أن النموذج الذي تقوم بتدريبه سيعالج مجموعة بيانات التدريب بأكملها 50 مرة. بشكل عام، كلما كانت هذه القيمة أكبر، كلما تعلم نموذجك التنبؤ بالبيانات بشكل أفضل.",
    "gui.AIModel.train.batch": "الدفعة هي مجموعة من العينات المستخدمة في تكرار واحد من التدريب. على سبيل المثال، افترض أن لديك 80 صورة وقمت بتعيين حجم الدفعة على 16. وهذا يعني أنه سيتم تقسيم البيانات إلى 80 / 16 = 5 دفعات. بعد تغذية جميع هذه الدفعات الخمس إلى النموذج، يكتمل عصر واحد بالضبط.",
    "gui.AIModel.train.learningRate": "يرجى ضبط هذه القيمة بحذر! حتى الاختلافات الصغيرة يمكن أن يكون لها تأثير كبير على فعالية تعلم النموذج الخاص بك."
  },
  "vi": {
    "gui.AIModel.import.errModel": "Đã nhập một mô hình không thể nhận dạng",
    "gui.AIModel.audio.sampleSize": "Tổng số mẫu âm thanh đã thu thập:",
    "gui.AIModel.audio.stopTranscribe": "Nhấn để dừng ghi âm",
    "gui.AIModel.audio.transcribe": "Nhấn để bắt đầu ghi âm",
    "gui.AIModel.train.period": "Một epoch có nghĩa là mỗi mẫu trong tập dữ liệu huấn luyện đã được đưa vào mô hình huấn luyện ít nhất một lần. Ví dụ: nếu epoch của bạn được đặt là 50, điều đó có nghĩa là mô hình bạn đang huấn luyện sẽ xử lý toàn bộ tập dữ liệu huấn luyện 50 lần. Nói chung, giá trị này càng lớn thì mô hình của bạn học cách dự đoán dữ liệu càng tốt.",
    "gui.AIModel.train.batch": "Batch là một tập hợp các mẫu được sử dụng trong một lần lặp huấn luyện. Ví dụ: giả sử bạn có 80 hình ảnh và đặt kích thước batch là 16. Điều này có nghĩa là dữ liệu sẽ được chia thành 80 / 16 = 5 batch. Sau khi tất cả 5 batch này được đưa vào mô hình, một epoch sẽ hoàn thành.",
    "gui.AIModel.train.learningRate": "Vui lòng điều chỉnh giá trị này một cách cẩn thận! Ngay cả những khác biệt nhỏ cũng có thể ảnh hưởng lớn đến hiệu quả học tập của mô hình của bạn."
  },
  "he": {
    "gui.AIModel.import.errModel": "יובא מודל לא מוכר",
    "gui.AIModel.audio.sampleSize": "סך דוגמאות האודיו שנאספו:",
    "gui.AIModel.audio.stopTranscribe": "לחץ לעצירת ההקלטה",
    "gui.AIModel.audio.transcribe": "לחץ להתחלת ההקלטה",
    "gui.AIModel.train.period": "עידן פירושו שכל דוגמה במערך נתוני האימון הוזנה למודל האימון לפחות פעם אחת. לדוגמה, אם העידן שלך מוגדר ל-50, המשמעות היא שהמודל שאתה מאמן יעבד את כל מערך נתוני האימון 50 פעמים. באופן כללי, ככל שהערך הזה גדול יותר, כך המודל שלך לומד לחזות נתונים טוב יותר.",
    "gui.AIModel.train.batch": "אצווה היא קבוצה של דוגמאות המשמשות באיטרציה אחת של אימון. לדוגמה, נניח שיש לך 80 תמונות ואתה מגדיר את גודל האצווה ל-16. משמעות הדבר היא שהנתונים יחולקו ל-80 / 16 = 5 אצוות. לאחר שכל 5 האצוות הוזנו למודל, מסתיים בדיוק עידן אחד.",
    "gui.AIModel.train.learningRate": "אנא כוונן ערך זה בזהירות! אפילו הבדלים קטנים יכולים להשפיע רבות על יעילות הלמידה של המודל שלך."
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

