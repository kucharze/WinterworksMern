import React from 'react'
import styles from './About.module.css'

function About() {
  return (
<section id="about" className={styles.About}>
      <h2 className="text-3xl font-bold mb-6">About Winter Works</h2>
      <p className="text-lg text-gray-700">
        At Winter Works, we specialize in handcrafted wood and metal designs.
        Every piece is built with precision, creativity, and durability in mind.
        From custom signs to unique furniture, our work blends rustic materials
        with modern craftsmanship.
      </p>
    </section>
  )
}

export default About
