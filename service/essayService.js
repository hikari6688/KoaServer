//this file is to deal with the data and pass it to dao
const { addEssay, deleteEssay, findEssay, updateEssay, getDetail } = require('../dao/essayDao');
//add
module.exports.addEssay = async function(data) {
  return await addEssay(data);
};
//delete
module.exports.deleteEssay = async function(data) {
  let delResult = await deleteEssay(data);
  if (delResult.deletedCount == 1) {
    return {
      status: 200,
      data: null,
      msg: '文章删除成功'
    };
  } else {
    return {
      status: 200,
      data: null,
      msg: '文章删除失败'
    };
  }
};
//update
module.exports.updateEssay = async function(data) {
  let result = await updateEssay(data);
  if (result.nModified == 1) {
    return {
      status: 200,
      data: null,
      msg: '文章更新成功'
    };
  } else {
    return {
      status: 200,
      data: null,
      msg: '文章更新失败'
    };
  }
};
//findList
module.exports.getEssayList = async function(data) {
  return await findEssay(data);
};
//get detail
module.exports.getDetail = async function(data) {
  const result = await getDetail(data);
  if(result){
    return {
      status:200,
      data:result,
      msg:'查询成功'
    }
  }else{
    return {
      status:200,
      data:result,
      msg:'查询失败'
    }
  }
};
