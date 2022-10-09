import React from 'react'
import Search from '../../ASSETS/search.svg'
import User from '../../ASSETS/user.svg'
import Love from '../../ASSETS/love.svg'
import Cart from '../../ASSETS/cart.svg'
import Vector from '../../ASSETS/vector.svg'
import Hamburger from 'hamburger-react';
import { Link, matchPath, useLocation } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase'
import './Navbar.scss'
import { useState } from "react";
import searchBlack from '../../ASSETS/searchBlack.svg';
import userYellow from '../../ASSETS/userYellow.svg';
import loveYellow from '../../ASSETS/loveYellow.svg';
import cartYellow from '../../ASSETS/cartYellow.svg';
import vectorBlack from '../../ASSETS/vectorBlack.svg';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const catalog = matchPath("/catalog", pathname)

  return (
    <nav>
          <div className='first-block'>
             <div style={catalog && {color: '#E0BEA2'}} onClick={(e) => setIsOpen(!isOpen)}  className='hamburger' >
                <Hamburger />
              </div>
                <Link style={catalog && {color: 'black'}}>NEW</Link>
                <Link style={catalog && {color: 'black'}} to='/catalog'>КАТАЛОГ</Link>
                <Link style={catalog && {color: 'black'}}>О НАС</Link>
            </div>
            {isOpen && (
            <div style={catalog && {backroundColor: '#E0BEA2'}} className='toggle'>
                <Link>ОПЛАТА И ДОСТАВКА</Link>
                <Link>УСЛОВИЯ ВОЗВРАТА</Link>
                <Link>КОНТАКТЫ</Link>
            </div>
            )}
            <div className='second-block'>
                <h1 onClick={() => navigate('/catalog')} style={catalog && {color: '#E0BEA2'}} className='h1'>YANKI</h1>
            </div>
            <div className='third-block'>
              <div className='language'>
                  <p style={catalog && {color: 'black'}}>RU</p>
                  <img src={catalog ? vectorBlack : Vector} alt=''/>
              </div>
                <p style={catalog && {color: 'black'}} className='uah'>UAH</p>
                <img className='uah' style={{ left: '100px' }} src={catalog ? vectorBlack : Vector} alt=''/>
            </div>
            <div className='fourth-block'>
                <img className='disappear' src={catalog ? searchBlack : Search} alt='' />
                <img className='disappear' onClick={() => signOut(auth)} src={catalog ? userYellow : User} alt='' />
                <img src={catalog ? loveYellow : Love} alt='' />
                <img src={catalog ? cartYellow : Cart} alt='' />
            </div>
        </nav>
  )
}

export default Navbar