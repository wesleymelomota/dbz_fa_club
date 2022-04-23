import React from 'react'
import './imagens.css'
import gokussj1 from '../personagens/goku-ssj1.jpg'

export default props => {
    return (
        <div className="mt-3 m-2 imagens">
            {props.children}
        </div>
    )
}