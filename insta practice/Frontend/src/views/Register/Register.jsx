import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/users/register", {
        username,
        email,
        password,
      });
  
      localStorage.setItem("token", res.data.token);
      navigate("/profile");
    } catch (err) {
      console.error(err); // Logs full error details
      if (err.response?.data?.message) {
        setError(err.response.data.message); // Show user-friendly error
      }
    }
  };

  return (
    <main>
      <section className="register">
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
          </div>

          <div className="input">
            <label htmlFor="email">email</label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div className="input">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          <button type="submit">Register</button>
        </form>
        {error && <p>{error}</p>}
      </section>
    </main>
  );
};

export default Register;
