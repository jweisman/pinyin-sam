const convert = require('hanzi-to-pinyin');
const utils = require('./utils');
const fs = require('fs-extra');

console.log('Initializing function');
const DB_DIR = '/opt/lib/cedict_db';
/* Copy pinyin DB to writable /tmp */
if (fs.pathExistsSync(DB_DIR)) {
  console.log('Copying pinyin DB');
  fs.copySync(DB_DIR, '/tmp/cedict_db');
} else {
  console.warn(`${DB_DIR} does not exist`);
}

exports.handler = async (event) => {
  let result;
  await convert.init('/tmp/cedict_db');
  try {
    switch (event.routeKey) {
      case 'GET /pinyin/{text}':
      case 'GET /pinyin/<text>':
        const original = event.pathParameters.text;
        console.info('Start GET /pinyin/{text}', original);
        const data = await convert(original);
        console.info('Finished GET /pinyin/{text}', data)
        result = utils.responses.success({
            original, 
            text: data.map(v=>Array.isArray(v) ? v[0] : v).join(''),
            data
        });
        break;
      default:
        result = utils.responses.notfound();
    }
  } catch(e) {
    console.error('error', e);
    result = utils.responses.error(e.message);
  }
  return utils.cors(result, event);
};
