//dao is used to connect to db and change data in db
const Essay = require('../models/Essay');
const mongoose=require('mongoose')
const user = require('../models/User');

//add
module.exports.addEssay = async function(data) {
 return await Essay.create(data);
};
//delte
module.exports.deleteEssay = async function(data) {
  return await Essay.deleteOne({_id: data.id });
};
//find essaylist
module.exports.findEssay = async function(data) {
  let result = {};
  let queryInfo = {};
  _each = data.each ? data.each : 10; //每页查询条数
  _currentPage = data.currentPage ? data.currentPage : 1; //页数
  if (data.title) {
    queryInfo.title = {
      $regex: data.title,
      $options: '$i'
    }; //模糊查询条件
  } else {
    queryInfo = null;
  }
  result.count = await Essay.find(queryInfo).countDocuments(); // 数据总条数
  result.totalPage = Math.ceil(result.count / Number(_each)); // 总页数
  result.data = await Essay.find(queryInfo)
    .skip((Number(_currentPage) - 1) * Number(_each))
    .limit(Number(_each));
  return result;
};
//get page detail
module.exports.getDetail= async function(data) {
  return await Essay.findById(data.id,function(err,data){
    if(err) throw err;
  });
};
//updateessay
module.exports.updateEssay = async function(data) {
  return await Essay.updateOne({_id:data.id},data);
};
