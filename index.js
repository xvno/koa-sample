const fs = require('fs');
const { resolve } = require('path');
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

// 配置 koa-session
const { setSession } = require('./config/session');
setSession(app);

// 解析POST来的data
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// 加载 MySQL
const { query } = require('./db/mysql.js');
app.use(async (ctx, next) => {
    ctx.utils = {
        query,
    };
    await next();
});

// 组合路由
let router = new Router();
let routes = fs.readdirSync(resolve(__dirname, 'routes'));
routes.forEach((rname) => {
    let { r } = require(resolve(__dirname, 'routes', rname));
    console.log(rname.replace('.js', ''));
    router.use(`/${rname.replace('.js', '')}`, r.routes(), r.allowedMethods());
});

// 使用路由中间件
app.use(router.routes());

// 启动监听
let PORT = process.env.PORT || 4096;
app.listen(PORT, () => {
    console.log(`Server started listening port ${PORT}`);
});
