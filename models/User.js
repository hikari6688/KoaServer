const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//实例化数据模版
const userSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  },
  gender:{
    type: Number,
    require: true 
  },
  passWord:{
    type:String,
    require:true
  }
}); 
mongoose.model('users',userSchema);
module.exports=User=mongoose.model('users',userSchema);
