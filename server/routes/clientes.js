import { Router } from "express";
import dbConnection from "../dbConnection.js"
const route = Router();

//GET ALL
route.get('/clientes', (req,res)=>{
    const clientes = dbConnection.query('SELECT * FROM clientes',(err,result)=>{
        res.status(200).json(result)
    })
})
//GET ID
route.get('/clientes/:id', (req,res)=>{
    const clientes = dbConnection.query('SELECT * FROM clientes WHERE id=?',req.params.id,(err,result)=>{
        res.status(200).json(result)
    })
})
//POST
route.post('/clientes', (req,res)=>{
    try{
        dbConnection.query("INSERT INTO clientes SET ?",req.body,(err,result)=>{
            if(err) res.status(500).send(err)
            res.status(201).send('Inseted data')
        })

    }catch{
        res.status(500).send('Error al insertar')
    }
})
//PUT
route.put('/clientes/:id', (req,res)=>{
    const {id} = req.params
    try{
        dbConnection.query("UPDATE clientes SET ? WHERE id=?",[req.body, id],(err,result)=>{
            if(err) res.status(500).send(err)
            res.status(200).send('Update data')
        })

    }catch{
        res.status(500).send('Error al actualizar')
    }
})
//DELETE
route.delete('/clientes/:id', (req,res)=>{
    const {id} = req.params
    try{
        dbConnection.query("DELETE FROM clientes WHERE id=?",[id],(err,result)=>{
            if(err) res.status(500).send(err)
            res.status(200).send('Delete data')
        })

    }catch{
        res.status(500).send('Error al eliminar')
    }
})

export default route;