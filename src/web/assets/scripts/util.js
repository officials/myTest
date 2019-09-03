var _ = function (obj) {
    if (obj instanceof _) return obj; //防止_(_)这样的调用
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
}
_.each = function (obj, iteratee) {
    if (Array.isArray(obj)) {
        for (const item of obj) {
            iteratee && iteratee.call(_, item);
        }
    }
}
_.isfunction = function (obj) {
    return typeof obj === 'function' || false;
}
_.functions = function (obj) {
    var names = [];
    for (var key in obj) {
        if (_.isfunction(obj[key])) names.push(key);
    }
}
_.throttle = function (fn, wait = 500) {
    let timer;
    return function (...args) {
        if (timer == null) {
            timer = setTimeout(() => timer = null, wait);
            return fn.apply(this.args);
        }
    }
}
//混合静态方法到原型链的共享属性上
_.mixin = function (obj) {
    _.each(_.functions(obj), function (name) {
        var func = _[name] = obj[name];
        _.prototype[name] = function () {  //将通过原型链调用的方式，传入的function挂载到原型链上
            var args = [this._wrapped];
            Array.prototype.push.apply(args, arguments);
            func.apply(_, args);
        }
    })
}
_.mixin(_);

_.VERSION = '1.0.1';
export default _;
/**
 * @example  封装each的两种目标写法
 * //通过原型链调用
 * _(["a","b"]).each(function(){
 *
 * });
 * //通过静态方法调用
 * _.each(["a","b"],function(){
 * })
 */