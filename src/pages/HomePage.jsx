import React from 'react'
import Hero from '../components/Hero'
import Introduction from '../components/Introduction'
import Rules from '../components/Rules'
import Criteria from '../components/Criteria'
import QandA from '../components/QandA'
import Timeline from '../components/Timeline'
import PriceSec from '../components/PriceSec'
import Partners from '../components/Partners'
import PrivacyPolicy from '../components/PrivacyPolicy'
import Footer from '../components/Footer'
import TwinkleStar from '../components/UI/TwinkleStar'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <Rules />
      <Criteria />
      <QandA />
      <Timeline />
      <PriceSec />
      <Partners />
     <PrivacyPolicy />
     <Footer />
    </>
  )
}

export default HomePage
