import React from 'react'
import './Main.css'
import Header from './Header'


export default (props) => {
    return (
        <>
        <Header {...props}/>
        <main  className={`content `}>
            <div className="mt-3">
                
                {props.children}
            </div>
        </main>
        </>
    )
}