module.exports = {
    async getUserList(ctx, cb) {
        const sql = 'select * from user;';
        return new Promise(function (resolve, reject) {
            ctx.utils.query(sql, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    },
    async getUser(ctx, id) {
        const sql = `select * from user where id=${id};`;
        return new Promise(function (resolve, reject) {
            ctx.utils.query(sql, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    },
};
