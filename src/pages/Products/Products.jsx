import React from 'react'
import styles from './Products.module.css'

function Products() {
  return (
    <div className={styles.list}>
      <h1>See our Products</h1>
      <div >
        <h3>We embroidered a number of different products including:</h3>
        <ul>
          <li>Blankets Stock: 1</li>
          <li>Clothing Stock: 1</li>
          <li>Hats Stock: 1</li>
          <li>Handhelds Stock: 1</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Products
