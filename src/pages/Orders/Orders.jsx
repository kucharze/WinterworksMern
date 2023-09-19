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
      <h2>{annoucnement}</h2>
      <form onSubmit={handleSubmit}>
        <input name='name' onChange={(e)=>{setName(e.target.value)}} placeholder='Name'/> <br/>
        <input name='phonenumber' onChange={(e)=>{setPhoneNumber(e.target.value)}} placeholder='Phone Number'/><br/>
        <input name='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/><br/>
        <input name='item' onChange={(e)=>{setItem(e.target.value)}} placeholder='Item'/><br/>
        <input name='design' onChange={(e)=>{setDesign(e.target.value)}} placeholder='Design'/><br/>
        <input className={styles.submit} type='submit'/>
      </form>
    </div>
  )
}

export default Orders
