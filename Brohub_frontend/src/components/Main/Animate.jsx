import React from 'react'
import Marquee from "react-fast-marquee";

export const Animate = () => {
  return (
    <div className='w-full py-20 rounded-2xl bg-[#004D43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hdden gap-10">
            <Marquee delay={2} fast={30}>
                <h1  className='text-[17vw] leading-none font-mono font-semibold uppercase -mb-10 pt-10 items-center '>BROHUB</h1>
                <h1  className='text-[17vw] leading-none font-mono font-semibold uppercase -mb-10 pt-10 items-center '>BROHUB</h1>
                </Marquee>
            
        </div>
    </div>
  )
}
