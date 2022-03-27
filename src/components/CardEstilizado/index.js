import React from 'react';
import style from './style.module.scss'
import { MdOutlineModeEditOutline, MdDeleteOutline, MdRemoveRedEye } from "react-icons/md"
import { BsWhatsapp } from 'react-icons/bs'
import { deleteClient } from '../../services/firebase'

const { ipcRenderer } = window.require("electron")

export default function CardEstilizado({ cliente, id, reload }) {

    const handleWhats = () => {
        ipcRenderer.send('whats', cliente.telefone)
    }

    const handleDelete = () => {
        deleteClient(id)
        reload()
    }

    const handleEdit = () => {}

    return (
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.card}>
                    <div className={style.cardContent}>
                        <div className={style.image}>
                            <img src="https://via.placeholder.com/100" alt="" />
                        </div>

                        <div className={style.mediaIcons}>
                            <MdDeleteOutline size="1.3em" onClick={handleDelete}/>
                            <MdOutlineModeEditOutline size="1.3em" onClick={handleEdit}/>
                        </div>

                        <div className={style.nameProfession}>
                            <span className={style.name}>{cliente.nome}</span>
                            <span
                                className={style.profession}
                                onClick={handleWhats}
                            >
                                <BsWhatsapp />{formatCelNumber(cliente.telefone)}   
                            </span>
                        </div>

                        <div className={style.rating} >
                            <span>{cliente.anamnese ? "--Anamnese--" : "⠀"}</span>
                        </div>

                        <div className={style.rating} >
                            <span badge={cliente.sessoes ? cliente.sessoes.length : 0}>Sessões</span>
                        </div>

                        <div className={style.button}>
                            <button className={style.perfil}>Ver Perfil</button>
                            <button className={style.novaSessao}>Cadastrar Sessão</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function formatCelNumber(celNumber){
    return celNumber.replace(/\D/g, '')
        .replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4')
}