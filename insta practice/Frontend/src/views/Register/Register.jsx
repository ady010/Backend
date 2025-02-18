import React from 'react'
import { useState } from 'react'
import axios from 'axios'
// import useNavigate from 'react-router-dom'

const Register = () => {

  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [err, seterr] = useState("")

  // const navigate = useNavigate()


  function handleSubmit(e) {
    e.preventDefault()

    axios.post('http://localhost:3000/users/register',{
      username,
      email,
      password
    })

    .then(res=>{
      const data = res.data
      localStorage.setItem('token', data.token)
    })
    .catch(err=>{
      if(err.response.data?.message){
        seterr(err.response.data.message)
      }
    })
    
  }



  return (
    <main>
      <section className="register" >
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="username">username</label>
            <input type="text"  id='username' 
            placeholder='Username' 
            value={username} 
            onChange={(e)=>setusername(e.target.value)}/>
          </div>

          <div className="input">
            <label htmlFor="email">email</label>
            <input type="text"  id='email' 
            placeholder='Email'
            value={email}
            onChange={(e)=>setemail(e.target.value)}/>
          </div>

          <div className="input">
            <label htmlFor="password">Password</label>
            <input type="text"  id='password' 
            placeholder='Password'
            value={password}
            onChange={(e)=>setpassword(e.target.value)}/>
          </div>

          <button>Register</button>
        </form>
        </section>
    </main>
  )
}

export default Register