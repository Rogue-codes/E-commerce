import React from 'react'
import Categories from './Categories'
import Filter from './Filter'
import Footer from './Footer'
// import styled from 'styled-components'
import Nav from './Nav'
import Newsletter from './Newsletter'
import Products from './Products'
import Selling from './Selling'
import Slider from './Slider'

// const components = styled.div``

function Home() {
  return (
    <div>
        <Nav/>
        <Slider/>
        <Categories/>
        <Products/>
        <Filter/>
        <Selling/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home