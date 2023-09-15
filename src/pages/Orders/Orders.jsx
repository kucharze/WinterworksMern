import React,{useState} from 'react'
import axios from 'axios'

function Orders() {
  const [name,setName] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [email,setEmail] = useState('')
  const [item,setItem] = useState('')
  const [design,setDesign] = useState('')

    const handelSubmit = (e) =>{
        e.preventDefault();
    }
  return (
    <div>
      <h1>Page for placing orders</h1>
      <form>
        <input placeholder='Name'/> <br/>
        <input placeholder='Phone Number'/><br/>
        <input placeholder='Email'/><br/>
        <input placeholder='Item'/><br/>
        <input placeholder='Design'/><br/>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default Orders
