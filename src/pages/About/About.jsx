import React from 'react'
import styles from './About.module.css'

function About() {
  return (
    <div className={styles.About}>
      <h1>All created from a mom who likes to sow.</h1>
      <p>Have any questions, check out out Contact info and shoot us a call or email.</p>

      
      <div className={styles.list}>
        <ol>
          <li>Our products are purchased from various venders.  Availability of specific items can depend on what they have in stock.</li>
          <li>Go to our Orders page for questions.</li>
          <li>Submit your order.  Including a description of the design you want, 
            as well as a valid email and phone number.
          </li>
        </ol>
      </div>
      
    </div>
  )
}

export default About
