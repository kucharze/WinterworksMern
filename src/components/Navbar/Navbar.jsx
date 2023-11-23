import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.Navbar}>
        <Link className={styles.home} to={'/'}></Link>
        <Link className={styles.about} to={'/about'}></Link>
        {/* <Link to={'/designs'}>Designs</Link> */}
        {/* <Link to={'/products'}>Products</Link> */}
        <Link className={styles.order} to={'/placeOrder'}></Link>
        <Link className={styles.contact} to={'/contactinfo'}></Link>
    </div>
  )
}

export default Navbar
