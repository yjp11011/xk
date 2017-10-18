let pool=require('./pool');
module.exports={
    //查找所有课程
    findAll(){
        let sql="select * from clazz"
         return pool.execute(sql);
    },
    //根据id查找学生
    findById(id){
        let sql="select * from clazz where id = "+id;
        return pool.execute(sql);
    },
    //根据关键字查找学生
    // query(keys){
    //     let sql="select * from clazz where name like '%"
    //     +keys+"%' or gender like '%"
    //     +keys+"%'"; 
    //     return pool.execute(sql);
    // },
    //保存学生信息
    save(clazz){
        let sql="insert into clazz values(null,'"
        +clazz.name+"','"
        +clazz.createDate+"',"
        +clazz.teacher_id+")";
        return pool.execute(sql);
    },
    //删除学生信息
    batchDelete(ids){
        let sql="delete from clazz where id in ("+ids.join()+")";
        return pool.execute(sql);
    },
    //修改学生信息
    update(clazz){
        let sql="update clazz set name='"
        +clazz.name+"',createDate='"
        +clazz.createDate+"',teacher_id="
        +clazz.teacher_id+" where id ="
        +clazz.id;;
        return pool.execute(sql);
    }
}