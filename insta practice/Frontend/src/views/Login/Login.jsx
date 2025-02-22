import axios from 'axios'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'


const Login = () => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState("")

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        axios.post("http://localhost:3000/users/login",{
            email,
            password
          })
        .then(res=>{
            const data = res.data
            localStorage.setItem('token', data.token)
            navigate("/profile")
        })
        .catch(err=>{
            if(err.response.data?.message){
                seterror(err.response.message)
            }
        })

    }

  return (
    <main>
      <section className="register flex justify-center items-center min-h-screen bg-gray-100">
        <form 
          onSubmit={handleSubmit} 
          className="bg-white p-6 rounded-2xl shadow-lg w-80 space-y-4"
        >
          <h2 className="text-xl font-semibold text-center">Login</h2>
          
          <div className="input flex flex-col">
            <label htmlFor="email" className="text-gray-600 text-sm">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="input flex flex-col">
            <label htmlFor="password" className="text-gray-600 text-sm">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
          
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>
      </section>
  </main>
  )
}

export default Login