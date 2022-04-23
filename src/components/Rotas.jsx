import React from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'
import Home from '../home/Home'
import Personagens from '../personagens/Personagens'
import Galeria from '../galeria/Galaria'
import Vegeta from '../personagens/vegeta/Vegeta'
import Piccolo from '../personagens/piccolo/Piccolo'
import Inicio from '../inicio/Index'
import Gohan from '../personagens/gohan/Gohan'
import Trunks from '../personagens/trunks/Trunks'

export default () => {
    return (

        <Switch>
            <Route exact path="/" component={Inicio}/>
            <Route  path="/goku" component={Personagens}/>
            <Route  path="/vegeta" component={Vegeta}/>
            <Route  path="/piccolo" component={Piccolo}/>
            <Route  path="/gohan" component={Gohan}/>
            <Route  path="/trunks" component={Trunks}/>
            <Route  path="/galeria" component={Galeria}/>
            <Redirect from="*" to="/" />
        </Switch>
    )
}