import React, { useState } from 'react'
import '../style/Reg.css'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}from 'mdb-react-ui-kit';
import axios from 'axios';

const Reg = () => {
  const [username,setusername]=useState("");
  const [firstname,setfirstname]=useState("");
  const [lastname,setlastname]=useState("");
  const [email,setemail]=useState("");
  const [mobile,setmobile]=useState("");
  const [password,setpassword]=useState("");
  const [gender,setgender]=useState("");
  const [age,setage]=useState("");
  const [job_sector,setjob_sector]=useState("");
  const [current_location,setcurrent_location]=useState("");
  const [state,setstate]=useState("");
  const [city,setcity]=useState("");
  const [rpassword,setrpassword]=useState("");

  const sendData={username,firstname,lastname,email,mobile,password,gender,age,job_sector,current_location,state,city,rpassword};
  const InsertData=async()=>{
    const data = await axios.post('http://localhost:8000/api/user/register',sendData);
    console.log(data);
  };
  return (
    <div>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '1000px'}}>
        <MDBCardBody className='px-5'><br/>
          <h2 className="text-uppercase text-center mb-5"><b>Create an account</b></h2>
          <MDBInput wrapperClass='mb-4' placeholder='UserName' size='lg' type='text' value={username} onChange={(e)=>setusername(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' placeholder='First Name' size='lg' type='text' value={firstname} onChange={(e)=>setfirstname(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' placeholder='Last Name' size='lg' type='text' value={lastname} onChange={(e)=>setlastname(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' placeholder='Email-ID' size='lg' type='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' placeholder='Phone Number' size='lg' type='number' value={mobile} onChange={(e)=>setmobile(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' placeholder='Password' size='lg' type='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' placeholder='Repeat your password' size='lg'type='password' value={rpassword} onChange={(e)=>setrpassword(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' placeholder='Gender' size='lg' type='text' value={gender} onChange={(e)=>setgender(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' placeholder='Age' size='lg' type='number' value={age} onChange={(e)=>setage(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' placeholder='Job Sector' size='lg' type='text' value={job_sector} onChange={(e)=>setjob_sector(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' placeholder='Current Location' size='lg' type='text' value={current_location} onChange={(e)=>setcurrent_location(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' placeholder='State' size='lg' type='text' value={state} onChange={(e)=>setstate(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' placeholder='City' size='lg' type='text' value={city} onChange={(e)=>setcity(e.target.value)}/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={()=>InsertData()}>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  
    </div>
  )
}

export default Reg