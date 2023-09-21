import React from 'react'
import styles from './Home.module.css'
import baby from '../../images/03 19 12_Baby Bib Quotes/03 19 12 001.jpg'
import car from '../../images/10 12 12_Carhops/10 12 12 001.jpg'
import car2 from '../../images/10 12 12_Carhops/10 12 12 004.jpg'
import car3 from '../../images/10 12 12_Carhops/10 12 12 005.jpg'
import cash from '../../images/04 26 12_ATM Cash World/04 16 12 001.jpg'
import cash2 from '../../images/04 26 12_ATM Cash World/04 16 12 003.jpg'
import cash3 from '../../images/04 26 12_ATM Cash World/04 16 12 002.jpg'

function Home() {
  return (
    <div>
        <h1>The home page</h1>
        <h2>Welcome to Winterworks</h2>
        <h3>Check out our designs</h3>
        <h1>Baby</h1>
        <img src={baby} alt="" />
        <br/>
        <h1>Carhops</h1>
        <img src={car} alt="" />
        <img src={car2} alt="" />
        <img src={car3} alt="" />
        <h1>ATM Cash World</h1>
        <img src={cash} alt="" />
        <img src={cash2} alt="" />
        <img src={cash3} alt="" />
    </div>
  )
} 

export default Home
