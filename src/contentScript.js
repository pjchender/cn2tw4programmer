import zh_cn from './terms/zh-Hans';
import zh_tw from './terms/zh-Hant';

let body = document.body.innerHTML;
let regex = new RegExp();

for (let term in zh_cn) {
  regex = new RegExp(`${zh_cn[term]}`, 'g');
  body = body.replace(regex, zh_tw[term]);
}

document.body.innerHTML = body;
