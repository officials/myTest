const { extend } = require('lodash');
const {join}=require('path');
let $config = {
    viewDir:join(__dirname,"../..","/web/views"),
    staticDir:join(__dirname,"../../../","/assets"),
    baseUrl:'http://localhost:8081/yii2/basic/web'
};
if (process.env.NODE_ENV == 'development') {
    const localConfig = {
        port: 3000
    }
    $config=extend($config,localConfig);
}
if (process.env.NODE_ENV == 'production') {
    const proConfig = {
        port: 80
    }
    $config=extend($config,proConfig);
}
module.exports = $config;