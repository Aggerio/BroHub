// import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
const Landing = () => {
    return (
        <div className='w-full h-screen bg-zinc-900 pt-1'>
            <div className="str mt-40 px-20">
                {["Dive Into", "The World OF", "Your Community"].map((item, index) => {
                    return <div className="masker" key = {index}>
                        <div className='w-fit flex items-end '>
                            {index ===1 && 
                            (<div className='mr-5 w-[8vw] rounded-md h-[5vw] -top-[1.2vw] relative bg-red-500'></div>)}
                        <h1 className='uppercase text-9xl leading-[8vw] tracking-normal font-mono'>{item}</h1>
                        </div>
                    </div>

                }

                )}
            </div>
            <div className='border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20'>
                {["Connect With Your Pals", "Form Your Group"].map((item,index)=>
                <p className='text-md font-light tracking-tight leading-none' key={index}>
                    {item}
                </p>)}
                <div className="start flex items-center gap-5">
                    <button className='px-4 py-2 border-[2px] border-zinc-700 rounded-full cursor-pointer'>Connect
                    </button>
                    <div className='w-10 h-10 justify-center flex items-center border-[1px] border-zinc-700 rounded-full'>
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Landing;