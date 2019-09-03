import _ from './util.js';
const init = () => {
    console.log('文件编译成功');
    new Vue({
        el: '#app-6',
        data: {
            message: 'Hello Vue!'
        }
    });
    console.log(_.throttle);
    console.log(_);
    $("#clickBtn").click(_.throttle(() => {
        console.log(Math.random());
    }));
}
export default init;