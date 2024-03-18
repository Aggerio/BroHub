import React from 'react'
import Navbar from './components/Main/Navbar'
import Landing from './components/Main/Landing'
import { Animate } from './components/Main/Animate'
import Merge from './components/Files/Merge'
import ArticleCard from './components/Files/ArticleCard'
import Message from './components/Main/Message'
import ChatComponent from './components/Main/ChatComponent'
import Onboarding from './components/Files/Onboarding'
import Feed from './components/Files/Feed'

const App = () => {
  return (
    <div className='w-full h-full bg-zinc-900 text-white overflow-hidden'>
      <Navbar/>
      <Landing/>
      <Animate />
    </div>
  )
}

export default App
