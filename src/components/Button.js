import {Link } from 'react-router-dom'

const Button = ({btnStyle, href, name}) => {
  return (
    <Link className={btnStyle} to={href} >{name}</Link>
    
  )
}

export default Button
