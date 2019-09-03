/**
 * @fileoverview 实现Books的数据模型
 * @author 段鑫磊
 */
//接口访问
const SafeRequest = require('../utils/SafeRequest');
class Books {
    /**
     * Books类  实现获取后台有关于图书相关的数据类
     * @class
     */

    /**
     * 
     * @param {object} app
     * @constructor 
     */
    constructor(app) {
        this.app = app;
    }
    /**
     * 
     * @param {*} options 访问数据的参数
     * @example 
     * return new Promise
     * getList(options)
     */
    async getList(options) {
        
        const safeRequest = new SafeRequest('/index.php?r=books%2Findex');
        const data = await safeRequest.get();
        return data;
    }
}
module.exports = Books;