const Router = require('koa-router');
const fs = require('fs');
const path = require('path');
const { resolve } = require('path');
const os = require('os');
console.log(os.hostname());
const router = new Router();
const { addEssay, deleteEssay, updateEssay, getEssayList, getDetail } = require('../../service/essayService');
//新增文章
router.post('/addEssay', async (ctx) => {
  const result = await addEssay(ctx.request.body);
  ctx.body = {
    msg: result,
  };
});
//查找文章(模糊查询带分页)
//currentPage name
router.post('/getEssayList', async (ctx) => {
  const result = await getEssayList(ctx.request.body);
  result.status = 200;
  ctx.body = result;
});
//修改文章
router.post('/updateEssay', async (ctx) => {
  const result = await updateEssay(ctx.request.body);
  ctx.body = {
    msg: result,
  };
});
//删除文章
router.post('/deleteEssay', async (ctx) => {
  const result = await deleteEssay(ctx.request.body);
  ctx.body = result;
});
//获取文章详情
router.post('/getDetail', async (ctx) => {
  const result = await getDetail(ctx.request.body);
  ctx.body = result;
});
//上传图片
router.post('/fileUpload', async (ctx, next) => {
  // 上传单个文件
  const file = ctx.request.files.avatar; // 获取上传文件
  const type = file.name.split('.')[1];
  file.name = new Date().getTime() + '.' + type;
  // 创建可读流
  const reader = fs.createReadStream(file.path);
  // let filePath = path.join(__dirname, '/public/upload/') + `/${file.name}`;
  let filePath = path.join(resolve('./'), '/public/images/') + `${file.name}`;
  // 创建可写流
  const upStream = fs.createWriteStream(filePath);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);
  return (ctx.body = {
    status: '200',
    message: '文件上传成功',
    data: {
      imgurl: 'http://122.51.209.172/cloud/' + file.name,
    },
  });
});
module.exports = router.routes();
