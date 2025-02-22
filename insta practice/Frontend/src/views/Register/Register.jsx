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
        seterror(err.response.data.message); // Show user-friendly error
      }
    }
  };

  return (
    <main>
      <section className="register flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-lg w-80 space-y-4"
        >
          <h2 className="text-xl font-semibold text-center">Register</h2>

          <div className="input flex flex-col">
            <label htmlFor="username" className="text-gray-600 text-sm">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="input flex flex-col">
            <label htmlFor="email" className="text-gray-600 text-sm">
              Email
            </label>
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
            <label htmlFor="password" className="text-gray-600 text-sm">
              Password
            </label>
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
            Register
          </button>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>
      </section>
    </main>
  );
};

export default Register;
