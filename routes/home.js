const Router = require('koa-router');

const r = new Router();

const { getUserList, getUser } = require('../modules/home/api');

r.get('/', async (ctx) => {
    let data = await getUserList(ctx);
    ctx.type = 'application/json';
    ctx.body = data;
});

r.get('/user/:id', async (ctx) => {
    let data = await getUser(ctx, id);
    ctx.type = 'application/json';
    ctx.body = data;
});

module.exports = {
    r,
};
