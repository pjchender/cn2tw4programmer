const path = require('path');
const fs = require('fs');
const fsPromises = fs.promises;
const {
  main,
  mapTermsForNewTongWenTang,
} = require('./../utils/buildNewTongWenTang');

const zh_cn_mock = {
  phrases: {
    'assembly language': '彙編語言',
    'cloud computing': '雲計算',
    'connection-oriented': '面向連接',
  },
  words: {
    activated: '激活的',
    adapter: '適配器',
    animation: '動效',
    array: '數組',
  },
};

const zh_tw_mock = {
  phrases: {
    'assembly language': '組合語言',
    'cloud computing': '雲端運算',
    'connection-oriented': '連結導向',
  },
  words: {
    activated: '啟用的',
    adapter: '配接器',
    animation: '動畫',
    array: '陣列',
  },
};

const termsAfterMappingShouldBe = {
  彙編語言: '組合語言',
  雲計算: '雲端運算',
  面向連接: '連結導向',
  激活的: '啟用的',
  適配器: '配接器',
  動效: '動畫',
  數組: '陣列',
};

describe('test utils of buildNewTongWenTang', () => {
  it('test function of mapTermsForNewTongWenTang', () => {
    const termsAfterMapping = mapTermsForNewTongWenTang({
      zh_cn: zh_cn_mock,
      zh_tw: zh_tw_mock,
    });

    expect(termsAfterMapping).toEqual(termsAfterMappingShouldBe);
  });

  it('expect file be generated', async () => {
    await main();
    const filePath = path.resolve(__dirname, './../terms/_newTongWenTang.json');

    const stats = await fsPromises.stat(filePath);
    expect(stats).toEqual(expect.anything());
  });
});
