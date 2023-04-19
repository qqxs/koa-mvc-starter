# koa-mvc-starter

![build](https://github.com/qqxs/koa-mvc-starter/workflows/build/badge.svg)

## Use

```sh
# 克隆仓库
git clone https://github.com/qqxs/koa-mvc-starter.git

# 安装依赖
yarn install

# development run, nodemon run code
yarn run dev

# development run, pm2 run code
yarn run dev:pm2

# build ts -> js
yarn run build

# production run, pm2 run dist
yarn run serve

# prettier write
yarn run fmt
```

## views

渲染模版使用`ejs`

## 功能

- [x] MVC
- [x] Restfull API
- [x] JWT
- [ ] mysql
- [x] log4js
- [ ] Mysql
- [ ] Redis
- [ ] Cookie
- [ ] Session
- [x] prettier
- [x] husky

## 信息格式

```json
{
  "code": 0,
  "data": [],
  "msg": ""
}
```

```json
{
  "code": 404,
  "msg": "this is error msg"
}
```
