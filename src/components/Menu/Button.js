import React, { useState, useEffect } from 'react'
import { BsPeople } from "react-icons/bs"
import style from './style.module.scss'
import { IoPersonAddOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { CgScreen } from "react-icons/cg";

import { useNavigate } from "react-router-dom";

export default function MenuButtons() {

    const navigate = useNavigate()

    // useEffect(() => {
    //     navigate('/')
    // },[])

    const buttons = [
        {
            button: "Plano de fundo", 
            icon: <CgScreen size="2.5em"/>, 
            url: '/'
        },
        {
            button: "Clientes", 
            icon: <BsPeople size="2.5em"/>, 
            url: '/clientes'
        },
        {
            button: "Cadastrar", 
            icon: <IoPersonAddOutline size="2.5em"/>, 
            url: '/cadCliente'
        },
        {
            button: "Horários", 
            icon: <AiOutlineClockCircle size="2.5em"/>, 
            url: '/clientes'
        },
        {
            button: "Estatísticas", 
            icon: <VscGraph size="2.5em"/>, 
            url: '/clientes'
        },
    ]
    const [index, setIndex] = useState('Plano de fundo')
    
    return (
        <div className={style.container}>
            {buttons.map((button) => (
                <div
                    key={button.button}
                    onClick={() => {
                        setIndex(button.button)
                        navigate(`${button.url}`)
                    }}
                    className={index == button.button ? style.selected : null}
                >
                    <div className={style.button}>
                        <div 
                            className={style.selectedBox}
                            style={{background: index == button.button ? '#1C1D21' : 'transparent'}}
                        ></div>
                        <span className={style.icon}>
                            {button.icon}
                            {button.button}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}
