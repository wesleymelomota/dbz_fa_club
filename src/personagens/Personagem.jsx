import React from 'react'
import './personagem.css'

export default props => {
    return (
        <div className="person ">
            <div className="conteiner">
                {props.children}
                
                
            </div>
        </div>
    )
}