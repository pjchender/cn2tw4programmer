const zh_cn = require('./terms/zh_CN');
const zh_tw = require('./terms/zh_TW');
const cn2tw = require('./utils/cn2tw');

let body = document.body.innerHTML;

const newBody = cn2tw({ body, zh_cn, zh_tw });

document.body.innerHTML = newBody;
