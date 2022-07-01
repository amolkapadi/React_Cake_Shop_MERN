import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from "react-router-dom";
export default function Sginup() {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate=useNavigate();

    const img="https://png.pngtree.com/png-vector/20210123/ourlarge/pngtree-retro-bakery-clip-art-png-image_2778768.jpg"

    useEffect(()=>{
    const auth =localStorage.getItem('user');
        if(auth){
            navigate('/home');
        }
    },[])

    const SignupData = async ()=>{
        console.log(name,email,password);
        let result=await fetch("http://localhost:4000/register",{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':"application/json"
            }
        });
        result=await result.json();
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result));
        navigate('/')
    }

    return (
        <div className='container mt-5'>
                
            <div className='row mt-5'>
            <h1 className='text-center text-muted mt-5'>Registration </h1><hr />
                <div className='col-md-6 p-5 shadow mt-5' >
                    <div className="mb-3">
                        <label  className="form-label">Enter Name</label>
                        <input type="text" className="form-control"         
                            value={name} onChange={(e)=>setName(e.target.value)}
                            placeholder="Enter your Name" />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Enter Email</label>
                        <input type="text" className="form-control" 
                            value={email} onChange={(e)=>setEmail(e.target.value)}
                            placeholder="Enter your Email" />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Enter Password</label>
                        <input type="password" className="form-control" 
                            value={password} onChange={(e)=>setPassword(e.target.value)}
                            placeholder="Enter your password" />
                    </div>
                    <button className='btn btn-success mt-5' 
                    onClick={SignupData}>Sign Up</button>
                    <p className='mt-3'>Already you Have Account Click Login </p>
                    <Link to="/login" className='btn btn-success '>Login</Link>
                    
                </div>
                <div className='col-md-6 mt-5'>
                    <img src={img} alt='sginup' className='img-fluid' />
                </div>
            </div>
        </div>
    )
}
