const Koa = require('koa');
const app = new Koa();

app.use(handler);

let PORT = process.env.PORT || 4096;
app.listen(PORT, () => {
    console.log(`Server started listening port ${PORT}`);
});

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