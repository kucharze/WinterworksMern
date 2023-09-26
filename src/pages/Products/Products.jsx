import React from 'react'
import styles from './Products.module.css'

function Products() {
  return (
    <div className={styles.list}>
      <h1>See our Products</h1>
      <div >
        <h3>We sell a number of different products including:</h3>
        <ul>
          <li>Blankets</li>
          <li>Clothing</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Products
