import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Itinerary from './components/Itinerary'
import TheWilds from './components/TheWilds'
import CTA from './components/CTA'
import FloatingVerse from './components/FloatingVerse'
import FloatingImages from './components/FloatingImages'

function App() {
  return (
    <div className="relative min-h-screen">
      <FloatingImages />
      <Navbar />
      <Hero />
      <Itinerary />
      <TheWilds />
      <CTA />
      <FloatingVerse />
    </div>
  )
}

export default App
