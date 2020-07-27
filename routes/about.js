const Router = require('koa-router');

const r = new Router();

r.get('/', (ctx) => {
    ctx.body = 'about page here';
});

module.exports = {
    r,
};
