import React from 'react'
import AppAbout from '../home/AppAbout'
import AppContact from '../home/AppContact'
import AppFaq from '../home/AppFaq'
import AppFeature from '../home/AppFeature'
import AppHero from '../home/AppHero'
import AppPricing from '../home/AppPricing'
import AppWorks from '../home/AppWorks'

const AppHome:React.FC = () => {
  return (
    <div className="main">
        <AppHero />
        <AppAbout />
        <AppFeature />
        <AppWorks />
        <AppFaq />
        <AppPricing />
        <AppContact />
    </div>
  )
}

export default AppHome