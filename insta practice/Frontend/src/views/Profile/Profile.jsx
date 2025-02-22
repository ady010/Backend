import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [data, setData] = useState({});


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/users/profile", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.response?.data?.error || " error");
      });
  };

  const handleSubmit = (e)=>{
    <Link to="/posts"></Link>
  }

  return (
    <main>
      <div className="p-5">
        {/* top  */}
        <div className="butn" >
        <button onSubmit={handleSubmit} type="submit" class=" bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Create Post</button>
        </div>
        <div className="flex flex-col mb-8">
          <img
            className="h-[10rem] w-[10rem] rounded-full object-cover"
            src="https://images.unsplash.com/photo-1739911014029-84f4d78f86d4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
          />
          <h1 className="text-2xl font-extrabold mt-4">
            {data?.user?.username}
          </h1>
        </div>

        {/* posts */}
        <div>
          {/*  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data?.user?.posts?.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={post.media}
                  alt="Posts"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-600"> {post.caption}.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
