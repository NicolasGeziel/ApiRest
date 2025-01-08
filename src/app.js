import express from 'express'
import conexao from './app/database/conexao.js'
import SelecaoController from './app/controllers/SelecaoController.js'
const app = express()

app.use(express.json())

app.get('/selecoes',SelecaoController.index)
app.get('/selecoes/:id',SelecaoController.Show)
app.post('/selecoes',SelecaoController.Store)
app.put('/selecoes/:id',SelecaoController.update)
app.delete('/selecoes/:id',SelecaoController.delete)

export default app
