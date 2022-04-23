import React from 'react'
import './Header.css'
import esferas from '../assets/imagens/logo-esferas.png'
import dragon2 from '../assets/imagens/logo-sheylon.png'


export default (props) => {
    return (
            <header className="header bg-dark bg-gradient">
                <div className="conteiner-flex">
                    <div className=""><img className="esferas" src={esferas}/></div>             
                    <div><h1>Dragon Ball Z Fã Club</h1></div>
                    <div><img className="dragon" src={dragon2}/></div>
                    
                </div>
            </header>
    )
}