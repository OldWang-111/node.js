const module1 = require('./1.js')

function fn2() {
    console.log('文件2的代码执行了')
}
fn2()
module1.fn()

module.exports = {
    fn2,
}