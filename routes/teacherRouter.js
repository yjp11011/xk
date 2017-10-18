require('babel-polyfill')
let express=require('express');
let teacherDB=require('../db/teacherDB');
let Teacher=require('../model/Teacher');
let routers=express.Router();
//查找所有学生
routers.get('/findAll',(req,resp)=>{
    teacherDB.findAll().then((results)=>{
        resp.send(results)}).catch((err)=>{
            resp.send(err);
        })
});
//通过id查找学生
routers.get('/findById',(req,resp)=>{
    teacherDB.findById(req.query.id).then((results)=>{
        resp.send(results)}).catch((err)=>{
            resp.send(err);
        })
});
//通过关键字查找学生
routers.get('/query/:keys',(req,resp)=>{
    teacherDB.query(req.params.keys).then((results)=>{
        resp.send(results)}).catch((err)=>{
            resp.send(err);
        })
});
//保存学生
routers.post('/save',(req,resp)=>{
    let teacher=new Teacher();
    Object.assign(teacher,req.body);
      teacherDB.save(teacher).then((results)=>{
        resp.send(results)}).catch((err)=>{
            resp.send(err);
        })
});
//修改信息
routers.post('/update',(req,resp)=>{
    var teacher=new Teacher();
    Object.assign(teacher,req.body);
    teacherDB.update(teacher).then((results)=>{resp.send(results)})
    .catch((err)=>{resp.send(err)});
});
//删除信息
routers.post('/batchDelete',(req,resp)=>{
    teacherDB.batchDelete(req.body).then((results)=>{resp.send(results)})
    .catch((err)=>{resp.send(err)});
})
module.exports=routers;