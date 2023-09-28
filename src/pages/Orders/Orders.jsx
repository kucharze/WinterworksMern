import React,{useState} from 'react'
import axios from 'axios'
import styles from './Orders.module.css'

// const BASE_URL = 
function Orders() {
  const [name,setName] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [email,setEmail] = useState('')
  const [item,setItem] = useState('')
  const [design,setDesign] = useState('')
  const [annoucnement,setAnnouncement] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let order = {name,phoneNumber,email,item,design}
        console.log(order)

        try {
          let res = await axios.post('http://localhost:3001/orders',
          order,{
            headers:{
              "Content-Type": "application/json"
            }
          })

          console.log(res)
          setAnnouncement("Successful Order Submision")
          
        } catch (error) {
          console.log("There was an error")
          console.log(error)
          setAnnouncement('Error')
        }

    }

  return (
    <div className={styles.Orders}>
      <h1>Page for placing orders</h1>
      <div className={styles.list}>
        <h1>Order rules</h1>
        <ul>
          <li>Please allow at least one week for order completion. These orders take time to complete</li>
          <li>Please use a valid email or phone number when submitting an order.  
            If we cannot contact you, we will not put your name in the order queue.
          </li>

        </ul>
      </div>
      <h2>{annoucnement}</h2>
      <form onSubmit={handleSubmit}>
        <input name='name' onChange={(e)=>{setName(e.target.value)}} placeholder='Name'/> 
        <input name='phonenumber' onChange={(e)=>{setPhoneNumber(e.target.value)}} placeholder='Phone Number'/>
        <input name='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
        <select name='item'>
          <option value="Shirts">Shirts</option>
          <option value="Blankets">Blankets</option>
          <option value="Hats">Hats</option>
          <option value="Handhelds">Handhelds</option>
        </select>
        <input name='item' onChange={(e)=>{setItem(e.target.value)}} placeholder='Item(Will be changed to dropdown)'/>
        <input name='design' onChange={(e)=>{setDesign(e.target.value)}} placeholder='Design'/><br/>
        <input className={styles.submit} type='submit'/>
      </form>
    </div>
  )
}

export default Orders
