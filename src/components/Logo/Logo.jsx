import React from 'react'
import title from "../../images/logos/WWL wood1.png";
// import title from "../../images/Ww3.PNG";
import styles from './Logo.module.css'

function Logo() {
  return (
    <div className={styles.LOGO}>
      <img src={title} alt="" className={styles.title}/>
    </div>
  )
}

export default Logo
