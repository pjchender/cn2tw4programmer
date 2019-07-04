import zh_cn from './terms/zh_CN';
import zh_tw from './terms/zh_TW';

let body = document.body.innerHTML;
let regex = new RegExp();

for (let category in zh_cn) {
  for (let term in zh_cn[category]) {
    regex = new RegExp(`${zh_cn[category][term]}`, 'g');
    body = body.replace(
      regex,
      `<u title=&quot;${zh_cn[category][term]}&quot;>${zh_tw[category][term]}</u>`
    );
  }
}

document.body.innerHTML = body;
