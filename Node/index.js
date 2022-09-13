const express = require('express')
const app = express()
const port =3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql=require('mysql')
//const sql = `insert into people(name) values('Rafael Luvian')`
const sql = `select name from nodedb.people limit 1;`

async function retorna_dados(callback){    
    const con = mysql.createConnection(config)
    await con.query(sql,function(error, results){
        if (error){
            console.log(error);
            return;
        }
        //console.log(results)
        return callback(results[0])
    })
    //await con.end()
}


app.get('/', (req,res) => {

    retorna_dados( (nome)=>{
        var x = nome.name
        //console.log(nome.name)
        res.send('</p><p><h1>Full Cycle Rocks!</h1></p></p> </p><p>' +  x + '</p></p>')
    })
    //res.send('</p><p><h1>Full Cycle Rocks!</h1></p></p> </p><p>' +  nome + '</p></p>')
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port )
})