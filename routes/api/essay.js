const Router = require('koa-router');
const router = new Router();
const { addEssay,deleteEssay,updateEssay,getEssayList,getDetail  } = require('../../service/essayService');
//新增文章
router.post('/addEssay', async ctx => {
  console.log(ctx.request.body)
  const result = await addEssay(ctx.request.body);
  ctx.body = {
    msg: result
  };
});
//查找文章(模糊查询带分页)
//currentPage name
router.post('/getEssayList', async ctx => {
  const result = await getEssayList(ctx.request.body);
  result.status=200;
  ctx.body =result;
});
//修改文章
router.post('/updateEssay', async ctx => {
  const result = await updateEssay(ctx.request.body);
  ctx.body = {
    msg: result
  };
});
//删除文章
router.post('/deleteEssay', async ctx => {
  const result = await deleteEssay(ctx.request.body);
  ctx.body = result;
});
//获取文章详情
router.post('/getDetail', async ctx => {
  const result = await getDetail(ctx.request.body);
  ctx.body = result;
});
module.exports = router.routes();