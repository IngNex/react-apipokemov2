import React, { useEffect, useState } from 'react'
import {Container, Title} from '../styles/ContainerStyle'
import {Logo} from '../styles/Logo'
import logo from '../assets/logo.png'
import Card from './Card'
import { ListObjects} from '../styles/ListaStyle'
import InputSearch from './InputSearch'

export default function PokeApi() {
  const [pokemones, setPokemones] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

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

  console.log(search)

  const pokemonesSearch = pokemones.filter((pokemon)=>pokemon.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <Container>
      <Logo>
        <img src={logo} alt='pokemon'/>
      </Logo>
      <Title>Consumo de ApiPokemon v2</Title>
      <InputSearch search={search} setSearch={setSearch}/>
      <ListObjects>
        {loading ? (<p>Consumiendo Api-Pokemon ... Cargando...</p>)
        :(
          pokemonesSearch.length > 0 ? pokemonesSearch.map((pokemon) => <Card key={pokemon.id} pokemon={pokemon}/>)
          :
          <p>Pokemon no encontrado con <strong>"{search}"</strong></p>
        )
        }
      </ListObjects>
      
    </Container>
  )
}
