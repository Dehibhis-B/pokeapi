import React, { useEffect, useState } from 'react'
import Header from '../components/pokedex/Header'
import { useParams } from 'react-router-dom'
import axios from 'axios'
//https://pokeapi.co/api/v2/pokemon/{id or name}/

const pokemonLinearGradients = {
  grass: "bg-gradient-to-t from-black to-green-500",
  fire: "bg-gradient-to-t from-black to-red-500",
  ice: "bg-gradient-to-t from-black to-gray-500",
  dark: "bg-gradient-to-t from-black to-blue-500",
  fairy: "bg-gradient-to-t from-black to-orange-500",
  shadow: "bg-gradient-to-t from-black to-purple-500",
  water: "bg-gradient-to-t from-black to-blue-300",
  bug: "bg-gradient-to-t from-black to-green-200",
  normal:"bg-gradient-to-t from-black to-brown-200",
  fighting:"bg-gradient-to-t from-black to-golden-200",
  ground:"bg-gradient-to-t from-black to-green-200",
  rock:"bg-gradient-to-t from-black to-green-200",
  ghost:"bg-gradient-to-t from-black to-purple-200",
  steel:"bg-gradient-to-t from-black to-green-200",
  electric:"bg-gradient-to-t from-black to-yellow-500",
  psychic:"bg-gradient-to-t from-black to-green-200",
  ice:"bg-gradient-to-t from-black to-green-200",
  dragon:"bg-gradient-to-t from-black to-green-200",
  dark:"bg-gradient-to-t from-black to-green-200",
  fairy:"bg-gradient-to-t from-black to-green-200",
  unknown:"bg-gradient-to-t from-black to-green-200",
  poison:"bg-gradient-to-t from-black to-pink-200",
}

const borderPokemon = {
  grass: "border-green-500",
  fire: "border-red-500",
  ice: "border-gray-500",
  dark: "border-blue-500",
  fairy: "border-orange-500",
  shadow: "border-purple-500",
  water: "border-blue-300",
  bug: "border-green-200",
  normal:"border-brown-500",
  fighting:"border-golden-500",
  ground:"border-green-500",
  rock:"border-green-500",
  ghost:"border-purple-400",
  steel:"border-green-500",
  electric:"border-yellow-500",
  psychic:"border-green-500",
  ice:"border-green-500",
  dragon:"border-green-500",
  dark:"border-green-500",
  fairy:"border-green-500",
  unknown:"border-green-500",
  poison:"border-pink-500",

}

const PokemonId = () => {

  const [pokemon, setPokemon] = useState(null)
  
  const {pokemonName} = useParams()

  const percentProgresStat = (baseStat) => {
    const STAT_MAX = 255
    return `${(baseStat * 100)/ 255}%`
  }

  useEffect(()=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`

    axios.get(url)
      .then(({data}) => setPokemon(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <main>
      <Header/>
      <section className="p-2 py-16">
        {/* informacion de cada pokemon */}
        <article className="max-w-[900px] mx-auto shadow-xl p-2" >
          <section className={`text-center border-4 ${borderPokemon[pokemon?.types[0].type.name]} rounded-md relative h-[140px] ${pokemonLinearGradients[pokemon?.types[0].type.name]} `} >
            <div className="w-[200px] mx-auto absolute left-1/2 -translate-x-1/2 -top-12" >
              <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
            </div>
          </section>

          {/* info de cada pokemon */}
          <div className="flex justify-center gap-6 text-center font-bold mt-8">
            <h3>#{pokemon?.id}</h3>
          </div>
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 p-2">
            <hr />
            <h2 className="capitalize font-bold" >{pokemon?.name}</h2>
            <hr />
          </div>
          <div className="flex justify-center gap-6 text-center">
            <div>
              <h5>Weight</h5>
              <span className="font-bold">{pokemon?.weight}</span>
            </div>
            <div>
              <h5>Height</h5>
              <span className="font-bold" >{pokemon?.height}</span>
            </div>
          </div>

          <section className="grid sm:grid-cols-2 gap-4" >
            {/* monstrando type pokemon */}
            <section className="text-center" >
              <h3>Types</h3>
              <section className="grid grid-cols-2 gap-4 capitalize mt-4 "  >
                { pokemon?.types.map(type => <article 
                className="p-2 px-8 border-[1px] border-gray-300" key={type.type.name} >{type.type.name}
                </article>) }
              </section>

            </section>

            {/* monstrando habilidades */}
            <section className="text-center" >
              <h3>Abilities</h3>
              <section className="grid grid-cols-2 gap-4 capitalize mt-4 "  >
                { pokemon?.abilities.map(ability => <article 
                className="p-2 px-8 border-[1px] border-gray-300" key={ability.ability.name} >{ability.ability.name}
                </article>) }
              </section>


            </section>


          </section>
          


          {/* stats */}
          <section className="" >
            <h4>Stats</h4>
            <section>
              {
                pokemon?.stats.map((stat) => (
                  <article key={stat.stat.url}>
                    <section>
                      <h5>{stat.stat.name}</h5>
                      <span>{stat.base_stat}</span>
                    </section>

                    {/* Barra de Progreso */}
                    <div className='bg-gray-400 h-8 rounded-md overflow-hidden'>
                      <div style={{width:percentProgresStat(stat.base_stat)}} className={`h-full bg-yellow-500`}>

                      </div>
                    </div>

                  </article>
                ))
              }
            </section>
          </section>

        </article>
      </section>
    </main>
  )
}

export default PokemonId