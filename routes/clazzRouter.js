require('babel-polyfill')
let express=require('express');
let clazzDB=require('../db/clazzDB');
let Clazz=require('../model/Clazz');
let routers=express.Router();
//查找所有学生
routers.get('/findAll',(req,resp)=>{
    clazzDB.findAll().then((results)=>{
        resp.send(results)}).catch((err)=>{
            resp.send(err);
        })
});
//通过id查找学生
routers.get('/findById',(req,resp)=>{
    clazzDB.findById(req.query.id).then((results)=>{
        resp.send(results)}).catch((err)=>{
            resp.send(err);
        })
});
//通过关键字查找学生
routers.get('/query/:keys',(req,resp)=>{
    clazzDB.query(req.params.keys).then((results)=>{
        resp.send(results)}).catch((err)=>{
            resp.send(err);
        })
});
//保存学生
routers.post('/save',(req,resp)=>{
    let clazz=new Clazz();
    Object.assign(clazz,req.body);
      clazzDB.save(clazz).then((results)=>{
        resp.send(results)}).catch((err)=>{
            resp.send(err);
        })
});
//修改信息
routers.post('/update',(req,resp)=>{
    var clazz=new Clazz();
    Object.assign(clazz,req.body);
    clazzDB.update(clazz).then((results)=>{resp.send(results)})
    .catch((err)=>{resp.send(err)});
});
//删除信息
routers.post('/batchDelete',(req,resp)=>{
    clazzDB.batchDelete(req.body).then((results)=>{resp.send(results)})
    .catch((err)=>{resp.send(err)});
})
module.exports=routers;