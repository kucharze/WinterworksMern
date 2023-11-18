import React from 'react'
import title from "../../images/WinterWorks.JPG";
import styles from './Logo.module.css'

function Logo() {
  return (
    <div className={styles.LOGO}>
      <img src={title} alt="" className={styles.title}/>
    </div>
  )
}

export default Logo
