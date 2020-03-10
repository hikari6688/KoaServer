const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//实例化数据模版
const essaySchema = new Schema({
  //文章标题
  title: {
    type: String,
    require: true
  },
  //文章内容(富文本)
  content: {
    type: String,
    require: true
  },
  //创建时间
  creatDate:{
    type:String,
    require: true 
  },
  //修改时间
  updateDate:{
    type:String,
    require: true 
  },
  //作者
  author:{
    type:String,
    require:true
  },
  //描述
  describe:{
    type:String,
    require:true
  }
}); 
module.exports=essayModel=mongoose.model('essay',essaySchema);
