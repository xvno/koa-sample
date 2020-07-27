const Router = require('koa-router');

const r = new Router();

r.get('/', (ctx) => {
    ctx.body = 'home page here';
});

module.exports = {
    r,
};
