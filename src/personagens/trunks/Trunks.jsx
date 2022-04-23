import React from 'react'
import Main from '../../templates/Main'
import Personagem from '../Personagem'
import Imagens from '../../components/Imagens'
import trunks from './trunks.jpg'
import trunksssj from './trunks-ssj1.jpg'
import trunksfuturo from './trunks-futuro.jpg'


export default (props) => {
    return (
        <Main titulo="" >
            <div className="personagens">
                <h1>Personagem do Anime</h1>
                <h2 className='mt-2 p-4'>Trunks</h2>
                <Personagem nome='Principe Vegeta'>
                    <Imagens>
                        <img src={trunks} alt='trunks'/>
                    </Imagens>
                    <Imagens>
                        <img src={trunksssj} alt='trunks vc freeza'/>
                    </Imagens>
                    <Imagens>
                        <img src={trunksfuturo} alt='trunks do futuro'/>
                    </Imagens>
                    <div className='descricao'>
                                       
                        <p className="mt-2">
                            Trunks é um saiyajin filho de vegeta e bulma.
                            ha duas versões do trunks. Existe a versão do futuro no qual ele passa 
                            por momentos terriveis por causa dos androides 17 e 18. E tem a versão 
                            criança de trunks na linha do tempo no presente.
                        </p>
                </div>
                </Personagem>
            </div>
        </Main>
    )
}