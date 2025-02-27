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
        "gui.modify.sampleProgramErr": "示例程序不可更改，请保存新文件!"
    },
    "zh-tw": {
        "gui.modify.sampleProgramErr": "示範程式無法更改，請保存新檔案!"
    },
    "en": {
        "gui.modify.sampleProgramErr": "Sample program cannot be modified, please save as a new file!"
    },
    "fr": {
        "gui.modify.sampleProgramErr": "Le programme d'exemple ne peut pas être modifié, veuillez enregistrer un nouveau fichier !"
    },
    "ja": {
        "gui.modify.sampleProgramErr": "サンプルプログラムは変更できません。新しいファイルとして保存してください！"
    },
    "de": {
        "gui.modify.sampleProgramErr": "Das Beispielprogramm kann nicht geändert werden, bitte speichern Sie eine neue Datei!"
    },
    "es": {
        "gui.modify.sampleProgramErr": "¡El programa de ejemplo no se puede modificar, guarde un nuevo archivo!"
    },
    "ru": {
        "gui.modify.sampleProgramErr": "Пример программы не может быть изменен, пожалуйста, сохраните новый файл!"
    },
    "cs": {
        "gui.modify.sampleProgramErr": "Ukázkový program nelze upravit, prosím uložte nový soubor!"
    },
    "it": {
        "gui.modify.sampleProgramErr": "Il programma di esempio non può essere modificato, si prega di salvare come nuovo file!"
    },
    "pl": {
        "gui.modify.sampleProgramErr": "Program przykładowy nie może być zmieniany, proszę zapisać nowy plik!"
    },
    "tr": {
        "gui.modify.sampleProgramErr": "Örnek program değiştirilemez, lütfen yeni bir dosya olarak kaydedin!"
    },
    "pt": {
        "gui.modify.sampleProgramErr": "O programa de exemplo não pode ser modificado, por favor salve como um novo arquivo!"
    },
    "hr": {
        "gui.modify.sampleProgramErr": "Primjer programa ne može se izmijeniti, molimo spremite novi fajl!"
    },
    "ko": {
        "gui.modify.sampleProgramErr": "예제 프로그램은 수정할 수 없습니다. 새 파일로 저장하십시오!"
    },
    "th": {
        "gui.modify.sampleProgramErr": "โปรแกรมตัวอย่างไม่สามารถแก้ไขได้ กรุณาบันทึกเป็นไฟล์ใหม่!"
    },
    "nl": {
        "gui.modify.sampleProgramErr": "Het voorbeeldprogramma kan niet worden gewijzigd, sla het als een nieuw bestand op!"
    },
    "ar": {
        "gui.modify.sampleProgramErr": "لا يمكن تعديل البرنامج المثال، يرجى حفظه كملف جديد!"
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

