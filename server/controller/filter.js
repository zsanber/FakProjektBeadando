const mysql =require('mysql');
const configDb=require('../configDb.js')
const db=mysql.createConnection(configDb)

const getFilter=(req,res)=>{
    db.query(`SELECT f.id, f.faj, f.kormeret, f.telepules, m.nev 
              FROM fa f, megyek m 
              WHERE f.megyeid=m.id AND m.id=?`, [req.query.id],(err,results)=>{
    if(err)
        console.log(err)
    else
        res.status(200).send(results)
    })
}

module.exports ={getFilter}