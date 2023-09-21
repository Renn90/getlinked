import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Introduction from '../components/Introduction'
import Rules from '../components/Rules'
import Criteria from '../components/Criteria'
import QandA from '../components/QandA'
import Timeline from '../components/Timeline'

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Introduction />
      <Rules />
      <Criteria />
      <QandA />
      <Timeline />
    </>
  )
}

export default HomePage
