const errorHandle = {
    error(app) {
        app.use(async (ctx, next) => {
            try {
                await next();
            }
            catch (err) {
                console.log(ctx.logger);
                ctx.logger.error(err);
                ctx.status = err.status || 500;
                ctx.body='页面错误❎';
            }

        });
    }
}
module.exports = errorHandle;