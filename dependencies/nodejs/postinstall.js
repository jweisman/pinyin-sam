const convert = require('hanzi-to-pinyin');
const fs = require('fs-extra');
(async () => {
  const DB_LOC = '../lib/cedict_db';
  fs.ensureDirSync(DB_LOC);
  console.log('Initializing Pinyin DB');
  await convert.init(DB_LOC);
  console.log('Pinyin DB created');
})();