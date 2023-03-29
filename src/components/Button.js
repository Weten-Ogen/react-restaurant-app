import {Link } from 'react-router-dom'

const Button = ({btnStyle, href, name}) => {
  return (
   <div className='inline'>
        <Link 
        className={btnStyle}
        to={href}
        >
        {name}
        </Link>
   </div>
    
  )
}

export default Button
