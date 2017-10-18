let pool=require('./pool');
module.exports={
    //查找所有课程
    findAll(){
        let sql="select * from course"
         return pool.execute(sql);
    },
    //根据id查找学生
    findById(id){
        let sql="select * from course where id = "+id;
        return pool.execute(sql);
    },
    //根据关键字查找学生
    // query(keys){
    //     let sql="select * from course where name like '%"
    //     +keys+"%' or gender like '%"
    //     +keys+"%'"; 
    //     return pool.execute(sql);
    // },
    //保存学生信息
    save(course){
        let sql="insert into course values(null,'"
        +course.name+"',"
        +course.credit+")";
        return pool.execute(sql);
    },
    //删除学生信息
    batchDelete(ids){
        let sql="delete from course where id in ("+ids.join()+")";
        return pool.execute(sql);
    },
    //修改学生信息
    update(course){
        let sql="update course set name= '"
        +course.name+"',credit="
        +course.credit+" where id ="
        +course.id;
        return pool.execute(sql);
    }
}