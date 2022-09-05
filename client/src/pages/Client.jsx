import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Navigation from '../components/Navigation'
//Import request API
import { getClient,saveClient,updateClient,destroyClient,getByIdClient } from '../API/cliente.js';
import Table from '../components/client/Table';
import Form from '../components/client/Form';

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

    const onSubmit = async(e,id)=>{
        e.preventDefault();
        if(stateEdit === true){
             updateClient(id,form)
            setStateEdit(false)  
        }else{
            saveClient(form)
        } 

        setForm({
            id: '',
            nombre: '',
            apellido: '',
            dui: '',
            fecha_nacimiento: ''
        })
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
