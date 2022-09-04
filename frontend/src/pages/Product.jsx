import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Navigation from '../components/Navigation'

export default function Product() {
    const [data,setData] = useState([])
    const [form,setForm] = useState({
        producto: '',
        descripcion: '',
        stock: 0,
        precio: 0
    })
    const getProductos = async()=>{
        const res = await fetch('http://localhost:5000/api/productos');
        const result = await res.json();
        setData(result)
    }
    useEffect(()=>{
        getProductos();
    },[data])

    const onChange = (e)=>{
        const newData = {
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value, 
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value,
        }
        //Destructuring
        setForm({...form,...newData})
        
    } 

    const onSubmit = async(e)=>{
        e.preventDefault(); 
        fetch('http://localhost:5000/api/productos',{
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'Application/json'
            }
        })

        setForm({
            producto: '',
            descripcion: '',
            stock: '',
            precio: ''
        })
        console.log('Datos almacenados')
    }

  return (
    <>
        <Navigation />

        <div className="container my-5">
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <form action="" onSubmit={(e)=> onSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="">Producto: </label>
                            <input name='producto' onChange={(e)=> onChange(e)} type="text" className="form-control" value={form.producto} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Descripcion: </label>
                            <textarea name="descripcion" onChange={(e)=> onChange(e)} className='form-control' value={form.descripcion}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Stock: </label>
                            <input name='stock' type="number" onChange={(e)=> onChange(e)} className="form-control" value={form.stock} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Producto: </label>
                            <input name='precio' step=".01" onChange={(e)=> onChange(e)} type="number" className="form-control" value={form.precio} />
                        </div>
                        <button type='submit'>Guardar</button>
                    </form>
                </div>
                <div className="col-sm-12 col-md-8">
                    <table className="table table-responsive-sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Producto</th>
                                <th>Descripcion</th>
                                <th>Stock</th>
                                <th>Precio</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { data.map((producto, index) => (
                                <tr key={index}>
                                    <td>{ producto.id }</td>
                                    <td>{ producto.producto }</td>
                                    <td>{ producto.descripcion }</td>
                                    <td>{ producto.stock }</td>
                                    <td>{ producto.precio }</td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>

  )
}
