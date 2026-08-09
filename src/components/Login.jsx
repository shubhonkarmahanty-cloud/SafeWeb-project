import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
const [email,setEmail] = useState('')
const [pasword,setPasword] = useState('')
const navigate = useNavigate()

const checkInput =(e)=>{
  e.preventDefault()
  if(email && pasword){
    // console.log("Login Sucessfully")
    navigate("/Dashboard")
  }else{
    alert("Please enter Email or Pasward")
  }
}
  
  return (
    <div className=' flex items-center justify-center h-[80vh]'>
       <section className='bg-amber-200 rounded-2xl h-100 p-10 shadow-[1px_2px_80px_10px_red]'>
       <h1 className='font-bold text-4xl text-center'>Parent Login</h1>

      <form
      onSubmit={checkInput}
       className='mt-10 flex items-center flex-col font-bold gap-8'>
        <label
         className='text-[20px]'>
          Email/Number : 
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          autoComplete='email'
           className='outline-2 ml-1 pl-2' type="email" placeholder="Enter your email or Number" />
           </label>
        <label
         className='text-[20px] '>
          Password : 
          <input 
          value={pasword}
          onChange={(e)=>{
            setPasword(e.target.value)
          }}
          autoComplete='current-password'
          className='outline-2 pl-2 ml-12' type="password" placeholder="Enter your password" />
          </label>
        <button className='bg-red-500 w-50 p-3 rounded-3xl cursor-pointer hover:bg-red-400 ' type="submit">Login</button>
      </form>
      <p className='text-[15px] text-blue-700 font-medium text-center mt-7'>
        Don't have an account? <a href="#">Create Account</a>
      </p>
    </section>
    </div>
  )
}

export default Login
