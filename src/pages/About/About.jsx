import React from 'react'
import styles from './About.module.css'

function About() {
  return (
    <div className={styles.About}>
      <h1>About page</h1>
      
      <div className={styles.list}>
        <h1>Order rules</h1>
        <ul>
          <li>Please allow at least one week for order completion. These orders take time to complete</li>
          <li>Please use a valid email or phone number when submitting an order.  
            If we cannot contact you, we will not put your name in the order queue.
          </li>

        </ul>
      </div>
      
    </div>
  )
}

export default About
