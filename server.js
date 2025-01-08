import app from './src/app.js'

import conexao from './src/app/database/conexao.js'

const PORT = 3000

conexao.connect((error) =>{
    if(error)
        console.log(error)
    else{
        console.log('Conexao efetuada com sucesso!!!')
    }
})

app.listen(PORT, ()=>{
    console.log(`servidor http://localhost:${PORT}`)
})