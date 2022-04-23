import React from 'react'
import Main from '../../templates/Main'
import Personagem from '../Personagem'
import Imagens from '../../components/Imagens'
import piccolo from './piccolo.jpg'
import piccolo2 from './piccolo2.jpg'

export default (props) => {
    return (
        <Main titulo="" >
            <div className="personagens">
                <h1>Personagem do Anime</h1>
                    <h2 className='mt-2 p-4'>Piccolo</h2>                   
                <Personagem nome='Guerreiro Namekusei'>
                    <Imagens>
                        <img src={piccolo} alt='piccolo'/>
                    </Imagens>
                    <Imagens>
                        <img src={piccolo2} alt='piccolo'/>
                    </Imagens>
                    <div className='descricao'>
                        <p className="mt-2">
                           Piccolo é um alien da raça namukuseijin. no começo
                           piccolo era inimigo do goku, Após ser derrotado por Goku, ele se une ao mesmo para conseguir derrotar novas ameaças. 

                        </p>
                </div>
                </Personagem>
            </div>
        </Main>
    )
}