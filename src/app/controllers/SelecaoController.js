import conexao from '../database/conexao.js'
class SelecaoController{
    index(req,res){
    const sql = "Select * from selecoes"
    conexao.query(sql,(error,result)=>{
        if(error){
            res.status(404).json(error)
        }
        else{
            res.status(200).json(result)
        }
    })

}
    Show(req,res){
        const id = req.params.id
        const sql = "Select * from selecoes where id=?"
        conexao.query(sql, id,(error,result)=>{
         const linha = result[0]
          if(error){
             res.status(400).json(error)
          }else{
             res.status(200).json(linha)
          }
        })
     
     }
    Store(req,res){
        const valores = req.body
        const sql = "insert into selecoes SET ?"
    
        conexao.query(sql, valores, (error, result)=>{
            if(error){
                res.status(404).json(error)
            }else{
                res.status(201).json(result)
            }
        })
    }
    update(req,res){
        const id = req.params.id
        const corpo = req.body
        const sql = "Update selecoes SET ? where id=?"
        conexao.query(sql,[corpo,id],(error,result)=>{
            if(error){
                res.status(404).json(error)
            }else{
                res.status(201).json(result)
            }
        })
    }
    delete(req,res){
        const id = req.params.id
        const sql = "Delete from selecoes where id=?"
        conexao.query(sql, id, (error, result)=>{
            if(error){
                res.status(400).json(error)
            }else{
                res.status(200).json(result)
            }
    
        })
    }

}

export default new SelecaoController()