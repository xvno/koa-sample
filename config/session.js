const session = require('koa-session');

const config = {
    key: 'koa:sess',
    maxage: 24 * 60 * 60,
    overwrite: true,
    // httpOnly: true,
    signed: true,
    rolling: false,
    renew: false,
};

module.exports = {
    setSession(app) {
        app.use(session(config, app));
    },
};
