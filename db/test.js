require('babel-polyfill');
let studentDB=require('./studentDB');

let Student=require('../model/Student');
studentDB.findAll().then(function(results){
    console.log(results);
}).catch(function(err){
    console.log('出错了',err);
});
// courseDB.findById(2).then(function(results){
//     console.log(results);
// }).catch(function(err){
//     console.log('出错了',err);
// });
// studentDB.query('十').then(function(results){
//     console.log(results);
// }).catch(function(err){
//     console.log('出错了',err);
// });
// let course=new Course(null,'jss',5);
// courseDB.save(course).then(function(results){
//     console.log(results);
// }).catch(function(err){
//     console.log('出错了',err);
// });
// studentDB.batchDelete([1,2]).then(function(results){
//     console.log(results);
// }).catch(function(err){
//     console.log('出错了',err);
// });
// studentDB.update(student).then(function(results){
//     console.log(results);
// }).catch(function(err){
//     console.log('出错了',err);
// });