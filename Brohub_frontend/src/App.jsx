import React from 'react'
import Navbar from './components/Main/Navbar'
import Landing from './components/Main/Landing'
import { Animate } from './components/Main/Animate'

const App = () => {
  return (
    <div className='w-full h-full bg-zinc-900 text-white overflow-y-hidden'>
      <Navbar/>
      <Landing/>
      <Animate/>
    </div>
  )
}

export default App