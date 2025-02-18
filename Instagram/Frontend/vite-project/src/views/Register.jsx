import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [error, seterror] = useState("")

  const navigate = useNavigate

  function handleSubmit(e) {
    e.preventDefault()

    axios.post("http://localhost:3000/users/register",{
      username,
      email,
      password
    })

    .then(res =>{
      const data = res.data
      localStorage.setItem('token', data.token)
      navigate('/profile')
    })
    .catch(err=>{
      if(err.response.data?.message){
        seterror(err.response.data.message)
      }
    })
  }

  return (
    <div>Register
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={event => setusername(event.target.value)}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={event => setemail(event.target.value)}
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={event => setpassword(event.target.value)}
        required
      />

      <button type="submit">Submit</button>
        
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  )
}

export default Register