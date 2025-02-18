import axios from 'axios'
import React from 'react'
import {useNavigate} from 'react-router-dom'


const Login = () => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState("")

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        axios.post("http://localhost:3000/users/login",(
            email,
            password
        ))
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
    <section className="register" >
      <form onSubmit={handleSubmit}>
        
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
        <button>Login</button>

      </form>
      {error && <div className="error">{error}</div>}
      </section>
  </main>
  )
}

export default Login