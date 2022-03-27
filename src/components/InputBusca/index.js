import React, { useState } from 'react'
import style from './index.module.scss'


export default function InputBusca() {

    const [placeholder, setPlaceholder] = useState('🔍 Pesquisar')
    const [value, setValue] = useState('')

    const handleFocus = () => {
        setPlaceholder("Digite o nome do cliente que deseja verificar 🙎‍♀️")
    }

    const handleBlur = () => {
        setTimeout(() => {
            setPlaceholder("🔍 Pesquisar")
            setValue('')
        },200)  
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = () => {
        console.log('clico')
    }

    return (
        <div className={style.container}>
            <input
                value={value}
                className={style.input}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={placeholder}
                onChange={handleChange}
            />
            <div 
                className={style.searchBar}
                style={{display: value ? 'block' : 'none'}}
            >
                <div className={style.card} onClick={handleClick}>
                    <img src="https://via.placeholder.com/150"></img>
                    <span>Ítalo de Rezende</span>
                </div>
                <div className={style.card} onClick={handleClick}>
                    <img src="https://via.placeholder.com/150"></img>
                    <span>Gustavo</span>
                </div>
                <div className={style.card} onClick={handleClick}>
                    <img src="https://via.placeholder.com/150"></img>
                    <span>Juliana</span>
                </div>
                <div className={style.card} onClick={handleClick}>
                    <img src="https://via.placeholder.com/150"></img>
                    <span>Larissa</span>
                </div>
                <div className={style.card} onClick={handleClick}>
                    <img src="https://via.placeholder.com/150"></img>
                    <span>Marcos</span>
                </div>
            </div>
        </div>
    )
}
