const Koa = require('koa');
const $config = require('./src/server/config/index');
const controllerInit = require('./src/server/controller/index');
const render = require('koa-swig');
const co = require('co');
const serve = require('koa-static');
const errorHandle = require('./src/server/middlewares/error-handle');
const log4js = require('log4js');
const app = new Koa();
//错误日志生成器
log4js.configure({
    appenders: { cheese: { type: 'file', filename: __dirname + '/logs/error.log' } },
    categories: { default: { appenders: ['cheese'], level: 'error' } }
});
app.context.render = co.wrap(render({
    // ...your setting
    root: $config.viewDir,
    autoescape: false,
    varControls: ["[[", "]]"],
    ext: 'html',
    writeBody: false,
    
}));

const logger = log4js.getLogger('cheese');
//全局注册
app.context.logger = logger;
app.use(serve($config.staticDir));
//容错处理中心
errorHandle.error(app);
controllerInit(app);
app.listen($config.port, () => {
    console.log($config);
    console.log('服务已启动');
});
// 当然，容错处理也可以使用
/**
 * @example
 * app.on('error',()=>{ 
 * });
 */