import React from 'react'

const FooterHome = () => {
  return (
    <section className="relative">
        {/* seccion roja */}
        <div className="bg-red-500 h-20"></div>
        {/* seccion negr */}
        <div className="bg-black h-14"></div>
        <div className="w-16 aspect-square text-white border-[10px] border-black rounded-full absolute bottom-0 left-[50%] -translate-x-1/2 after:content-[''] after:h-12 
        after:aspect-square after:bg-gray-800 after:rounded-full after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:border-[9px]
        after:border-black"></div>
    </section>
  )
}

export default FooterHome