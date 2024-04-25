import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import { toast } from 'react-toastify'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import "../../styles/AuthStyles.css";
function Register() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [password,setPassword]=useState("")
    const [address,setAddress]=useState("")
    const navigate=useNavigate()
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const res = await axios.post('/api/v1/auth/register',{name,email,password,address,phone})
            if(res.data.success){
                toast.success(res.data.message)
                navigate("/login")
            }else{
                toast.error(res.data.message)
            }
        }catch(error){
            console.log(error)
            toast.error("Something went wrong")
        }
        
        
    }

  return (
    <Layout title="Register | ShopEase">
        <div className="form-container">
            
            <form onSubmit={handleSubmit}>
            <h4 className="title">REGISTER FORM</h4>

  <div className="row mb-3 mt-3">
    <label htmlFor="exampleInputName" className="col-sm-3 col-form-label">Name</label>
    <div className="col-sm-9">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputName" required/>
    </div>
    
  </div>
  <div className="row mb-3">
    <label htmlFor="exampleInputEmail" className="col-sm-3 col-form-label">Email</label>
    <div className="col-sm-9">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="form-control" id="exampleInputEmail" required/>
    </div>
    
  </div>
  <div className="row mb-3">
    <label htmlFor="exampleInputPassword" className="col-sm-3 col-form-label">Password</label>
    <div className="col-sm-9">
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  className="form-control" id="exampleInputPassword" required/>
    </div>
    
  </div>
  <div className="row mb-3">
    <label htmlFor="exampleInputPhone" className="col-sm-3 col-form-label">Phone</label>
    <div className="col-sm-9">
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}  className="form-control" id="exampleInputPhone" required />
    </div>
    
  </div>
  <div className="row mb-3">
    <label htmlFor="exampleInputAddress" className="col-sm-3 col-form-label">Address</label>
    <div className="col-sm-9">
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}  className="form-control" id="exampleInputAddress" required/>
    </div>
    
  </div>
  
  <button type="submit" className="col-sm-12 btn btn-primary ">SUBMIT</button>
  
</form>

        </div>
    </Layout>
  )
}

export default Register