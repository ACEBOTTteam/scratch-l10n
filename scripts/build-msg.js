const language = require('../locales/blocks-msgs')
const fs = require('fs');
const { spawn } = require('child_process');
let msg = {}
let str = `'use strict';

goog.provide('Blockly.ScratchMsgs.allLocales');

goog.require('Blockly.ScratchMsgs');\r\n`

for(let [key, value] of Object.entries(language)){
    let message = `Blockly.ScratchMsgs.locales["${key}"] ={\r\n`
    for(let [index,item] of Object.entries(value)){
      message+=`"${index}": "${item}",\r\n`
    }
    str+=message+'}'+'\r\n'
}

fs.writeFile('./msg.js', str, (err) => {
    if (err) {
        console.log(err, '保存文件的错误');
    } else {
        console.log(true);
    }
});