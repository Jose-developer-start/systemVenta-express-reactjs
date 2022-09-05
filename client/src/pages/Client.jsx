import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Navigation from '../components/Navigation'
//Import request API
import { getClient,saveClient,updateClient,destroyClient,getByIdClient } from '../API/cliente.js';
import Table from '../components/client/Table';
import Form from '../components/client/Form';
//Toastify
import {toast} from "react-toastify"
export default function Client() {
    const [data,setData] = useState([]) //Obtiene todos los datos de productos
    const [stateEdit,setStateEdit] = useState(false)
    const [form,setForm] = useState({
        id: '',
        nombre: '',
        apellido: '',
        dui: '',
        fecha_nacimiento: ''
    })
    const getClientes = async()=>{
        const result = await getClient()
        setData(result)
    }
    useEffect(()=>{
        getClientes();
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

    const validationForm = (form)=>{
        if(!form.nombre) {
            notifyError('Ingrese un nombre')
            return false;
        }
        if(!form.apellido) {
            notifyError('Ingrese un apellido'); return false
        }
        if(!form.dui) {
            notifyError('Ingrese un DNI')
            return false
        }
        if(!form.fecha_nacimiento) {
            notifyError('Ingrese un año de nacimiento')
            return false
        }
        return true

    }

    const onSubmit = async(e,id)=>{
        e.preventDefault();
        if(validationForm(form)){
            if(stateEdit === true){
                updateClient(id,form)
               setStateEdit(false)  
           }else{
               saveClient(form)
               notifySuccess('Cliente registrado')
           } 
   
           setForm({
               id: '',
               nombre: '',
               apellido: '',
               dui: '',
               fecha_nacimiento: ''
           })
        }
    }
    //edit cliente
    const editClient = async(id)=>{        
        const getClient = await getByIdClient(id)
        setForm({...getClient[0]})
        setStateEdit(true)

    }
    const cancelEdit = ()=>{
        setForm({
            id: '',
            nombre: '',
            apellido: '',
            dui: '',
            fecha_nacimiento: ''
        })
        setStateEdit(false)
    }
    //delete client
    const deleteClient = (id)=>{
        destroyClient(id)
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
                    <Table data={data} editClient={editClient} deleteClient={deleteClient} />
                </div>
            </div>
        </div>
    </>
  )
}
