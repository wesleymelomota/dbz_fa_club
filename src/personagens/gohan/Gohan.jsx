import React from 'react'
import Main from '../../templates/Main'
import Personagem from '../Personagem'
import Imagens from '../../components/Imagens'
import gohanssj2 from './gohan-ssj2.jpg'
import gohanmistico from './gohan-mistico.jpg'
import gohanvscell from './gohan-vs-cells.jpg'


export default (props) => {
    return (
        <Main titulo="" >
            <div className="personagens">
                <h1>Personagem do Anime</h1>
                    <h2 className='mt-2 p-4'>Gohan</h2>                   
                <Personagem nome='Gohan'>
                    <Imagens>
                        <img src={gohanssj2} alt='gohan'/>
                    </Imagens>
                    <Imagens>
                        <img src={gohanmistico} alt='gohan'/>
                    </Imagens>
                    <Imagens>
                        <img src={gohanvscell} alt='gohan'/>
                    </Imagens>
                    <div className='descricao'>
                        <p className="mt-2">
                            Gohan é o filho mais velho do goku. É muito poderoso, desde pequeno. 
                            quando Criança já apresentava grande potencial para lutar.
                            Ajudou na luta contra os sayajins, contra o perveso freeza, cell e majin boo.
                            Gohan foi o salvador da terra na luta contra cell. Ele o derrotou com um gigantesco
                            kamehameha que o destruiu a nível celular.
                        </p>
                </div>
                </Personagem>
            </div>
        </Main>
    )
}