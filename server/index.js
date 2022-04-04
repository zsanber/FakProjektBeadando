const express=require('express')
const cors=require('cors')
const morgan=require('morgan')

const statistic=require('./routes/statistic')
const filter=require('./routes/filter')
const filterMegye=require('./routes/filterMegye')

const app=express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/filter',filter)
app.use('/filter-megye',filterMegye)
app.use('/statistic',statistic)


app.listen(5000,()=>console.log('listening on port 5000...'))