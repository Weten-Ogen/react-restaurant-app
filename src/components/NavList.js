import React from 'react'

const NavList = ({element,text}) => {
  return (
    <li className='flex hover hover:text-white/70 text-2xl gap-2 my-5 cursor-pointer'>
      <div className='text-3xl'>{element}</div>
      <div className='px-4'>{text}</div>
    </li>
  )
}

export default NavList
