import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Navigation from '../components/Navigation'
//Import request API
import { getProduct,saveProduct,updateProduct,destroyProduct,getByIdProduct } from '../API/producto.js';
import Table from '../components/product/Table';
import Form from '../components/product/Form';
//Toastify
import { toast } from 'react-toastify';

export default function Product() {
    const [data,setData] = useState([]) //Obtiene todos los datos de productos
    const [stateEdit,setStateEdit] = useState(false)
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
    const [form,setForm] = useState({
        id: '',
        producto: '',
        descripcion: '',
        stock: '',
        precio: ''
    })
    const validationForm = (form)=>{
        if(!form.producto) {
            notifyError('Nombre de producto vacio')
            return false;
        }
        if(!form.descripcion) {
            notifyError('descripción vacia'); return false
        }
        if(!form.stock) {
            notifyError('Ingrese un stock')
            return false
        }
        if(!form.precio) {
            notifyError('Ingrese un precio')
            return false
        }
        return true

    }
    const getProductos = async()=>{
        const result = await getProduct()
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

    const onSubmit = async(e,id)=>{
        e.preventDefault();
        if(validationForm(form)){

            if(stateEdit === true){
                 updateProduct(id,form)
                setStateEdit(false)  
            }else{
                saveProduct(form)
                notifySuccess('Producto agregado')
            } 
    
            setForm({
                producto: '',
                descripcion: '',
                stock: '',
                precio: ''
            })
        }
    }
    //edit product
    const editProduct = async(id)=>{        
        const getProduct = await getByIdProduct(id)
        setForm({...getProduct[0]})
        setStateEdit(true)

    }
    const cancelEdit = ()=>{
        setForm({
            producto: '',
            descripcion: '',
            stock: '',
            precio: ''
        })
        setStateEdit(false)
    }
    //delete product
    const deleteProduct = (id)=>{
        destroyProduct(id)
    }

  return (
    <>
        <Navigation />

        <div className="container my-5">
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <Form cancelEdit={cancelEdit} stateEdit={stateEdit} onChange={onChange} onSubmit={onSubmit} form={form} />
                </div>
                <div className="col-sm-12 col-md-8">
                    <Table data={data} editProduct={editProduct} deleteProduct={deleteProduct} />
                </div>
            </div>
            <div>
      </div>
        </div>
    </>

  )
}
