import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const {basketList}= useSelector(x=>x)
  return (
    <div className='bg-rose-500 h-14 items-center justify-evenly flex mb-10'>
        <div className='cursor-pointer text-white text-2xl hover:text-black'>
          <Link to="/">Ana Sayfa</Link>
        </div>
        <div className='cursor-pointer text-white text-2xl hover:text-black'>
           <Link to="/cart">Sepet ({basketList.length})</Link>
        </div>
    </div>
  )
}

export default Navbar