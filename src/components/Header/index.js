import React from 'react'
import style from './style.module.scss'
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai"
import { VscChromeMaximize, VscChromeMinimize, VscChromeClose } from "react-icons/vsc"
import InputBusca from '../InputBusca'
const { ipcRenderer } = window.require("electron");


export default function Header() {

    const closeWindow = () => {
        ipcRenderer.send('close')
    }

    const minimizeWindow = () => {
        ipcRenderer.send('minimize')
    }

    const maximizeWindow = () => {
        ipcRenderer.send('maximize')
    }

    return (
        <div className={style.header}>
            <ul className={style.navigationMenu}>
                <li>
                    <a>
                        <AiOutlineLeft />
                    </a>
                </li>
                <li>
                    <a>
                        <AiOutlineRight />
                    </a>
                </li>
            </ul>

            <InputBusca/>

            <ul className={style.navigationMenu}>
                <li>
                    <a onClick={minimizeWindow}>
                        <VscChromeMinimize />
                    </a>
                </li>
                <li>
                    <a onClick={maximizeWindow}>
                        <VscChromeMaximize />
                    </a>
                </li>
                <li>
                    <a id={style.close} onClick={closeWindow}>
                        <VscChromeClose />
                    </a>
                </li>
            </ul>
        </div>
    )
}
