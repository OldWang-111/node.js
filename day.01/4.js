// const buffer = new Buffer("hdadasassadadas")
// console.log(buffer)
// console.log(Buffer.from("adajdajoiwdasdkajfsa"))

// console.log(Buffer("2333333333").toString())
// console.log(Buffer("2333333333"))
// console.log(Buffer(40))

const fs = require('fs')
// console.log(fs);
/* fs.writeFile("3.js", "aksdhadakjdjasj", {
    flag: "a"
}, (err) => {
    console.log("成功了")
}) */
/* fs.writeFileSync("3.js", "123", () => {
    console.log("成功了")
}) */

//读取文件
/* fs.readFile("3.js", (err, data) => {
    console.log(err)
    console.log(data)
}) */

//创建可读流(读取文件)
/* var rs = fs.createReadStream("3.js")
rs.on("data", (data) => {
    console.log(data.toString())
}) */

//创建可写流(赋值文件)
//先创建可读流在将读取的数据传入到可写流中
const rs = fs.createReadStream("3.js")
//创建可写流文件
const ws = fs.createWriteStream("../day.01/6.js")
/* rs.on("data", (data) => {
    ws.write(data)
    ws.end()
})
ws.on('close', () => {
    console.log("写入流关闭了")
}) */
// rs.pipe(ws)
var re = rs.pipe(ws)
// console.log(re.toString())