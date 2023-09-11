import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.Navbar}>
        <Link to={'/'}>Home</Link>
        <Link>About us</Link>
        <Link>Designs</Link>
        <Link to={'/products'}>Products</Link>
        <Link to={'/contactinfo'}>Contact Info</Link>
    </div>
  )
}

export default Navbar
