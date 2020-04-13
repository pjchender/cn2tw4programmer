/* global chrome */

chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.executeScript({ file: 'contentScript.bundle.js' });
});
