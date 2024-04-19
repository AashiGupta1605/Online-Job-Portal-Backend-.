import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';

const Data = () => {
    const udata=async ()=>{
        const a=await axios.get('http://localhost:8000/api/user/UserData');
        console.log(a)
    };
  useEffect(()=>{
    udata();
},[]);
  return (
    <div>
      data
    </div>
  )
}

export default Data;