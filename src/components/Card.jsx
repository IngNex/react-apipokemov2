import React from 'react'
import {  Objects, ObjectBody, ObjectHeader, ObjectFigures, Estado, Weaknesses } from '../styles/ObjectsStyle'

export default function Card({pokemon}) {

  return (
    <Objects>
        <ObjectHeader>
            <Estado>
              <Weaknesses
              width='2.5rem'
              borderrads='5rem'
              backgroundColor={pokemon.type[0]}
              >{pokemon.id}</Weaknesses>
              <Weaknesses
              width='5rem'
              borderrads='5rem'
              backgroundColor={pokemon.type[0]}
              >{pokemon.type[0]}</Weaknesses>
              
            </Estado>
        </ObjectHeader>
        <ObjectBody>
            <ObjectFigures>
                <img src={pokemon.img} alt="person"/>
            </ObjectFigures>
            <h2>{pokemon.name}</h2>
            <p>Tamaño: {pokemon.height} - Peso: {pokemon.weight} </p>
            <p>Tipo: <span>{pokemon.type.join(' - ')}</span></p>
            <p>Debilidades: {pokemon.weaknesses.join(' - ')}</p>
        </ObjectBody>
    </Objects>
  )
}
