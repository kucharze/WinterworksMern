import React from 'react'
import styles from './Home.module.css'
import pieces from "../../images/logos/Each Piece 1.png";

import brentwood from '../../images/01 10 12_Brentwood Symbols/01 10 12 016.jpg'
import brentwood2 from '../../images/01 10 12_Brentwood Symbols/01 10 12 051.jpg'
import baby from '../../images/03 19 12_Baby Bib Quotes/03 19 12 001.jpg'
import baby2 from '../../images/03 19 12_Baby Bib Quotes/03 19 12 003.jpg'
import child from '../../images/02 13 14_Quinnie Blanket/02 13 14 002.jpg'
import car from '../../images/10 12 12_Carhops/10 12 12 001.jpg'
import car2 from '../../images/10 12 12_Carhops/10 12 12 004.jpg'
import car3 from '../../images/10 12 12_Carhops/10 12 12 003.jpg'
import cash from '../../images/04 26 12_ATM Cash World/04 16 12 001.jpg'
import cash2 from '../../images/04 26 12_ATM Cash World/04 16 12 003.jpg'
import cash3 from '../../images/04 26 12_ATM Cash World/04 16 12 002.jpg'
import bags from '../../images/08_20_14_Coach Bag_Kelly Kennedy/08_20_14_002.jpg'
import bags2 from '../../images/08_20_14_Coach Bag_Kelly Kennedy/08_20_14_001.jpg'

//Wood items
import wood1 from '../../images/Wood items/Cutting Board 2.jpg'
import wood2 from '../../images/Wood items/Cutting Board 3.jpg'
import wood3 from '../../images/Wood items/Cutting Mug 1 mom.jpg'
import wood4 from '../../images/Wood items/ww 5 o clock.jpg'
import wood5 from '../../images/Wood items/WW Beer openers.jpg'

import wood6 from '../../images/Wood items/WW Clock 1.jfif'
import wood7 from '../../images/Wood items/WW Clock rose.jpg'
import wood8 from '../../images/Wood items/ww Cutting Board - Pens.jpg'
import wood9 from '../../images/Wood items/WW tops off.jpg'
function Home() {
  return (
    <div className={styles.Home}>
        <h2 className={styles.title}>Welcome to Winterworks</h2>
        <h2 className={styles.sectionTitle}>Check out our designs</h2>
        <h1>Engraved items</h1>
        <div className={styles.piecesContainer}>
            <img src={pieces} 
            alt="Each Piece" className={styles.pieces} />
        </div>
        <img className={styles.imgcontainer} src={wood1} alt="Mom's Cutting Board" />
        <img className={styles.imgcontainer} src={wood2} alt="Cutting Board 2" />
        <img className={styles.imgcontainer} src={wood3} alt="Cutting Mug 1 mom" />
        <img className={styles.imgcontainer} src={wood4} alt="WW 5 O'Clock" />
        <img className={styles.imgcontainer} src={wood5} alt="WW Beer Openers" />
        <img className={styles.imgcontainer} src={wood6} alt="WW Clock 1" />
        <img className={styles.imgcontainer} src={wood7} alt="WW Clock rose" />
        <img className={styles.imgcontainer} src={wood8} alt="WW Cutting Board - Pens" />
        <img className={styles.imgcontainer} src={wood9} alt="WW tops off" />

        <h1 className={styles.sectionTitle}>Showing our school spirit</h1>
        <img className={styles.imgcontainer} src={brentwood} alt="" />
        <img className={styles.imgcontainer} src={brentwood2} alt="" />
        
        <h1 className={styles.sectionTitle}>Children's items</h1>
        <img className={styles.imgcontainer} src={baby} alt="" />
        <img className={styles.imgcontainer} src={baby2} alt="" />
        <img className={styles.imgcontainer} src={child} alt="" />
        <br/>
        <h1 className={styles.sectionTitle}>Wearables</h1>
        <img className={styles.imgcontainer} src={car} alt="" />
        <img className={styles.imgcontainer} src={car2} alt="" />
        <img className={styles.imgcontainer} src={car3} alt="" />
        <h1 className={styles.sectionTitle}>Logos</h1>
        <img className={styles.imgcontainer} src={cash} alt="" />
        <img className={styles.imgcontainer} src={cash2} alt="" />
        <img className={styles.imgcontainer} src={cash3} alt="" />
        <h1 className={styles.sectionTitle}>Handhelds</h1>
        <img className={styles.imgcontainer} src={bags} alt="" />
        <img className={styles.imgcontainer} src={bags2} alt="" />
        
    </div>
  )
} 

export default Home
