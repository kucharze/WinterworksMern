import React from 'react'
import styles from './Home.module.css'
import baby from '../../images/03 19 12_Baby Bib Quotes/03 19 12 001.jpg'
import car from '../../images/10 12 12_Carhops/10 12 12 001.jpg'

function Home() {
  return (
    <div>
        <h1>The home page</h1>
        <h2>Welcome to Winterworks</h2>
        <h3>Check out our designs</h3>
        <img src={baby} alt="" />
        <img src={car} alt="" />
    </div>
  )
} 

export default Home
