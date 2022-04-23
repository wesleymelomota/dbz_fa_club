import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

export default (props) => {
    return (
        <nav className='navegacao navbar-dark bg-dark'>
            <input type="checkbox" id="check" />
            <label htmlFor="" for="check" className="checkbtn" type="label">
                <span className="navbar-toggler-icon"></span>
            </label>
            <ul class="lista">
                
                        {/*<li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="#">Home</Link>
    </li>*/}
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/">Inicio</Link>
                        </li>
                        
                        <li class="nav-item">
                            <Link class="nav-link" to="/galeria">Galeria</Link>
                        </li>
                        
                        <li class="menu-drop dropdown">
                            <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Personagens
                            </a>      
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link class="dropdown-item" to="/goku">Goku</Link></li>
                                <li><Link class="dropdown-item" to="/vegeta">Vegeta</Link></li>
                                <li><Link class="dropdown-item" to="/piccolo">Piccolo</Link></li>
                                <li><Link class="dropdown-item" to="/gohan">Gohan</Link></li>
                                <li><Link class="dropdown-item" to="/trunks">Trunks</Link></li>
                                {/*<li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">Em breve</a></li>*/}
                            </ul>
                        </li>
                        
                        
                    </ul>
        </nav>

        
    )
}