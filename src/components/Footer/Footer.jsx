import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer className={styles.bottom}>
        <h3 className="text-xl font-semibold mb-2">Winter Works</h3>
        <p className="text-gray-400 mb-4">Custom Wood & Metal Creations</p>

        <div className={styles.buttonrow}>
          <Link className={styles.navbtn} to="/">Gallery</Link>
          <Link className={styles.navbtn} to={'/about'}>About Us</Link>
          <Link className={styles.navbtn} to="/contactinfo">Contacts</Link>
          <Link className={styles.navbtn} to="/placeOrder">Custom Orders</Link>
        </div>

        <p className="text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Winter Works. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Footer
