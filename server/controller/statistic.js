const mysql =require('mysql');
const configDb=require('../configDb.js')
const db=mysql.createConnection(configDb)

const getStatistic=(req,res)=>{
    db.query(`SELECT faj,count(*) darab FROM fa GROUP BY faj ORDER BY darab desc`,
                (err,results)=>{
    if(err)
        console.log(err)
    else
        res.status(200).send(results)
    })
}

module.exports ={getStatistic}