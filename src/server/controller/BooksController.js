const Books = require('../models/Books');

class BooksController {
    async actionIndex(ctx, next) {
        const $model = new Books();
        let result = await $model.getList();
        console.log(result);
        ctx.body = await ctx.render("books/list", { result });
    }
    async actionCreate(ctx, next) {
        ctx.body = await ctx.render('books/create');

    }
}
module.exports = BooksController;