import zh_CN from './../terms/zh_CN';
import zh_TW from './../terms/zh_TW';

const termMapping = {};

Object.entries(zh_CN.phrases).forEach(([key, term_cn]) => {
  termMapping[term_cn] = zh_TW.phrases[key];
})

Object.entries(zh_CN.words).forEach(([key, term_cn]) => {
  termMapping[term_cn] = zh_TW.words[key];
})

console.log(JSON.stringify(termMapping));
