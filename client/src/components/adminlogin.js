import React from 'react'
import { useState } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './adminlogin.css';
const Adminlogin = () => {
    const navigate=useNavigate();
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');

    const login =()=>{
        Axios.post('http://localhost:3001/adminlogin',{
              username:username,
              password:password,
        }).then((response)=>{
               
              console.log(response);
              if(response.data[0].user == null){
                  alert("Invalid username or password");
              }
              else{
                  navigate(`/adminpage`);
              }

        }).catch((err)=>{console.log(err)});
  }
  return (
    <div className="  h-screen">
        <Navbar />
        <div className="login">
            <div className=" flex flex-col gap-4 w-[30%] mx-auto" id="out">
                <h1 className=" text-3xl font-semibold mt-40 mb-4">Admin Login</h1>
                <span className=" flex gap-2 justify-center" id='a'><p>Username:</p><input type="text" placeholder="Username..." onChange={(e) => {setusername(e.target.value);}} className=" rounded-md px-2"/></span>
                <span className=" flex gap-2 justify-center" id='a'><p>Password:</p><input type="text" placeholder="Password..." onChange={(e) => { setpassword(e.target.value); }} className=" rounded-md px-2"/></span>
                <div>
                <button onClick={login} className=" px-4 py-2 bg-green-400 hover:bg-green-500 rounded-lg" id='button'>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Adminlogin