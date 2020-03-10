//dao is used to connect to db and change data in db
const Essay =require('../models/Essay');
const user =require('../models/User'); 

//add
module.exports.addEssay= async function (data) {

  // return await essayModel.create(data);
}
//delte
module.exports.deleteEssay= async function (data) {
  return await essayModel.deleteOne(data);
}
//find essaylist
module.exports.findEssay= async function (data) {

 return await Essay.find(); 
  
  // let  result = {};
  // let queryInfo={};
  // queryInfo.each=data.each?data.each:10;
  // queryInfo.currentPage=data.currentPage?data.currentPage:1;
  // if (data.title) {
  //   queryInfo.title  = {
  //     $regex: data.title,
  //     $options: "$i"
  //   }; //模糊查询条件
  // } else {
  //   queryInfo= null;
  // }
  // result.count = await essayModel.find(queryInfo).countDocuments(); // 数据总条数
  // result.totalPage = Math.ceil(queryInfo.count / Number(queryInfo.each)); // 总页数
  //   result.data = await essayModel
  //     .find({ name: { $regex: '女孩', $options: '$i'}})
  //     .skip((Number(queryInfo.currentPage) - 1) * Number(queryInfo.each))
  //     .limit(Number(queryInfo.each));
  // return result;
}
//updateessay
module.exports.updateEssay= async function (data) {
  return await essayModel.updateOne(data);
}