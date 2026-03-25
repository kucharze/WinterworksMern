import React from 'react'
import title from "../../images/logos/WW1 Logo Clear.png";
import pieces from "../../images/logos/Each Piece 1.png";
// import title from "../../images/Ww3.PNG";
import styles from './Logo.module.css'

function Logo() {
  return (
    <div className={styles.LOGO}>
      <div className={styles.titleContainer}>
        <img src={title} alt="Winterworks Logo" className={styles.title}/>
      </div>
      <div className={styles.piecesContainer}>
        <img src={pieces} alt="Each Piece" className={styles.pieces}/>
      </div>
      
    </div>
  )
}

export default Logo
