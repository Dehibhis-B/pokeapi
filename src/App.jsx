
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonId from './pages/PokemonId'
import ProtectedRoute from './components/auth/ProtectedRoute'

function App() {
  
  return (
    <section className='font-["Inter"]'>
     <Routes>

        <Route path="/" element={ <Home/>} />

        <Route element={ <ProtectedRoute/>}>
          <Route path="/pokedex" element={ <Pokedex/>} />
          <Route path="/pokedex/:pokemonName" element={ <PokemonId/>} />
        </Route>

     </Routes>
    </section>
  )
}

export default App
