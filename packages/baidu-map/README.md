# 项目基础说明 liangshanheng

## git 地址

https://gitlab.kstonedata.k2/liyao/portal-monorepo-dem

## 项目要点

1. 项目需要安装 nodejs 作为，获取静态页面的服务。正式发布时不需要。
2. 项目可由 yarn 命令启动 `yarn run dev`
3. 项目主要代码位于`./packages/baidu-map/src/baidu`目录下。
   - tiles-cache --拉取的地图数据保存地址
   - apiv2.0.js --百度地图服务。替换现有百度地图引用链接
   - tileServer.js --依赖于 nodejs 的百度地图图片保存服务 使用 `node tileServer.js`启动服务
   - AreaRestriction.js --依赖于 nodejs 的百度地图图片保存服务
   - demo.html --测试页 A
   - xiongan.html --测试页 B
   - data.js --测试页 A 数据
   - data.xiongan.js --测试页 B 数据
   - jquery.min.js --测试静态资源
   - gps.js --测试页 B 方法
   - index.tsx --首页
4. 在发布时理论上仅需使用`tiles-cache`和`api2.0.js`即可。
5. 使用步骤，首先通过该项目拉取需要的图片，然后修改 apiv2.0.js 相应的配置，使之可以访问本地下载好的图片。

## 存在问题

1. 在 apiv2.0.js 文件中根据使用需要有数个不同的图片拉取路径。当前`tileServer.js`截取的图片不是我们需要的暗色图片。
2. 当前只做了拉取的测试，并没有对读取本地文件的修改做出测试。放在百度中的测试页可以一定成都上的验证可能性。

## 项目目的

实现分三个步骤。保底要达到步骤二

1. 将 apiv.2.0.js 应用到当前的矿场管理的地图展示中去。
2. 在没有图片的情况下，可以由一个纯色图片统一代替。
3. 完全替代现有使用的百度地图。

## 注意

所有修改可以通过 `liangshanheng` 作为关键字进行查询。
