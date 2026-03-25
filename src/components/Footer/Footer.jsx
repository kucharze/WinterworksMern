import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <div>
      <footer className={styles.bottom}>
        <h3 className="text-xl font-semibold mb-2">Winter Works</h3>
        <p className="text-gray-400 mb-4">Custom Wood & Metal Creations</p>

        <div className="styles.buttonrow">
          <a href="#">Gallery</a>
          <a href="#">Contact</a>
          <a href="#">Custom Orders</a>
        </div>

        <p className="text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Winter Works. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Footer
