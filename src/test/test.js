import zh_cn from './../terms/zh_CN';
import zh_tw from './../terms/zh_TW';

let textToParse = `相信很多同學也跟我一樣,剛開始接觸js的面向對象編程的時候,都抱著一種排斥的心態--為什麼js這麼麻煩? `;
let regex = new RegExp();
console.log('====== before ======', textToParse)

for (let category in zh_cn) {
  for(let term in zh_cn[category] ) {
    regex = new RegExp(`${zh_cn[category][term]}`, 'g');
    textToParse = textToParse.replace(regex, `<u title="${term}(${zh_cn[category][term]})">${zh_tw[category][term]}</u>`);
    console.log(textToParse);
  }
}

console.log('====== after ======', textToParse);
