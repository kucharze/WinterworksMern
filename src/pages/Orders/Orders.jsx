import React,{useState,useEffect} from 'react'
import axios from 'axios'
import styles from './Orders.module.css'
import text from '../../images/justforyou2.JPG'

// const BASE_URL = 
function Orders() {
  const [annoucnement,setAnnouncement] = useState('')
  const [queue,setQueue] = useState("Loading...")

    const loadOrders = async () =>{
      try{
        let length = await await axios.get('http://localhost:3001/orders',{
            headers:{
              "Content-Type": "application/json"
            }
          })
          console.log(length.data.length)
          setQueue(length.data.length)
      }
      catch (error){
        console.log("Error loading queue",error)
        setQueue("Error")
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
          <li>Please use a valid email or phone number along with your name
            when submitting an order.  
            If we cannot contact you, we will not put your name in the order queue.
          </li>

        </ul>
      </div>
      <p>You can order items such as: Shirt, Blanket, Hat, Handheld.</p>
      <p>If you would like something different.  Please specify</p>

      <h2>Currently this many orders in the queue: {queue}</h2>
      <h2>{annoucnement}</h2>
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
        Email Us Today
      </a>
      <img src={text} alt="" className={styles.text} />
    </div>
  )
}

export default Orders

//Backup code to fall back on if needed:

// const [name,setName] = useState('')
  // const [phoneNumber,setPhoneNumber] = useState('')
  // const [email,setEmail] = useState('')
  // const [item,setItem] = useState('')
  // const [design,setDesign] = useState('')

    // const handleSubmit = async (e) =>{
    //     e.preventDefault();
    //     let order = {name,phoneNumber,email,item,design}
    //     console.log(order)

    //     try {
    //       let res = await axios.post('http://localhost:3001/orders',
    //       order,{
    //         headers:{
    //           "Content-Type": "application/json"
    //         }
    //       })

    //       console.log(res)
    //       setAnnouncement("Successful Order Submision")
          
    //     } catch (error) {
    //       console.log("There was an error")
    //       console.log(error)
    //       setAnnouncement('Error')
    //     }

    // }