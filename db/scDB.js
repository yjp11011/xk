let pool=require('./pool');
module.exports={
    //查找所有课程
    findAll(){
        let sql="select * from studentCourse"
         return pool.execute(sql);
    },
    //根据id查找学生
    findById(id){
        let sql="select * from studentCourse where id = "+id;
        return pool.execute(sql);
    },
    //根据关键字查找学生
    // query(keys){
    //     let sql="select * from studentCourse where name like '%"
    //     +keys+"%' or gender like '%"
    //     +keys+"%'"; 
    //     return pool.execute(sql);
    // },
    //保存学生信息
    save(studentCourse){
        let sql="insert into studentCourse values(null,"
        +studentCourse.grade+","
        +studentCourse.student_id+","
        +studentCourse.course_id+")";
        return pool.execute(sql);
    },
    //删除学生信息
    batchDelete(ids){
        let sql="delete from studentCourse where id in ("+ids.join()+")";
        return pool.execute(sql);
    },
    //修改学生信息
    update(studentCourse){
        let sql="update studentCourse set grade= "
        +studentCourse.grade+",student_id="
        +studentCourse.student_id+",course_id="
        +studentCourse.course_id+" where id ="
        +studentCourse.id;
        return pool.execute(sql);
    }
}