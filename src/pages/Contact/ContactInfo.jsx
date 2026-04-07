import React from 'react'
import styles from './Contact.module.css'

function ContactInfo() {
  return (
<section
      id="contact"
      className={styles.Contact}
    >
      <h2 className="text-3xl font-bold mb-4">
        Ready for a Custom Piece?
      </h2>
      <p className="mb-6 text-gray-300">
        Contact us today to bring your vision to life.
      </p>
      <a
        href="mailto:winterworks1@gmail.com"
        className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        Get in Touch
      </a>
    </section>
  )
}

export default ContactInfo
