import React from 'react'
import FooterHome from '../components/home/FooterHome'
import { useDispatch } from 'react-redux'
import { setNameTrainer } from '../store/slices/nameTrainer.slice'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handlerSutmit = (e) => {
    e.preventDefault()
    const nameTrainer = e.target.nameTrainer.value
    dispatch(setNameTrainer(nameTrainer))
    navigate("/pokedex")
    

  }

  return (
    <main className="grid grid-rows-[1fr_auto] min-h-screen  ">
        <section className="justify-center max-w-[1024px] mx-auto py-24">
            <div className="w-[500px]">
                <img src="/images/logo.png" alt="" />
            </div>
            <h3 className=" flex justify-center p-4 font-bold text-red-600 text-4xl" >¡Hello Trainer!</h3>
            <p className="flex justify-center" >For start , give me your name:</p>

            <form onSubmit={handlerSutmit} className="flex  grid-cols-[repeat(auto-fill,_280px)] justify-center 
                max-w-[1024px] mx-auto py-6">
                <input id="nameTrainer" type="text" className="text-black w-[400px] h-10 bg-gray-300 p-4" placeholder="Ingresa tu nombre" />
                <button className="bg-red-500 w-[100px] h-10 text-white"  >Start!</button>
            </form>
        </section>
        <FooterHome/>
    </main>
  )
}

export default Home