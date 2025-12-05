import React from 'react'

function Card({username}){
    // console.log(props.username);
    return(
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/27906922/pexels-photo-27906922/free-photo-of-a-woman-is-standing-on-the-beach-with-birds-flying-around-her.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-100">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
  )
}

export default Card