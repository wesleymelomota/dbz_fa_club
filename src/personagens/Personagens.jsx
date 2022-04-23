import React from 'react'
import Main from '../templates/Main'
import './personagens.css'
import Personagem from './Personagem'
import Imagens from '../components/Imagens'
import gokussj3 from './goku-ssj3.jpg'
import gokussj2 from './goku-ssj2.jpg'
import goku from './goku-ultra.jpg'

{/*componente Principal, qualquer ateração aqui, se refletirar nos outros components personagens */}
export default (props) => {
    return (
        <Main titulo="" >
            <div className=" personagens">
                
                <h1>Personagem do Anime</h1>
                    <h2 className='mt-2 p-4'>Son Goku</h2>                   
                <Personagem nome='Son Goku'>
                    <Imagens>
                        <img src={gokussj2} alt='goku'/>
                    </Imagens>
                    <Imagens>
                        <img src={gokussj3} alt='goku'/>
                    </Imagens>
                    <Imagens>
                        <img src={goku} alt='goku'/>
                    </Imagens>
                    <div className='descricao'>
                        <p className="mt-2">Goku, super sayajin criado na terra. filho de Bardack e gine
                            possui poderes inimaginavel. goku possui 4 transformações sendo
                            elas, super sayajin 1, super sayajin 2, super sayajin 3,
                            super sayajin Blue e sua tecnica do instinto superior que é
                            uma tecnica usado por deuses da destruição que foi ensinado
                            pelos anjos
                        </p>
                </div>
                </Personagem>
                
            </div>
        </Main>
    )
}