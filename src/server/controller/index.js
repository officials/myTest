const Router = require('koa-router');
const router = new Router();
const IndexController = require('./IndexController');
const indexController = new IndexController();
const BooksController=require('./BooksController');
const bookConstroller=new BooksController();
const controllerInit = (app) => {
    app.use(router.routes())
        .use(router.allowedMethods());
    router.get('/', indexController.actionIndex);
    router.get('/books/list', bookConstroller.actionIndex);
    router.get('/books/create', bookConstroller.actionCreate);
}
// router.post('/books/list',)
module.exports = controllerInit;