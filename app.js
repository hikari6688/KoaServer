const Koa=require('koa');
const Router=require('koa-router');
// const mongoose = require('mongoose');
const ModelDb = require('./db');
var bodyParser = require('koa-bodyparser');
const DB_URL = 'mongodb://localhost:27017/local';
const app = new Koa();
const router =new Router();
app.use(bodyParser());
//配置路由
app.use(router.routes()).use(router.allowedMethods());
const user=require('./routes/api/user');
//配置路由地址
router.use('/api/user',user);
const port=process.env.PORT||8866;
app.listen(port,()=>{
  console.log(`---server run in ${ port }---@azuna`);
});