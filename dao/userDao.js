//dao层只用关心和数据库的连接
const userModel=require('../models/User');
//暴露对数据库操作的方法出去
module.exports.register= async function (data) {
  return await userModel.create(data);
  
}
//根据用户姓名查询
module.exports.findUserByName= async function (data) {
  return await userModel.find(data);
}
//根据用户唯一id查询
module.exports.findUserById= async function (data) {
  return await userModel.findOne(data);
}
//登陆
module.exports.login= async function (data) {
  return await userModel.findOne({name:data.name});
}