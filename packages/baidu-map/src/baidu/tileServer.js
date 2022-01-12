const fs = require('fs');
const request = require('request');
const path = require('path');
const Koa = require('koa');
const app = new Koa();

// 百度地图瓦片服务
// const tileUrl = 'http://maponline0.bdimg.com/tile/'; // 不带样式
const tileUrl = 'http://api0.map.bdimg.com/customimage/tile'; // 暗色风格
const tileSet = new Set();
const styles = encodeURIComponent(
  't:water|e:all|c:#044161,t:land|e:all|c:#091934,t:boundary|e:g|c:#064f85,t:railway|e:all|v:off,t:highway|e:g|c:#004981,t:highway|e:g.f|c:#005b96|l:1,t:highway|e:l|v:on,t:arterial|e:g|c:#004981|l:-39,t:arterial|e:g.f|c:#00508b,t:poi|e:all|v:off,t:green|e:all|v:off|c:#056197,t:subway|e:all|v:off,t:manmade|e:all|v:off,t:local|e:all|v:off,t:arterial|e:l|v:off,t:boundary|e:g.f|c:#029fd4,t:building|e:all|c:#1a5787,t:label|e:all|v:off,t:poi|e:l.t.f|c:#ffffff,t:poi|e:l.t.s|c:#1e1c1c,t:administrative|e:l|v:off,t:road|e:l|v:off',
);

function mkdirSync(dirname) {
  if (fs.existsSync(dirname)) {
    return;
  }
  fs.mkdirSync(dirname);
}

app.use(async (ctx) => {
  const query = ctx.query;
  const dstpath = path.resolve(__dirname, 'tiles-cache/' + query.z);
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
  return new Promise((resolve, reject) => {
    request(
      {
        url: `${tileUrl}?${ctx.querystring}&styles=${styles}`,
        encoding: null,
      },
      (err, res, body) => {
        if (res.statusCode === 200) {
          resolve(body);
          return;
        }
        reject();
      },
    ).pipe(fs.createWriteStream(currTile));
  })
    .then((png) => {
      tileSet.add(currTile);
      ctx.type = 'png';
      ctx.body = png;
    })
    .catch(() => {
      ctx.status = 404;
      ctx.type = 'text';
      ctx.body = 'not found';
      return;
    });
});

app.listen(3101);
