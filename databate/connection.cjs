const mysql= require('mysql')

const connection= mysql.createConnection({
    host: 'localhost', 
    password: 'cosmo',
    user: 'root'
})

connection.connect( (e)=>{
    if(e){
        console.log('erro ao conectar com a database...')
    }
    else{
        console.log('conexão bem-sucedida!')
    }
})

module.exports= connection