import React,{useState,useEffect} from 'react'
import axios from 'axios'
import styles from './Orders.module.css'
import text from '../../images/justforyou2.JPG'

// const BASE_URL = 
function Orders() {
  const [name,setName] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [email,setEmail] = useState('')
  const [item,setItem] = useState('')
  const [design,setDesign] = useState('')
  const [annoucnement,setAnnouncement] = useState('')
  const [queue,setQueue] = useState(0)

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

    const loadOrders = async () =>{
      try{
        let length = await await axios.get('http://localhost:3001/orders',{
            headers:{
              "Content-Type": "application/json"
            }
          })
          console.log(length.json())
      }
      catch (error){
        console.log("Error loading queue",error)
      }
    }

    useEffect(()=>{
      loadOrders();
    })

  return (
    <div className={styles.Orders}>
      <div className={styles.list}>
        <h1 className={styles.title}>Order Info</h1>
        <ul>
          <li>Please allow at least one week for order completion after order confirmation.</li>
          <li>Please use a valid email or phone number when submitting an order.  
            If we cannot contact you, we will not put your name in the order queue.
          </li>

        </ul>
      </div>
      <h2>Currently this many orders in the queue: {queue}</h2>
      <h2>{annoucnement}</h2>
      <form onSubmit={handleSubmit}>
        <input name='name' onChange={(e)=>{setName(e.target.value)}} placeholder='Name'/> 
        <input name='phonenumber' onChange={(e)=>{setPhoneNumber(e.target.value)}} placeholder='Phone Number'/>
        <input name='email' onChange={(e)=>{
          setEmail(e.target.value)
          }} placeholder='Email'/>
          <br/>
        <select name='item' onChange={(e)=>{
          console.log(e.target.value);setItem(e.target.value)
          }}>
          <option value="Shirt">Shirt</option>
          <option value="Blanket">Blanket</option>
          <option value="Hat">Hat</option>
          <option value="Handheld">Handheld</option>
          <option value="Other">Other</option>
        </select>
        {/* <input name='item' onChange={(e)=>{setItem(e.target.value)}} placeholder='Item(Will be changed to dropdown)'/> */}
        <input name='design' onChange={(e)=>{setDesign(e.target.value)}} 
        placeholder='Describe what you want on your item'/><br/>
        <input className={styles.submit} type='submit'/>
      </form>
      <img src={text} alt="" className={styles.text} />
    </div>
  )
}

export default Orders
