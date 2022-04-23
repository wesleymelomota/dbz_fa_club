import React from 'react'
import Main from '../../templates/Main'
//import './vegeta.css'
import Personagem from '../Personagem'
import Imagens from '../../components/Imagens'
import vegetassj from './vegeta-ssj.jpg'
import vegetassjblue from './vegeta-ssj-blue.jpg'
import vegetaego from './vegeta-ego-superior.jpg'

export default (props) => {
    return (
        <Main titulo="" >
            <div className="personagens">
                <h1>Personagem do Anime</h1>
                    <h2 className='mt-2 p-4'>Principe Vegeta</h2>                   
                <Personagem nome='Principe Vegeta'>
                    <Imagens>
                        <img src={vegetassj} alt='vegeta'/>
                    </Imagens>
                    <Imagens>
                        <img src={vegetassjblue} alt='vegeta-ssj-blue'/>
                    </Imagens>
                    <Imagens>
                        <img src={vegetaego} alt='vegeta-ego-superior'/>
                    </Imagens>
                    <div className='descricao'>
                        <p className="mt-2">
                            Principe Vegeta, Orgulhoso guerreiro da raça sayajin.
                            pai de trunks e esposo de bulma.
                            Vegeta é um guerreiro formidavel, gênio em batalhas. Sua tecnica especial,
                            Galick Ho é uma onda de enegia que é similar ao kamehameha. também tem 
                            o ataque big-bang-attack que lança uma bola de energia extremamente poderosa.
                            e sem contar com outras diversas como Resplendor final, focus flash, final shine attack e por ai vai... 
                            Tem suas transfomações como, Oozaru(macaco gigante), Super sayajin 1, Super sayajin 2,
                            Super sayajin God, Super sayajin Blue, Super sayajin blue evolution e sua mais poderosa, Ego superior.

                        </p>
                </div>
                </Personagem>
            </div>
        </Main>
    )
}