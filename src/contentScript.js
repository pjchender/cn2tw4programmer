const zh_cn = require('./terms/zh_CN');
const zh_tw = require('./terms/zh_TW');
const cn2tw = require('./utils/cn2tw');

/**
 * 遞迴地遍歷 DOM，將所有純文字節點的內容傳入替換函數處理，
 * 若內容被修改，則使用安全的 HTML 插入方式替換原節點。
 * 僅處理 Text Node，保留原有 DOM 結構與事件監聽器。
 * 會將替換結果視為 HTML 字串，並轉為實際 DOM 節點插入。
 * 不處理 SCRIPT、STYLE、TEXTAREA 等不應變動的節點。
 * 
 * @param {Node} node - document.body 或是任何想要替換的節點
 * @param {(text: string) => string} replaceFn - 傳入純文字內容，回傳替換後的 HTML 字串
 */
function replaceTextNodes(node, replaceFn) {
  if (node.nodeType === Node.TEXT_NODE) {
    const replacedHTML = replaceFn(node.textContent);
    if (replacedHTML !== node.textContent) {
      const span = document.createElement('span');
      span.innerHTML = replacedHTML;
      node.replaceWith(...span.childNodes);
    }
  } else if (
    node.nodeType === Node.ELEMENT_NODE &&
    !["SCRIPT", "STYLE", "TEXTAREA"].includes(node.nodeName)
  ) {
    for (let child of Array.from(node.childNodes)) {
      replaceTextNodes(child, replaceFn);
    }
  }
}
replaceTextNodes(document.body, text => cn2tw({ body: text, zh_cn, zh_tw }));
