import React from 'react'
import style from './style.module.scss'
import { AiFillPlusCircle } from "react-icons/ai"


export default function CardCliente({ cliente }) {
    return (
        <div className={style.container}>
            <div className={style.options}>alo</div>
            <a className={style.dots}>...</a>
            <img
                src="https://via.placeholder.com/100"
                className={style.cardImg}
            />
            <span className={style.title}>{cliente.nome}</span>
            <span style={{ color: cliente.anamnese ? 'black' : 'transparent' }}>-- Anamnese --</span>
            <span href="https://api.whatsapp.com/send?phone=35998650649" target="_blank">{formatCelNumber(cliente.telefone)}</span>
            <span>{cliente.cidade}</span>
            <div className={style.sessao}>
                <span >Adicionar Sessão</span>
                <AiFillPlusCircle size="2em" className={style.add} />
                
            </div>
        </div>
    )
}


function formatCelNumber(celNumber) {
    return celNumber.replace(/\D/g, '')
        .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
}