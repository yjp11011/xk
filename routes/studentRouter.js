require('babel-polyfill')
let express=require('express');
let studentDB=require('../db/studentDB');
let Student=require('../model/Student');
let routers=express.Router();
//查找所有学生
routers.get('/findAll',(req,resp)=>{
    studentDB.findAll().then((results)=>{
        resp.send(results)}).catch((err)=>{
            resp.send(err);
        })
});
//通过id查找学生
routers.get('/findById',(req,resp)=>{
    studentDB.findById(req.query.id).then((results)=>{
        resp.send(results)}).catch((err)=>{
            resp.send(err);
        })
});
//通过关键字查找学生
routers.get('/query/:keys',(req,resp)=>{
    studentDB.query(req.params.keys).then((results)=>{
        resp.send(results)}).catch((err)=>{
            resp.send(err);
        })
});
//保存学生
routers.post('/save',(req,resp)=>{
    let student=new Student();
    Object.assign(student,req.body);
      studentDB.save(student).then((results)=>{
        resp.send(results)}).catch((err)=>{
            resp.send(err);
        })
});
//修改信息
routers.post('/update',(req,resp)=>{
    var student=new Student();
    Object.assign(student,req.body);
    studentDB.update(student).then((results)=>{resp.send(results)})
    .catch((err)=>{resp.send(err)});
});
//删除信息
routers.post('/batchDelete',(req,resp)=>{
    studentDB.batchDelete(req.body).then((results)=>{resp.send(results)})
    .catch((err)=>{resp.send(err)});
})
module.exports=routers;