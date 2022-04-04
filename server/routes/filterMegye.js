const express=require('express')
const router=express.Router()

const {getFilterMegye}=require('../controller/filterMegye')

router.route('/').get(getFilterMegye)

module.exports=router