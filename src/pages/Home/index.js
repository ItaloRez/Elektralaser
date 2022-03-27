import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";

//scss
import style from './home.module.scss'

//Components
import MenuButtons from '../../components/Menu/Button';
import Clientes from '../Clientes';
import Header from '../../components/Header';
import CadCliente from '../CadCliente';
import PlanoDeFundo from '../PlanoDeFundo';

export default function Home() {
    return (
        <>
            <Header />
            <div className={style.main}>
                <Router>
                    <div className={style.menu}>
                        <MenuButtons />
                    </div>
                    <div className={style.content}>

                        <Routes>
                            <Route path="/clientes" element={<Clientes />} />
                            <Route path="/cadCliente" element={<CadCliente />} />
                            <Route index path="/" element={<PlanoDeFundo />} />
                        </Routes>
                    </div>
                </Router>
            </div>
        </>
    )
}

