import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.Navbar}>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About us</Link>
        <Link to={'/designs'}>Designs</Link>
        <Link to={'/products'}>Products</Link>
         <Link to={'/placeOrder'}>Place an Order</Link>
        <Link to={'/contactinfo'}>Contact Info</Link>
    </div>
  )
}

export default Navbar
