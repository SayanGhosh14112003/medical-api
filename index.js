import express from 'express'
import cors from 'cors'
import doctors from './doctor.js'
import medicines from './medicine.js'
import ambulances from './ambulence.js'
const app=express()
app.use(cors({
    origin:"*"
}))

app.get('/doctors',(req,res)=>{
    res.status(200).json({
        data:doctors
    })
})
app.get('/medicines',(req,res)=>{
    res.status(200).json({
        data:medicines
    })
})
app.get('/ambulences',(req,res)=>{
    res.status(200).json({
        data:ambulances
    })
})



const port=process.env.PORT || 8000
app.listen(port,()=>{
    console.log("done!!!!!")
})
