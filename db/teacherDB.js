let pool=require('./pool');
module.exports={
    //查找所有课程
    findAll(){
        let sql="select * from teacher"
         return pool.execute(sql);
    },
    //根据id查找学生
    findById(id){
        let sql="select * from teacher where id = "+id;
        return pool.execute(sql);
    },
    //根据关键字查找学生
    // query(keys){
    //     let sql="select * from teacher where name like '%"
    //     +keys+"%' or gender like '%"
    //     +keys+"%'"; 
    //     return pool.execute(sql);
    // },
    //保存学生信息
    save(teacher){
        let sql="insert into teacher values(null,'"
        +teacher.name+"',"
        +teacher.telPhone+")";
        return pool.execute(sql);
    },
    //删除学生信息
    batchDelete(ids){
        let sql="delete from teacher where id in ("+ids.join()+")";
        return pool.execute(sql);
    },
    //修改学生信息
    update(teacher){
        let sql="update teacher set name= '"
        +teacher.name+"',telPhone='"
        +teacher.telPhone+"' where id ="
        +teacher.id;
        return pool.execute(sql);
    }
}