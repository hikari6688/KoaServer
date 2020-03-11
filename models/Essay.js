const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//实例化数据模版
const essaySchema = new Schema(
  {
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
    //创建时间戳
    createTime: {
      type: Date,
      default: Date.now
    },
    //更新时间戳
    updateTime: {
      type: Date,
      default: Date.now
    },
    //作者
    author: {
      type: String,
      require: true
    },
    //描述
    describe: {
      type: String,
      require: true
    }
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
  }
);
module.exports = Essay = mongoose.model('essay', essaySchema);


