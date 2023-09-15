import React,{useState} from 'react'
import axios from 'axios'

function Orders() {
  const [name,setName] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [email,setEmail] = useState('')
  const [item,setItem] = useState('')
  const [design,setDesign] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let order = {name,phoneNumber,email,item,design}
        console.log(order)

        let res = await axios.post('http://localhost:3001/orders',order,{
          headers:{
            "Content-Type": "application/json"
          }
        })

        console.log(res)
    }
  return (
    <div>
      <h1>Page for placing orders</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={(e)=>{setName(e.target.value)}} placeholder='Name'/> <br/>
        <input onChange={(e)=>{setPhoneNumber(e.target.value)}} placeholder='Phone Number'/><br/>
        <input onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/><br/>
        <input onChange={(e)=>{setItem(e.target.value)}} placeholder='Item'/><br/>
        <input onChange={(e)=>{setDesign(e.target.value)}} placeholder='Design'/><br/>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default Orders
