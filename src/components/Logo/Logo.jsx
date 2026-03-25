import React from 'react'
import title from "../../images/logos/WW1 Logo Clear.png";
import pieces from "../../images/logos/Each Piece 1.png";
// import title from "../../images/Ww3.PNG";
import styles from './Logo.module.css'

function Logo() {
  return (
    <div className={styles.LOGO}>
      <img src={title} alt="" className={styles.title}/>
      <img src={pieces} alt="" className={styles.pieces}/>
    </div>
  )
}

export default Logo
