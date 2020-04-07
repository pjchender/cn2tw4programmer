# cn2tw4programmer

[![Build status](https://badgen.net/travis/pjchender/cn2tw4programmer)](https://travis-ci.com/pjchender/cn2tw4programmer)
[![Coverage Status](https://coveralls.io/repos/github/pjchender/cn2tw4programmer/badge.svg?branch=master)](https://coveralls.io/github/pjchender/cn2tw4programmer?branch=master)
[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors)


這個 Google Chrome 擴充套件**並不是**一個將簡體中文轉換成繁體中文的套件，而是將簡體中文內常用的 Computer Science 詞彙轉換成繁體中文的詞彙，你一定經常看簡體中文的「數組」卻不知道那就是繁體中文「陣列」，看到「對象」卻不知道是指「物件」，而這個套件就是幫你處理這樣的問題。

被轉換過的文字下方將會出現底線，且滑鼠停滯在該文字上方時會出現英文原文 `change logs: 2018-06-10`。

> [cn2tw4programmer](https://chrome.google.com/webstore/detail/emjpciklgncophlffcjipabmigmdkdmc) @ Google Chrome Extension Store

## 使用

由於這個套件主要是將簡體中文的詞彙轉換成繁體中文的用法，**並不是將簡體中文轉成繁體中文**，因此在使用前請先透過 [新同文堂](https://chrome.google.com/webstore/detail/new-tong-wen-tang/ldmgbgaoglmaiblpnphffibpbfchjaeg?hl=zh-TW) 或瀏覽器內建的 [Google 翻譯](https://support.google.com/chrome/answer/173424?co=GENIE.Platform%3DDesktop&hl=zh-Hant)，將文章內容轉換成繁體中文：

![alt](https://i.imgur.com/l8dEk6i.gif)

## 使用新同文堂

若原本就有在使用[新同文堂](https://github.com/tongwentang)的使用者，可以不用額外下載此套件，直接將位於 [`./src/terms/newTongWenTang.json`](https://github.com/PJCHENder/cn2tw4programmer/tree/master/src/terms/newTongWenTang.json) 目錄下的 JSON 檔於新同文堂中的「簡轉繁對照表」匯入即可使用。

或者可以下載此專案後，執行：

```bash
$ npm run build:newTongWenTang
```

即可在 `./src/terms/` 目錄下找到 `newTongWenTang.json` 的檔案。

## 當前字典檔

目前字典中已收錄下列[詞彙](https://github.com/PJCHENder/cn2tw4programmer/tree/master/src/terms/newTongWenTang.json)。

## 貢獻或勘誤 Contribution

若有建議新增或修改的詞彙，歡迎提交 PR，字典檔在 [`./src/terms/`](https://github.com/PJCHENder/cn2tw4programmer/tree/master/src/terms) 當中。

## 測試 Test

```bash
$ npm test
```

## Change Logs

- 2020-01-26: v0.3.0
  - Add new words (來源：[大陸台灣電腦術語對照表](http://bit.ly/2RrIy9B))
  - Add Jest for test
  - Refactor file structure
  - Change npm scrips
  - Bug fixed with new Regex
- 2019-07-16: v0.2.1
  - Add new words
- 2019-07-04: v0.2.0
  - Provide new terms
  - Fixed some known issues
  - Provide utility to build 新同文堂 JSON file
- 2018-09-16: v0.1.7
  - Provide new terms
  - Provide Simplified to Traditional Chinese table for 新同文堂
- 2018-06-10: v0.1.5
  - Provide new terms
  - Parse "phrase" before "word"
  - Underline the word be parsed, and add english of the term
- 2018-05-24: v0.1.3 - Pack the app
- 2018-05-19: v0.0.2 - Bundle files with webpack
- 2018-04-18: v0.0.1 - Init the project

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.cliffsu.ga"><img src="https://avatars1.githubusercontent.com/u/22230889?v=4" width="100px;" alt=""/><br /><sub><b>Cliff Su</b></sub></a><br /><a href="https://github.com/pjchender/cn2tw4programmer/commits?author=stu01509" title="Code">💻</a></td>
    <td align="center"><a href="https://askiebaby.github.io/"><img src="https://avatars1.githubusercontent.com/u/19218822?v=4" width="100px;" alt=""/><br /><sub><b>林汶樺｜Askie Lin</b></sub></a><br /><a href="https://github.com/pjchender/cn2tw4programmer/commits?author=askiebaby" title="Code">💻</a></td>
    <td align="center"><a href="http://pjchender.blogspot.com"><img src="https://avatars1.githubusercontent.com/u/13399740?v=4" width="100px;" alt=""/><br /><sub><b>PJCHENder</b></sub></a><br /><a href="https://github.com/pjchender/cn2tw4programmer/commits?author=pjchender" title="Code">💻</a> <a href="#maintenance-pjchender" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://yysu.github.io/About-me"><img src="https://avatars3.githubusercontent.com/u/12994810?v=4" width="100px;" alt=""/><br /><sub><b>Su,Yen-Yun</b></sub></a><br /><a href="https://github.com/pjchender/cn2tw4programmer/commits?author=YYSU" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/extend1994"><img src="https://avatars2.githubusercontent.com/u/13430892?v=4" width="100px;" alt=""/><br /><sub><b>Ann</b></sub></a><br /><a href="https://github.com/pjchender/cn2tw4programmer/commits?author=extend1994" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/EasonLin0716"><img src="https://avatars1.githubusercontent.com/u/48944243?v=4" width="100px;" alt=""/><br /><sub><b>Eason Lin</b></sub></a><br /><a href="https://github.com/pjchender/cn2tw4programmer/commits?author=EasonLin0716" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/leannechen"><img src="https://avatars3.githubusercontent.com/u/35912430?v=4" width="100px;" alt=""/><br /><sub><b>Leanne Chen</b></sub></a><br /><a href="https://github.com/pjchender/cn2tw4programmer/commits?author=leannechen" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
