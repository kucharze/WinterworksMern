import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.Navbar}>
        <Link>Home</Link>
        <Link>About us</Link>
        <Link>Designs</Link>
        <Link>Products</Link>
        <Link>Contact Info</Link>
    </div>
  )
}

export default Navbar
