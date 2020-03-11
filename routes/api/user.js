const Router = require('koa-router');
const router = new Router();
const user = require('../../models/User');
const { register, findUserById, findUserByName,login } = require('../../service/userService');
router.post('/register', async ctx => {
  const result = await register(ctx.request.body);
  ctx.body = result;
});
router.post('/checkUserName', async ctx => {
  const result = await findUserByName(ctx.request.body);
  ctx.body = {
    msg: result
  };
});
router.post('/findUser', async ctx => {
  const result = await findUserById(ctx.request.body);
  ctx.body = {
    msg: result
  };
});
//登陆
router.post('/login', async ctx => {
  const result = await login(ctx.request.body);
  ctx.body = result;
});
module.exports = router.routes();
