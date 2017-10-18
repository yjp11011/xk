require('babel-polyfill')
let express=require('express');
let courseDB=require('../db/courseDB');
let Course=require('../model/Course');
let routers=express.Router();
//查找所有学生
routers.get('/findAll',(req,resp)=>{
    courseDB.findAll().then((results)=>{
        resp.send(results)}).catch((err)=>{
            resp.send(err);
        })
});
//通过id查找学生
routers.get('/findById',(req,resp)=>{
    courseDB.findById(req.query.id).then((results)=>{
        resp.send(results)}).catch((err)=>{
            resp.send(err);
        })
});
//通过关键字查找学生
routers.get('/query/:keys',(req,resp)=>{
    courseDB.query(req.params.keys).then((results)=>{
        resp.send(results)}).catch((err)=>{
            resp.send(err);
        })
});
//保存学生
routers.post('/save',(req,resp)=>{
    let course=new Course();
    Object.assign(course,req.body);
      courseDB.save(course).then((results)=>{
        resp.send(results)}).catch((err)=>{
            resp.send(err);
        })
});
//修改信息
routers.post('/update',(req,resp)=>{
    var course=new Course();
    Object.assign(course,req.body);
    courseDB.update(course).then((results)=>{resp.send(results)})
    .catch((err)=>{resp.send(err)});
});
//删除信息
routers.post('/batchDelete',(req,resp)=>{
    courseDB.batchDelete(req.body).then((results)=>{resp.send(results)})
    .catch((err)=>{resp.send(err)});
})
module.exports=routers;