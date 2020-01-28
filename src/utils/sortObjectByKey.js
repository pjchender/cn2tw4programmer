const zh_cn = require('./../terms/zh_CN');
const zh_tw = require('./../terms/zh_TW');

const path = require('path');
const fs = require('fs');
const fsPromises = fs.promises;
const zhCNFilePath = path.resolve(__dirname, './../terms/zh_CN.json');
const zhTWFilePath = path.resolve(__dirname, './../terms/zh_TW.json');

main();

async function main() {
  const zhCNTerms = sortedObjectByKey(zh_cn);
  const zhTWTerms = sortedObjectByKey(zh_tw);

  await fsPromises.mkdir(path.resolve(__dirname, './../terms'), {
    recursive: true,
  });
  await fsPromises.writeFile(zhCNFilePath, JSON.stringify(zhCNTerms, null, 2));
  await fsPromises.writeFile(zhTWFilePath, JSON.stringify(zhTWTerms, null, 2));
}

function sortedObjectByKey(terms) {
  let sortedTerms = {};
  for (let category in terms) {
    Object.keys(terms[category])
      .sort()
      .forEach(key => {
        if (!sortedTerms[category]) {
          sortedTerms[category] = {};
        }
        sortedTerms[category][key] = terms[category][key];
      });
  }

  return {
    ...sortedTerms,
  };
}

module.exports = sortedObjectByKey;
