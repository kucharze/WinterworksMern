import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.Navbar}>
      <Link>Designs</Link>
      <Link>Products</Link>
      <h2>page3</h2>
    </div>
  )
}

export default Navbar
