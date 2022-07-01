import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () =>{

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");


    const img="https://www.pngitem.com/pimgs/m/435-4354898_cake-delivery-png-logo-online-shop-cake-transparent.png"

    const navigate=useNavigate();

    const LoginData = async()=>{
       let result =await fetch ("http://localhost:4000/login",{
           method:"post",
           body:JSON.stringify({email,password}),
           headers:{
            'Content-Type':"application/json"
        }
       });
       result=await result.json();
       console.log(result);
       if(result.name){
        localStorage.setItem("user",JSON.stringify(result));
        navigate('/order');
       }else{
            alert("plase enter Correct User name and password");
       }
    }

    return(
        <div className='container mt-5'>
        <div className='row mt-5 login-container'>
        <h4 className='mt-5 '>Best Cake Shop</h4>
        <p className=''>Cake is a flour confection made from flour, sugar, and other ingredients, and is usually baked. In their oldest forms, cakes were modifications of bread, ...</p>
            <div className='col-md-6 mt-5'>
                <img src={img} alt="img" className="img-fluid" />
            </div>
            <div className='col-md-6 p-5 shadow mt-5' >
                    <h3>Login </h3>
                    <div className="mb-3">
                        <label  className="form-label">Enter Your Email</label>
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
                    <button className='btn btn-success' 
                   onClick={LoginData}>Login</button>
            </div>
        </div>
        </div>
    )
}   

export default Login;