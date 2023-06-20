import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


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



const PokemonCard = ({pokemonUrl}) => {
  
    const [ pokemon, setPokemon] = useState(null)

    const formatTypePokemon = (types = []) =>{
        const nameTypes = types.map((type) => type.type.name)
        const titleTypes = nameTypes.join(" / ")
        return titleTypes
    }
    
    

    useEffect(() => {

        axios.get(pokemonUrl)
            .then(({data}) => setPokemon(data))
            .catch((err) => console.error(err))

    },[])


  return (

    <Link to={`/pokedex/${pokemon?.name}`} className={`text-center border-4 ${borderPokemon[pokemon?.types[0].type.name]} rounded-md`} >
        {/* seccion superioc */}
        <section className={`relative h-24 ${pokemonLinearGradients[pokemon?.types[0].type.name]}`}>
            <div className="absolute px-12 -bottom-8 w-[210px] left-1/2 -translate-x-1/2" >
                <img src={pokemon?.sprites.other["official-artwork"].front_default} alt={pokemon?.name} />
            </div>
        </section>

        {/* seccion inferior */}
        <section >
            <h3 className='mt-10 font-bold' >{pokemon?.name}</h3>
            <h5>{formatTypePokemon(pokemon?.types)}</h5>
            <span>Type</span>

            <hr />

            <section className="grid grid-cols-2 gap-2 p-2 ">
                {
                    pokemon?.stats.slice(0, 4).map(stat =>(
                        <div className="" key={stat.stat.url} >
                            <h6>{stat.stat.name}</h6>
                            <span>{stat.base_stat}</span>
                        </div>
                    ))
                }
            </section>
        </section>
    </Link>
  )
}

export default PokemonCard