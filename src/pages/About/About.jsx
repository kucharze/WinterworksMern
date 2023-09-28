import React from 'react'
import styles from './About.module.css'

function About() {
  return (
    <div className={styles.About}>
      <h1>About page</h1>
      <p>Have any questions, check out out Contact info and shoot us a call or email.</p>

      <div className={styles.list}>
        <h2>How does ordering work?</h2>
        <ol>
          <li>Browse our products to see what is in stock</li>
          <li>Go to our Orders page</li>
          <li>Submit your order.  Including a description of the design you want, 
            as well as a valid email and phone number.
          </li>
        </ol>
      </div>
      
    </div>
  )
}

export default About
