import React from 'react'
import { useEffect,useState } from 'react';
import Navigation from '../components/Navigation'
import { getClient } from '../API/cliente.js'
import { getProduct } from '../API/producto.js';
export default function Ventas() {
    const [clientes,setClientes] = useState([])
    const [productos,setProductos] = useState([])
    const getClientes = async()=>{
        let data = await getClient();
        setClientes([...clientes,...data])
    }

    const getProductos = async()=>{
        let data = await getProduct();
        setProductos([...productos,...data])
    }
    useEffect(()=>{
        getClientes()
        getProductos()
    },[])
  return (
    <>
        <Navigation />

        <div className="container my-5">
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="">Cliente</label>
                            <select className='form-control' name="cliente_id" id="">
                                <option value="" required>Seleccionar cliente</option>
                                {
                                    clientes.map((cliente,index) =>(
                                        <option key={index} value="{ cliente.id }" required>{ cliente.nombre + ' ' + cliente.apellido }</option>

                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Producto</label>
                            <select className='form-control' name="producto_id" id="">
                                <option value="" required>Seleccionar producto</option>
                                {
                                    productos.map((producto,index) =>(
                                        <option key={index} value="{ producto.id }" required>{ producto.producto }</option>

                                    ))
                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Cantidad</label>
                            <input type="number" step={0} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Fecha de venta</label>
                            <input type="date" name='fecha_venta' className="form-control" />
                        </div>
                        <button type='submit' className='btn btn-outline-success btn-sm'>Registrar</button>
                    </form>
                </div>
                <div className="col-sm-12 col-md-8">
                    <table className='table table-responsive-sm'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Cliente</th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Fecha venta</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>En desarrollo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}
