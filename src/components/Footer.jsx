"use-client"
import React from 'react'

const Footer = () => {
  return (
    <footer className='h-40 bg-slate-700 mt-5' >
      <div className='flex p-5 justify-around'>
        <div className='text-center flex flex-col justify-center'>
          <h1 className='text-3xl' >Welcome toWork manager</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='text-center'>
          <h1>Important link</h1>
          <ul>
            <li><a href='#'>Facebook</a></li>
            <li><a href='#'>Youtube</a></li>
            <li><a href='#'>Instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer