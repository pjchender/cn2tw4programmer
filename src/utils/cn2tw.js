function cn2tw({ body, zh_cn, zh_tw }) {
  let newBody = body;
  for (let category in zh_cn) {
    for (let term in zh_cn[category]) {
      // 檢查該字詞是否存在 <u title="..."> 內，是的話表示已經被處理過
      const alreadyMatched = new RegExp(
        `&quot;[^&quot;]*${zh_cn[category][term]}[^&quot;]*&quot;`,
        'g'
      );
      const isAlreadyMatched = newBody.match(alreadyMatched);

      if (isAlreadyMatched) {
        continue;
      }

      // 若沒被處理過，則取代掉
      const matchZhCnTerm = new RegExp(`${zh_cn[category][term]}`, 'g');
      const isFind = newBody.match(matchZhCnTerm);
      if (!isFind) {
        continue;
      }

      newBody = newBody.replace(
        matchZhCnTerm,
        `<u title=&quot;${zh_cn[category][term]}&quot;>${zh_tw[category][term]}</u>`
      );
    }
  }
  return newBody;
}

module.exports = cn2tw;
