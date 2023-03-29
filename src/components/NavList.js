import React from 'react'

const NavList = ({element,text}) => {
  return (

    <li className='flex items-center gap-2 m-6 md:my-8'>
      <div>
        {element}
      </div>
      <div>
        {text}
      </div>
    </li>
  )
}

export default NavList
