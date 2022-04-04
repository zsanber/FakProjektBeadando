const express=require('express')
const router=express.Router()

const {getStatistic}=require('../controller/statistic')

router.route('/').get(getStatistic)

module.exports=router