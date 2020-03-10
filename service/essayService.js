//this file is to deal with the data and pass it to dao
const { addEssay, deleteEssay, findEssay, updateEssay } = require('../dao/essayDao');
const essayModel = require('../models/Essay');
//pass params to dao
//add
module.exports.addEssay = async function(data) {
  return  await  addEssay(data);
};
//delete
module.exports.deleteEssay = async function(data) {
  return await deleteEssay(data);
};
//update
module.exports.updateEssay = async function(data) {
  return await updateEssay(data);
};
//findList
module.exports.getEssayList = async function(data) {
  console.log(await findEssay(data))
  return await findEssay(data);
};
