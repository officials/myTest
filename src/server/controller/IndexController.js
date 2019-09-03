const Controller = require('./BaseController');
class IndexController extends Controller {
    constructor() {
        super();
    }
    async actionIndex(ctx,next){
        ctx.body=await ctx.render("index/home");
    }
}       
module.exports = IndexController;