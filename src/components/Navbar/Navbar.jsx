import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.Navbar}>
        <Link className={styles.navbtn} to={'/'}>Home</Link>
        <Link className={styles.navbtn} to={'/about'}>Info</Link>
        {/* <Link to={'/designs'}>Designs</Link> */}
        {/* <Link to={'/products'}>Products</Link> */}
        <Link className={styles.navbtn} to={'/placeOrder'}>Product Orders</Link>
        <Link className={styles.navbtn} to={'/contactinfo'}>Contacts</Link>
    </div>
  )
}

export default Navbar
