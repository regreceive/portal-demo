const fs = require('fs');
const request = require('request');
const path = require('path');
const Koa = require('koa');
const app = new Koa();

// 百度地图瓦片服务
const tileUrl = 'http://maponline0.bdimg.com/tile/';
const tileSet = new Set();

function mkdirSync(dirname) {
  if (fs.existsSync(dirname)) {
    return;
  }
  fs.mkdirSync(dirname);
}

app.use(async (ctx) => {
  const query = ctx.query;
  const dstpath = path.resolve(__dirname, 'tiles-cache', query.z);
  const filename = `${query.x}-${query.y}.png`;
  const currTile = path.join(dstpath, filename);

  // 本地有缓存，直接读取
  if (tileSet.has(currTile)) {
    const buffer = fs.readFileSync(currTile);
    ctx.type = 'png';
    ctx.body = buffer;
    return;
  }

  mkdirSync(dstpath);

  // 保存百度瓦片数据
  return new Promise((resolve) => {
    request(
      { url: tileUrl + '?' + ctx.querystring, encoding: null },
      (err, res, body) => {
        resolve(body);
      },
    ).pipe(fs.createWriteStream(currTile));
  }).then((png) => {
    tileSet.add(currTile);
    ctx.type = 'png';
    ctx.body = png;
  });
});

app.listen(3101);
