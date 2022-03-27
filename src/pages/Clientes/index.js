import React, { useState, useEffect } from 'react'
import style from './style.module.scss'
import CardCliente from '../../components/CardCliente/CardCliente'
import {readData} from  '../../services/firebase'

import CardStyle from '../../components/CardEstilizado'
import { useNavigate } from "react-router-dom";

export default function Clientes() {

    const navigate = useNavigate()

    const [clientes, setClientes] = useState([])
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        lerClientes()
    },[])

    const lerClientes = () => {

        var listaClientes = []
        readData()
            .then(resp => {
                resp.forEach((doc) =>{
                    var data = {
                        id: doc.id,
                        data: doc.data()
                    }
                    listaClientes.push(data)
                })

                setClientes(listaClientes)
                setCarregando(false)
            })
    }

    const handleAddCliente = () => {
        navigate('/cadCliente')
    }

    return (
        <>
            <div className={style.header}>
                <h1 className={style.title}>Clientes</h1>
                <span className={style.button} onClick={handleAddCliente}>Adicionar Cliente</span>
            </div>
            <div className={style.containerClientes}>
                {
                    
                    !carregando && clientes.map(cliente => {
                        return <CardStyle key={cliente.id} cliente={cliente.data} id={cliente.id} reload={lerClientes}/>
                    })
                }
            </div>
        </>
    )
}
