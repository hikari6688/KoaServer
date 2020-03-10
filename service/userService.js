//servicea层处理数据和逻辑
const { register, findUserByName, findUserById,login } = require('../dao/userDao');
const user = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//处理数据后将数据传给dao层
module.exports.register = async function(data) {
  const newUser = new user({
    name: data.name,
    gender: data.gender,
    age: data.age,
    passWord: data.passWord
  });
  function passHash() {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.passWord, salt, function(err, hash) {
          if (err) {
            throw new Error(err);
          }
          newUser.passWord = hash;
          resolve();
        });
      });
    });
  }
  await passHash();
  return await register(newUser);

  // bcrypt.genSalt(10, (err,salt) => {
  //   bcrypt.hash(newUser.passWord,salt).then((hash, err) => {
  //     if (err) throw new Error(err);
  //     newUser.passWord = hash;
  //     return newUser;
  //   }).then(async (data)=>{
  //     return await register(data);
  //   });
  // });
  
};
module.exports.findUserByName = async function(data) {
  return await findUserByName(data);
};
module.exports.findUserById = async function(data) {
  return await findUserById(data);
};
//登陆验证
module.exports.login = async function(data) {
  //获取用户输入的明文密码
  const passWord=data.passWord;
  //获取数据库的hahs密码
  const result = await login(data);
  const hashPass=result.passWord;
  //进行hash对比
  const loginResult= async function checkUser(username, password) {
    console.log(passWord,222,hashPass)
    const match = await bcrypt.compare(passWord,hashPass);
    // const privateKey = fs.readFileSync('private.key');
    // const token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256'});
    var token = jwt.sign({ nam: data.name,passWord:data.passWord}, 'shhhhh',{ expiresIn: '12h' });
    // jwt.verify(token, 'shhhhh', function(err, decoded) {
    //   console.log(decoded) // bar
    // });
    console.log(token)
    if(match) {
        //密码正确
        return {
          status:200,
          data:{
            token:`Bearer ${token}`,
            name:result.name,
            age:result.age,
            gender:result.gender
          },
          message:'登陆成功'
        }
    }else{
      //密码错误
      return {
        status:200,
        data:null,
        message:'用户密码错误'
      }
    }
}
  return await loginResult();
};