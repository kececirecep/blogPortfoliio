import React from 'react'
import Logo from '../images/logo.png'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='py-8'>
        <nav className='flex items-center justify-between'>
            <Link to="/"><img src={Logo} alt="" className='w-[120px] lg:w-[100%]' /></Link>
            <ul className='flex lg:gap-12 lg:text-[24px] font-bold gap-2 text-[12px]'> 
              <li><NavLink to="/blog">Blog</NavLink></li> 
              <li><NavLink to="https://twitter.com/yuzuksuzsauron" target='_blank'>Twitter</NavLink></li>
            </ul>
        </nav>        
    </div>
  )
}

export default Header