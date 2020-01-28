const zh_cn = require('./../terms/zh_CN');
const zh_tw = require('./../terms/zh_TW');

describe('check terms number and keys are the same', () => {
  const zhCNTerms = Object.keys({
    ...zh_cn.phrases,
    ...zh_cn.words,
  });

  const zhTWTerms = Object.keys({
    ...zh_tw.phrases,
    ...zh_tw.words,
  });

  it('check number of terms', () => {
    expect(zhCNTerms.length).toBe(zhTWTerms.length);
  });

  it('check key and order of languages are the same', () => {
    expect(zhCNTerms).toEqual(zhTWTerms);
  });
});
