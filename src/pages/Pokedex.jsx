import React, { useEffect, useState } from 'react'
import Header from '../components/pokedex/Header'
import { useSelector } from 'react-redux'
import axios from 'axios'
import PokemonList from '../components/pokedex/PokemonList'


//https://pokeapi.co/api/v2/pokemon?limit=40

const Pokedex = () => {

  const [pokemons, setPokemons] = useState([])

  const [namePokemon, setNamePokemon] = useState("")

  const [types, setTypes] = useState([])

  const [currentType, setCurrentType] = useState("")

  const nameTrainer = useSelector(store => store.nameTrainer)

  const [currentPage, setCurrentPage] = useState(1)

  const pokemonByName = pokemons.filter((pokemon) => pokemon.name.includes(namePokemon.toLowerCase().trim()))

  const handleChangeType = (e) =>{
    setCurrentType(e.target.value)
  }

  const handleSutmit = (e) => {
    e.preventDefault()
    setNamePokemon(e.target.namePokemon.value)

  }

  const paginationLogic = () => {
    // cantida de paginacion
    const POKEMON_PER_PAGE = 12

    //pokemon a mostrar en la pagina actual
    const sliceStart = (currentPage - 1) * POKEMON_PER_PAGE
    const sliceEnd = sliceStart + POKEMON_PER_PAGE 

    const pokemonInPage = pokemonByName.slice(sliceStart, sliceEnd)

    //Ultima pagina de
    const lastPage = Math.ceil(pokemonByName.length / POKEMON_PER_PAGE) || 1

    const PAGES_PER_BLOK = 5
    const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOK)

    const pagesInBlock = []
    const minPage = (actualBlock - 1 ) * PAGES_PER_BLOK + 1 
    const maxPage = actualBlock * PAGES_PER_BLOK
    for(let i = minPage; i <= maxPage; i++){
      if(i <= lastPage){
        pagesInBlock.push(i)
      } 
    }
    return {pokemonInPage, lastPage, pagesInBlock}
  }

  const {lastPage, pagesInBlock, pokemonInPage} = paginationLogic()


  useEffect(() =>{
    if(!currentType){
      const URL = 'https://pokeapi.co/api/v2/pokemon?limit=40'

      axios.get(URL)
      .then(({data}) => setPokemons(data.results))
      .catch((err) => console.error(err))
    }
    
  }, [currentType])

  useEffect(() =>{
    const URL = 'https://pokeapi.co/api/v2/type'

    axios.get(URL)
      .then(({data}) => setTypes(data.results))
      .catch((err) => console.error(err))

  },[])

  useEffect(() =>{

    if(currentType){
      const url = `https://pokeapi.co/api/v2/type/${currentType}/`

      axios.get(url)
        .then(({data}) => {
          (data.pokemon)
          const pokemonsByType = data.pokemon.map(pokemon => pokemon.pokemon)
          setPokemons(pokemonsByType)
        })
        .catch((err) => console.error(err))
    }
   

  },[currentType])

  return (
    <main className="max-w-[1000px] mx-auto" >
      <Header/>
      <p className="mt-4">Welcome <span className="capitalize font-bold">{nameTrainer}</span>, here you can find your favorite Pokemon</p>
      <form onSubmit={handleSutmit} className="flex  grid-cols-[repeat(auto-fill,_280px)] justify-center 
                max-w-[1024px] mx-auto py-6" action="">
        <div>
          <input id="namePokemon" className="bg-gray-200 text-white w-[400px] h-10 p-4" placeholder="type a name Pokemon..." type="text" />
          <button className="bg-red-500 w-[100px] h-10 text-white" >Search</button>
        </div>

        <select onChange={handleChangeType} name="" id="" className="bg-orange-100" >
          <option value="">All</option>
          {types.map((type) => (
            <option value={type.name} key={type.url} >
              {type.name}
            </option>))}
        </select>
      </form>
      
      <PokemonList pokemons={pokemonByName} />
      
    </main>
  )
}

export default Pokedex