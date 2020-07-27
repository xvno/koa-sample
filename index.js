const fs = require('fs');
const { resolve } = require('path');
const Koa = require('koa');
const Router = require('koa-router');


const app = new Koa();

// 加载路由
let router = new Router();
let routes = fs.readdirSync(resolve(__dirname, 'routes'));
routes.forEach((rname) => {
    let { r } = require(resolve(__dirname, 'routes', rname));
    console.log(rname.replace('.js', ''));
    router.use(`/${rname.replace('.js', '')}`, r.routes(), r.allowedMethods());
});


// 使用路由中间件
app.use(router.routes())

// 启动监听
let PORT = process.env.PORT || 4096;
app.listen(PORT, () => {
    console.log(`Server started listening port ${PORT}`);
});
