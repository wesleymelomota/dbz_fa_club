import React from 'react'
import './app.css'
import Footer from '../templates/Footer'
import Nav from '../templates/Nav'
import { BrowserRouter } from 'react-router-dom'
import Rotas from '../components/Rotas'
import Header from '../templates/Header'


export default props => {
    return (
        <BrowserRouter>
            <div className="app">
                
                <Rotas/>
                <Nav/>
                <Footer/>

            </div>
        </BrowserRouter>
    )
}