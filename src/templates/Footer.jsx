import React from 'react'
import './Footer.css'
import telegram from './logo-telegram.png'
import linkdi from './logo-in.png'
import github from './logo-github.png'

export default (props) => {
    return (
        <footer className="footer bg-dark bg-gradient">
            <div className='desc'>
                <h4>Redes Sociais</h4>
            </div>
            <div className="content-footer">
                <a href='https://t.me/DevWesley'><img src={telegram} alt="logo-telegram" className="telegram-circle-line icon" /></a>
                <a href='https://www.linkedin.com/in/wesley-melo-43ab65180'><img src={linkdi} alt="logo-linkdin" className="whats-line icon" /></a>
                <a href='https://github.com/wesleymelomota'><img src={github} alt="logo-gitHub" className="icon" /></a>
                
            </div>
        </footer>

    )
}