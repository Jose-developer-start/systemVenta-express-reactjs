import { Router } from "express";
import dbConnection from "../dbConnection.js"
const route = Router();

//GET ALL
route.get('/productos', (req,res)=>{
    const productos = dbConnection.query('SELECT * FROM productos',(err,result)=>{
        res.status(200).json(result)
    })
})
//GET ID
route.get('/productos/:id', (req,res)=>{
    const productos = dbConnection.query('SELECT * FROM productos WHERE id=?',req.params.id,(err,result)=>{
        res.status(200).json(result)
    })
})
//POST
route.post('/productos', (req,res)=>{
    try{
        dbConnection.query("INSERT INTO productos SET ?",req.body,(err,result)=>{
            if(err) res.status(500).send(err)
            res.status(201).send('Inseted data')
        })

    }catch{
        res.status(500).send('Error al insertar')
    }
})
//PUT
route.put('/productos/:id', (req,res)=>{
    const {id} = req.params
    try{
        dbConnection.query("UPDATE productos SET ? WHERE id=?",[req.body, id],(err,result)=>{
            if(err) res.status(500).send(err)
            res.status(200).send('Update data')
        })

    }catch{
        res.status(500).send('Error al actualizar')
    }
})
//DELETE
route.delete('/productos/:id', (req,res)=>{
    const {id} = req.params
    try{
        dbConnection.query("DELETE FROM productos WHERE id=?",[id],(err,result)=>{
            if(err) res.status(500).send(err)
            res.status(200).send('Delete data')
        })

    }catch{
        res.status(500).send('Error al eliminar')
    }
})

export default route;