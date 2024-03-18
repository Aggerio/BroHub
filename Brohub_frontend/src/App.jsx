import React from 'react'
import Navbar from './components/Main/Navbar'
import Landing from './components/Main/Landing'

const App = () => {
  return (
    <div className='w-full h-full bg-zinc-900 text-white'>
      <Navbar/>
      <Landing/>
    </div>
  )
}

export default App