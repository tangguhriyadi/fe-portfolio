import React from 'react'
import AppAbout from '../home/AppAbout'
import AppHero from '../home/AppHero'

const AppHome:React.FC = () => {
  return (
    <div className="main">
        <AppHero />
        <AppAbout />
    </div>
  )
}

export default AppHome