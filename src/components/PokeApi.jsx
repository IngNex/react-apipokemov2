import React, { useEffect, useState } from 'react'
import {Container, Title} from '../styles/ContainerStyle'
import {Logo} from '../styles/Logo'
import logo from '../assets/logo.png'
import Card from './Card'
import { ListObjects} from '../styles/ListaStyle'

export default function PokeApi() {
  const [pokemones, setPokemones] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPokemones = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
        const data = await response.json()

        setPokemones(data.pokemon)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getPokemones();
  },[])

  return (
    <Container>
      <Logo>
        <img src={logo} alt='pokemon'/>
      </Logo>
      <Title>Consumo de ApiPokemon</Title>
      <ListObjects>
        {loading ? <p>Cargando...</p>
        :
        pokemones.map((pokemon) => <Card key={pokemon.id} pokemon={pokemon}/>)
        }
      </ListObjects>
      
    </Container>
  )
}
