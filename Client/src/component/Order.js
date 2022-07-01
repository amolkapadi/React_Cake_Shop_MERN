import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Order() {
  const navigate = useNavigate();

  const [order, setOrder] = useState({
    name: "",
    cakename: "",
    contactNumber: "",
    flavour:"",
    delivery:"",
    address:""
   
  });

  const { name, cakename,contactNumber,flavour,delivery, address} = order;
  const onInputChange = e => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:4000/myorder", order);
    alert("Order Successfully place!!");
    navigate('/');
  };


  const img="https://b.zmtcdn.com/data/menus/236/18694236/272a6332291479ce150c46a470e7d2cb.jpg";
  return (
    <div className='container mt-5'>
         
          <div className='row mt-5 p-5'>
          <h3 className='text-muted '>Order Now</h3>
            <div className='col-md-6 '> 
              <form onSubmit={e => onSubmit(e)} >
              <div className="mb-3">
                        <label  className="form-label">Enter your Name</label>
                        <input type="text" className="form-control"  
                           name="name"
                           value={name}
                           onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Enter Cake Name</label>
                        <input type="text" className="form-control"  
                        name="cakename"
                        value={cakename}
                        onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Enter Contact Name</label>
                        <input type="text" className="form-control"  
                          name="contactNumber"
                          value={contactNumber}
                          onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Enter Flavour Name</label>
                        <input type="text" className="form-control"  
                         name="flavour"
                         value={flavour}
                         onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Enter Delivery Day(dd-mm-yyyy)</label>
                        <input type="text" className="form-control"  
                         name="delivery"
                         value={delivery}
                         onChange={e => onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Enter Your Address</label>
                        <input type="text" className="form-control"  
                         name="address"
                         value={address}
                         onChange={e => onInputChange(e)}/>
                    </div>
                    <button className='btn btn-success'>Place Order</button>
              </form>
            </div>
            <div className='col-md-6'>
              <img src={img} className="img-fluid" alt='img' />
            </div>
          </div>
    </div>
  )
}
