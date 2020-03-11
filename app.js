const Koa=require('koa');
const Router=require('koa-router');
// const mongoose = require('mongoose');
const ModelDb = require('./db');
var bodyParser = require('koa-bodyparser');
const app = new Koa();
const router =new Router();
app.use(bodyParser());
//配置路由
app.use(router.routes()).use(router.allowedMethods());
const user=require('./routes/api/user');
const essay=require('./routes/api/essay')
//配置路由地址
router.use('/api/user',user);
router.use('/api/essay',essay);
const port=process.env.PORT||8866;
app.listen(port,()=>{
  console.log(`---server run in ${ port }---@azuna`);
});