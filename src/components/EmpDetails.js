import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';

const EmpDetails = () => {
 
const navigate= useNavigate();



const Back=()=>{
  navigate("/")
}
  const [EmpData,setEmpData]= useState({});
  const {empid} =useParams();

  useEffect( () =>async()=>{
    const res=  await axios.get("http://localhost:3002/employee/"+empid)
    setEmpData(res)
    console.log(res)
  },[])
  return (
    <>
    <div className=' mx-60 shadow-2xl grid justify-center mt-12'>
     
      <h1 className='font-bold text-2xl'>Employee Details</h1>
      <hr></hr>
  {/* <div className='grid justify-center'> */}
  <h1 className='mt-4 text-lg font-semibold'> Name:{EmpData?.data?.name}</h1>
      <h2 className='mt-4 text-lg font-semibold' > Email:{EmpData?.data?.email}</h2>
      <h2 className='mt-4 text-lg font-semibold' > Phone:{EmpData?.data?.phone}</h2> 
      <h2 className='mt-4 text-lg font-semibold' > Address:{EmpData?.data?.address}</h2> 
     <button className='bg-gray-400 mt-4 mb-4' onClick={Back} >Back</button>
  {/* </div> */}

      </div>

   
    </>
  )
}

export default EmpDetails
