import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import Section from './components/Section'
import Gallery from './components/Image'
import Footer from './components/Footer'

function page() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Products />
      <Section />
      <Gallery />
      <Footer />

    </div>
  )
}

export default page