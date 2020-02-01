const path = require('path');
const fs = require('fs');
const fsPromises = fs.promises;
const zh_tw = require('./../terms/zh_TW.json');
const zh_cn = require('./../terms/zh_CN.json');

  main();

async function main() {
  const termsAfterMapping = mapTermsForNewTongWenTang({ zh_cn, zh_tw });

  if (process.env.NODE_ENV === 'test') return;

  await fsPromises.mkdir(path.resolve(__dirname, './../terms'), {
    recursive: true,
  });

  await fsPromises.writeFile(
    path.resolve(__dirname, './../terms/newTongWenTang.json'),
    JSON.stringify(termsAfterMapping, null, 2)
  );
}

function mapTermsForNewTongWenTang({ zh_cn, zh_tw }) {
  const termMapping = {};
  Object.entries(zh_cn.phrases).forEach(([key, term_cn]) => {
    termMapping[term_cn] = zh_tw.phrases[key];
  });

  Object.entries(zh_cn.words).forEach(([key, term_cn]) => {
    termMapping[term_cn] = zh_tw.words[key];
  });

  return termMapping;
}

module.exports = mapTermsForNewTongWenTang;
