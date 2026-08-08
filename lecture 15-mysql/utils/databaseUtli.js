const mysql=require('mysql2');

const pool=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"sn24ai013",
    database:"airbnb"
})

module.exports=pool.promise()