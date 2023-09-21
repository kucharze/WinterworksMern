import React from 'react'
import styles from './Home.module.css'
import brentwood from '../../images/01 10 12_Brentwood Symbols/01 10 12 016.jpg'
import brentwood2 from '../../images/01 10 12_Brentwood Symbols/01 10 12 051.jpg'
import baby from '../../images/03 19 12_Baby Bib Quotes/03 19 12 001.jpg'
import baby2 from '../../images/03 19 12_Baby Bib Quotes/03 19 12 002.jpg'
import child from '../../images/02 13 14_Quinnie Blanket/02 13 14 002.jpg'
import car from '../../images/10 12 12_Carhops/10 12 12 001.jpg'
import car2 from '../../images/10 12 12_Carhops/10 12 12 004.jpg'
import car3 from '../../images/10 12 12_Carhops/10 12 12 005.jpg'
import cash from '../../images/04 26 12_ATM Cash World/04 16 12 001.jpg'
import cash2 from '../../images/04 26 12_ATM Cash World/04 16 12 003.jpg'
import cash3 from '../../images/04 26 12_ATM Cash World/04 16 12 002.jpg'

function Home() {
  return (
    <div className={styles.Home}>
        <h2>Welcome to Winterworks</h2>
        <h3>Check out our designs</h3>
        <h1>Brentwood</h1>
        <img src={brentwood} alt="" />
        <img src={brentwood2} alt="" />
        <h1>Children's items</h1>
        <img src={baby} alt="" />
        <img src={baby2} alt="" />
        <img src={child} alt="" />
        <br/>
        <h1>Wearables</h1>
        <img src={car} alt="" />
        <img src={car2} alt="" />
        <img src={car3} alt="" />
        <h1>Logos</h1>
        <img src={cash} alt="" />
        <img src={cash2} alt="" />
        <img src={cash3} alt="" />
    </div>
  )
} 

export default Home
