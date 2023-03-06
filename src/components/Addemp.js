import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Addemp = () => {

    const [id ,setID] =useState([])
    const [name ,setName] =useState([])
    const [email ,setEmail] =useState([])
    const [phone,setPhone] =useState([])
    const [address, setAddress] =useState([])
 const navigate = useNavigate()

 
    const Add = async(e)=>{
 e.preventDefault()
        const empData ={name ,email ,phone ,address}
        if(name==""&&email==""&& phone==""&& address==""){
            return alert("Please fiil all the fields")
        }
        else{
            try {
      
                const res= await axios.post(`http://localhost:3002/employee `,empData)
                 console.log(res)
                  navigate("/") 
            } 
            catch (error) {
                console.log(error)
            }       
        }
            
     

    
    }

 


  return (
    <div className='flex justify-center'>
       <div className="rounded-2xl shadow-2xl w-80 mt-10 h-50 ">
          <div className="grid  justify-center">
            <h1 className="text-2xl font-bold">Add your details</h1>
            <form onSubmit={Add} className="mt-4">
            <h1> id: </h1>
              <input
                name="id"
                disabled="disabled"
                onChange={(e)=>{setID(e.target.value)}}
                className="border-2 mb-2"
                placeholder=" Enter Your name"
                type="text"
                value={id}
             
              />
              
              <h1> name: </h1>
              <input
                name="name"

                onChange={(e)=>{setName(e.target.value)}}
                className="border-2 mb-2"
                placeholder=" Enter Your name"
                type="text"
                value={name}
             
              />
              <h2>email:</h2>
              <input
                name="email"
               
                onChange={(e)=>{setEmail(e.target.value)}}
                placeholder=" Enter Your Email"
                className=" border-2 mb-2"
                type="email"
                value={email}
           
              />
                <h1> phone: </h1>
              <input
                name="phone"

                onChange={(e)=>{setPhone(e.target.value)}}
                className="border-2 mb-2"
                placeholder=" Enter Your name"
                type="text"
                value={phone}
             
              />
               <h1>Address: </h1>
                 <input
                name="phone"
                onChange={(e)=>{setAddress(e.target.value)}}
                className="border-2 mb-2"
                placeholder=" Enter Your name"
                type="text"
                value={address}
             
              />
            
            </form>
            <Link onClick={Add} to="/" className=' text-center mb-5 bg-blue-400'>Add</Link>
          
          </div>
        </div>
    </div>
  )
}

export default Addemp
