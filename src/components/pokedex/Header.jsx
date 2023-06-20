import React from 'react'
import { setNameTrainer } from '../../store/slices/nameTrainer.slice'
import { useDispatch } from 'react-redux'

const Header = () => {

  const dispatch = useDispatch()

  const handleClickLogaut = () => {
    dispatch(setNameTrainer(""))
  }

  return (
    <section className="relative max-w-[1000px] mx-auto">
        {/* seccion roja */}
        <div className="bg-red-500 h-14 relative">
            <div className="absolute left-0 bottom-0 w-[220px] xxs:w-[290px] sm:w-[400px]">
                <img src="/images/logo.png" alt="" />
            </div>
        </div>
        {/* seccion negr */}
        <div className="bg-black h-10"></div>
        <div className="w-20 aspect-square bg-white border-[10px] border-black rounded-full absolute bottom-0 right-0 -translate-x-1/2 after:content-[''] after:h-12 
        after:aspect-square after:bg-gray-800 after:rounded-full after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:border-[9px]
        after:border-black">
          <button onClick={handleClickLogaut} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-20" >x</button>
        </div>
        
    </section>
  )
}

export default Header
