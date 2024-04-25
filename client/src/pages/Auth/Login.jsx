import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import { toast } from 'react-toastify'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
function Login() {
    
    const [email,setEmail]=useState("")
    
    const [password,setPassword]=useState("")
    
    const navigate=useNavigate()
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const res = await axios.post('/api/v1/auth/login',{email,password})
            if(res.data.success){
                toast.success(res.data.message)
                navigate("/")
            }else{
                toast.error(res.data.message)
            }
        }catch(error){
            console.log(error)
            toast.error("Something went wrong")
        }
        
        
    }

  return (
    <Layout title="Login | ShopEase">
        <div className="register">
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>

  <div className="row mb-3 mt-3">
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
  
  
  <button type="submit" className="btn btn-primary col-sm-12">Submit</button>
  
</form>

        </div>
    </Layout>
  )
}

export default Login