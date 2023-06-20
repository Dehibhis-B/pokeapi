import React from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = ({pokemons}) => {
  return (
    <section className="grid gap-4 grid-cols-[repeat(auto-fill,_235px)] justify-center 
    max-w-[1024px] mx-auto py-6 capitalize">
        {
            pokemons.map(pokemon => <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} /> )
        }
    </section>
  )
}

export default PokemonList