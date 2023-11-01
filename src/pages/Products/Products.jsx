import React from 'react'
import styles from './Products.module.css'

function Products() {
  return (
    <div className={styles.list}>
      <h1 className={styles.header}>See our Products</h1>
      <div >
        <h3>We embroidered a number of different products including:</h3>
        <ul>
          <li>Blankets Stock: 1</li>
          <li>Clothing Stock: 1</li>
          <li>Hats Stock: 1</li>
          <li>Handhelds Stock: 1</li>
        </ul>
      </div>
      <h3>Don't see an item here that you want?  Contact us to inquire about a special order.</h3>
      
    </div>
  )
}

export default Products
