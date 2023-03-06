import React, { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"
const List = () => {

   const {empid} =useParams
   const [data,setData] =useState([])

   //here we call our api when component mount
  useEffect( () =>async()=> {
    
    const res=  await axios.get("http://localhost:3002/employee")
    setData(res)
    console.log(res)
  },[])

  const Delete =async(id)=>{
    // useEffect( () =>async()=> {
      try {
        const res= await axios.delete("http://localhost:3002/employee/"+id)
        // setData(res)
        // Window.location.reload()
        const newRes= await axios.get("http://localhost:3002/employee")
        setData(newRes)
        console.log(res)
        // navigate('/')
        // console.log(res)
        
      // },[])
      // window.location.reload()
      } catch (error) {
        
      }
      // const res=  await axios.delete("http://localhost:3002/employee/"+id)
      // setData(res)
      // console.log(res)
    // },[])
    // window.location.reload()
 

  // let copy =data.filter((item)=>item.id!==id)
  // setData([...copy])
  
  }



const navigate = useNavigate()

const Editemp =(id)=>{

  navigate("/edit/"+id)
  
   }


const Details =(id)=>{

 navigate("/detail/"+id)
}


  return(
  
<div className="">
<div className=" mt-8">
<h1 className=" flex justify-center text-2xl font-bold">Employee List</h1>
<div className="  mt-10 flex justify-center ">
<Link to="/create" className="px-4  rounded-sm bg-blue-400">Add new</Link>
</div>

  <div className="mt-4 flex justify-center">

    <table className="">
        <thead>
            <tr>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-80" scope="col">Id</th>
                <th className= "px-6 py-3" scope="col">Name</th>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-80" scope="col">Email</th>
                <th className= "px-6 py-3" scope="col">Phone</th>
                <th className="px-6 py-3 bg-gray-50 dark:bg-gray-80" scope="col">Action</th>
            </tr>
        </thead>
        <tbody>

            {data?.data?.map((value)=>{

                return (
                    <tr key ={value.id}>
                    <td className="px-6 py-3 bg-gray-50 dark:bg-gray-80">{value.id}</td>
                    <td className= "px-6 py-3">{value.name}</td>
                    <td className="px-6 py-3 bg-gray-50 dark:bg-gray-80">{value.email}</td>
                    <td className= "px-6 py-3">{value.phone}</td>
                    <td className="px-6 py-3 bg-gray-50 dark:bg-gray-80">
                    <button onClick={()=>Editemp(value.id)} className= "rounded-sm px-6 py-2 bg-green-400"  >Edit</button>
                    <button onClick={()=>Details(value.id)}  className= "rounded-sm px-6 py-2 bg-slate-400" >details</button>
                    <button  onClick={()=>Delete(value.id)} className= " rounded-sm px-6 py-2 bg-red-500">Delete</button>
                    </td>i
                 
                </tr>
                )
           
            })}
        </tbody>
    </table>
  </div>
  </div>
 </div>
  )
}

export default List
