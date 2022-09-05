import React from 'react'
import { useEffect,useState } from 'react';
import Navigation from '../components/Navigation'
import { getClient } from '../API/cliente.js'
import { getProduct } from '../API/producto.js';
import {getVentas,saveVenta,destroyVenta} from "../API/venta.js"
//Toastify
import {toast} from "react-toastify"
import Form from '../components/ventas/Form';
import Table from '../components/ventas/Table';
export default function Ventas() {
    const [clientes,setClientes] = useState([])
    const [productos,setProductos] = useState([])
    //Ventas all
    const [ventas,setVentas] = useState([])
    //new venta state
    const [venta,setVenta] = useState({
        "cliente_id": '',
        "producto_id": '',
        "cantidad":'',
        "fecha_venta": ''
    })
    const getClientes = async()=>{
        let data = await getClient();
        setClientes([...clientes,...data])
    }

    const getProductos = async()=>{
        let data = await getProduct();
        setProductos([...productos,...data])
    }
    const getVentasAll = async()=>{
        const dataVentas = await getVentas();
        setVentas(dataVentas)
    }
    const onChange = (e)=>{
        const newVenta = {
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value
        }
        setVenta({...venta,...newVenta})
    }
    //Notificaicones toastify
    const notifySuccess = (message)=> {
        toast.success(message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    const notifyError = (message)=> {
        toast.error(message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    //Validation formulario
    const validationForm = (form)=>{
        if(!form.cliente_id) {
            notifyError('Seleciona un cliente')
            return false;
        }
        if(!form.producto_id) {
            notifyError('Selecciona un producto'); return false
        }
        if(!form.cantidad) {
            notifyError('Ingrese una cantidad')
            return false
        }
        if(!form.fecha_venta) {
            notifyError('Se required una fecha de venta')
            return false
        }
        return true

    }
    const onSubmit = (e)=>{
        e.preventDefault()
        if(validationForm(venta)){
            saveVenta(venta)
            notifySuccess('Venta registrada')
        }
    }
    const delVenta = async(id)=>{
        await destroyVenta(id)
    }
    useEffect(()=>{
        getClientes() //Invoke function
        getProductos() //Invoke function
    },[])
    useEffect(()=>{
        getVentasAll()
    },[getVentasAll])
  return (
    <>
        <Navigation />

        <div className="container my-5">
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <Form onChange={onChange} onSubmit={onSubmit} productos={productos} clientes={clientes} />
                </div>
                <div className="col-sm-12 col-md-8">
                    <Table ventas={ventas} delVenta={delVenta} />
                </div>
            </div>
        </div>
    </>
  )
}
