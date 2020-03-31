const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const multer = require('koa-multer');
const koaBody = require('koa-body');
// const mongoose = require('mongoose');
const ModelDb = require('./db');
const cors = require('koa2-cors');
var bodyParser = require('koa-bodyparser');
const app = new Koa();
const router = new Router();
// app.use(bodyParser());
app.use(cors());
//配置路由
//上传文件中间件
// app.use(
//   koaBody({
//     multipart: true,//允许上传文件列表
//     formidable: {
//       maxFileSize: 200 * 1024 * 1024,// 设置上传文件大小最大限制，默认2M
//       keepExtensions: true, //  保存图片的扩展名
//     }
//   })
// );
app.use(koaBody({
 "multipart": true,        //接收form表单数据
 formidable: {
  uploadDir: './',          //文件保存路径
  keepExtensions: true,     //保持源文件的扩展
  onFileBegin: (name, file) => {   //文件保存之前的预处理
   file.path = file.name;      //保存文件名改为源文件的文件名，否则文件名随机
  }
 }
}));

app.use(router.routes()).use(router.allowedMethods());
//静态文件托管
app.use(static(__dirname, './images'));
const user = require('./routes/api/user');
const essay = require('./routes/api/essay');
//配置路由地址
router.use('/api/user', user);
router.use('/api/essay', essay);
const port = process.env.PORT || 8866;
app.listen(port, () => {
  console.log(`---server run in ${port}---@azuna`);
});
