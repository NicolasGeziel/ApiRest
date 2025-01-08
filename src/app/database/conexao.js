import mysql from 'mysql2'

const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Nicolasg@2004',
    port:'3306',
    database:'dbcopa'
})

export default conexao