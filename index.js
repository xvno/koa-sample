const Koa = require('koa');
const app = new Koa();

/*
app.use(handler);

function handler(ctx) {
    console.log(ctx.request);
    if (ctx.request.accepts('html')) {
        ctx.response.type = 'html';
        ctx.response.body = '<p>Hello, html message</p>';
    } else if (ctx.accepts('json')) {
        ctx.type = 'json';
        ctx.body = { data: 'Hello, json' };
    } else if (ctx.accepts('xml')) {
        ctx.type = 'xml';
        ctx.body = '<xml><data>Hello, xml</data></xml>';
        ``;
    } else {
        ctx.type = 'text';
        ctx.body = 'Hello, this is koa server';
    }
}
*/

// 引入路由模块
const Router = require('koa-router');

// 定义子路由
let home = new Router();
home.get('/', (ctx) => {
    ctx.type = 'json';
    ctx.body = {
        data: [
            { id: 'profile', api: 'getProfile' },
            { id: 'about', api: 'getAbout' },
        ],
    };
});

// 定义子路由
let about = new Router();
about.get('/', async (ctx, next) => {
    let startTS = Date.now();
    await next();
    let span = Date.now() - startTS;
    ctx.body = `Time used: ${span}`;
});


// 装载路由
let router = new Router();
router.use('/', home.routes(), home.allowedMethods());
router.use('/about', about.routes(), about.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());

// 启动监听
let PORT = process.env.PORT || 4096;
app.listen(PORT, () => {
    console.log(`Server started listening port ${PORT}`);
});
