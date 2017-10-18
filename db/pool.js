let mysql=require('mysql');
let pool=global.pool;
if(!pool){
    pool=mysql.createPool({
        host:'127.0.0.1',
        port:'3306',
        user:'root',
        password:'root',
        database:'web1701'
    });
    global.pool=pool;
}
module.exports={
    getConnection(){
        return new Promise(function(resolve,reject){
        pool.getConnection(function(err,connection){
            if(!err){
                resolve(connection);
            }
            else{
                reject(err);
            }
        });
      });
    },
    execute(sql){
        let _this=this;
        return new Promise(function(resolve,reject){
             let conn;
            _this.getConnection().then(function(connection){
                conn=connection;
                connection.query(sql,function(err,results){
                    if(!err){
                        resolve(results);
                    }
                    else{
                        reject(err);
                    }
                });
            }).catch(function(err){
                reject(err);
            }).finally(function(){
                if(conn){
                    conn.release();
                }
            }); 
        });
    }
}