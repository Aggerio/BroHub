import React from 'react'

const Navbar = () => {
  return (
    <div className=' fixed z-[999] w-full px-20 py-8 flex justify-between items-center'>
        <div className="logo">
            BROHUB
        </div>
        <div className="links flex gap-10">
            {["Menu","Feed", "Chat", "Events","Profile"].map((item,index) => (
            <a key={index} className={`text-lg capitalize font-semibold ${index ===4 &&"ml-32"})`}>{item}</a>
            ))}
        </div>
    </div>
  )
}

export default Navbar