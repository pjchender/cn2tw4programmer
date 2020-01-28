const zh_cn = require('./../terms/zh_CN');
const zh_tw = require('./../terms/zh_TW');
const cn2tw = require('./../utils/cn2tw');

const text = `相信很多同學也跟我一樣,剛開始接觸js的面向對象編程的時候,都對源代碼抱著一種排斥的心態--為什麼js這麼麻煩?`;
const textAfterCN2TWShouldBe = `相信很多同學也跟我一樣,剛開始接觸js的<u title=&quot;面向對象&quot;>物件導向</u><u title=&quot;編程&quot;>程式設計</u>的時候,都對<u title=&quot;源代碼&quot;>原始碼</u>抱著一種排斥的心態--為什麼js這麼麻煩?`;

test('test cn2tw function used in contentScript.js', () => {
  const newText = cn2tw({ body: text, zh_cn, zh_tw });
  expect(newText).toBe(textAfterCN2TWShouldBe);
});
