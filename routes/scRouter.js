require('babel-polyfill')
let express=require('express');
let scDB=require('../db/scDB');
let SC=require('../model/SC');
let routers=express.Router();
//查找所有学生
routers.get('/findAll',(req,resp)=>{
    scDB.findAll().then((results)=>{
        resp.send(results)}).catch((err)=>{
            resp.send(err);
        })
});
//通过id查找学生
routers.get('/findById',(req,resp)=>{
    scDB.findById(req.query.id).then((results)=>{
        resp.send(results)}).catch((err)=>{
            resp.send(err);
        })
});
//通过关键字查找学生
routers.get('/query/:keys',(req,resp)=>{
    scDB.query(req.params.keys).then((results)=>{
        resp.send(results)}).catch((err)=>{
            resp.send(err);
        })
});
//保存学生
routers.post('/save',(req,resp)=>{
    let sc=new SC();
    Object.assign(sc,req.body);
      scDB.save(sc).then((results)=>{
        resp.send(results)}).catch((err)=>{
            resp.send(err);
        })
});
//修改信息
routers.post('/update',(req,resp)=>{
    var sc=new SC();
    Object.assign(sc,req.body);
    scDB.update(sc).then((results)=>{resp.send(results)})
    .catch((err)=>{resp.send(err)});
});
//删除信息
routers.post('/batchDelete',(req,resp)=>{
    scDB.batchDelete(req.body).then((results)=>{resp.send(results)})
    .catch((err)=>{resp.send(err)});
})
module.exports=routers;