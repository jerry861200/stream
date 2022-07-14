# 使用專案步驟

## 開啟一專案為 RTMP Server
    $ npm init
		$ npm i node-media-server

```javascript
const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  }
};

var nms = new NodeMediaServer(config)
nms.run();
```

## 開啟一專案為 json Server

```
	npm i json-server
	json-server -p 3001 -w db.json
```