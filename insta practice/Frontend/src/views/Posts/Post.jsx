import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const Post = () => {

    const [media, setMedia] = useState("")
    const [caption, setCaption] = useState("")
    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()

        axios.post("http://localhost:3000/post",{
            media,
            caption
        },

        {headers: {Authorization: `bearer ${token}`}}
        
    ).then((res)=>{
        navigate("/profile")
    }).catch((err)=>{
        console.log(err);
    })

    // console.log(token);
    
    }
  return (
    <main className=' h-screen flex justify-center items-center'  >
        <form onSubmit={handleSubmit} class="w-full  max-w-sm p-6 bg-white rounded-2xl shadow-lg">
    
        <div class="mb-4">
            <p class="text-center text-gray-700 text-lg">Create Post</p>
        </div>
        <div class="mb-4">
            <label for="media" class="block text-gray-700 text-sm font-bold mb-2">Media</label>
            <input value={media} onChange={(e)=>setMedia(e.target.value)} type="media" id="media" name="media" class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
        </div>
        <div class="mb-4">
            <label for="caption" class="block text-gray-700 text-sm font-bold mb-2">Caption</label>
            <input value={caption} onChange={(e)=>setCaption(e.target.value)} type="caption" id="caption" name="caption" class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
        </div>
        <div>
            <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">Create</button>
        </div>
        
    </form>
    </main>
  )
}

export default Post