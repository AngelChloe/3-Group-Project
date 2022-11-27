// import connectDB from './db/conn.js'
const pasttrips = require ('./routes/api/pasttripsAPI')

const express = require ('express')
const dotenv = require ('dotenv')
const db = require("./db/conn")



//connect database
// connectDB()

//dotenv config
dotenv.config()

const app = express()

//Creating API for user
app.use('/api/pasttrips', pasttrips)

const PORT = process.env.PORT || 3000
db.once("open",()=>{
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
})
//Express js listen method to run project on http://localhost:3000
