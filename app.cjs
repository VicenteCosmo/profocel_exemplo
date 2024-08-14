const express = require('express')

const app= express()

//importing files
const database=require('./databate/connection.cjs') 
const router = require('./routes.js')

//setting
app.set('view engine', 'ejs')
app.use('/', router)
app.use(express.static('public'))

//porta
app.listen(4000, (e)=>{
    if(e){
        console.log('erro ao abrir a porta')
 
    }
    else{
        console.log('app rodando...')

    }
})
