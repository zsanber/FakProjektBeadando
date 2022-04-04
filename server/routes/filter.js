const express=require('express')
const router=express.Router()

const {getFilter}=require('../controller/filter')

router.route('/').get(getFilter)

module.exports=router