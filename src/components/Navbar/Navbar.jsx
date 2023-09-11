import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
      <Link>Designs</Link>
      <Link>Products</Link>
      <h2>page3</h2>
    </div>
  )
}

export default Navbar
