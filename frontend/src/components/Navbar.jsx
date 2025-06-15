import React, { useContext, useState, useEffect } from 'react'
import {assets} from '../assets/assets'
import { NavLink,Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { useLocation } from 'react-router-dom';

const Navbar = () => {

    const [visible,setVisible] = useState(false);
    const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext);
    const [showSearchButton, setShowSearchButton] = useState(false);

    const logout = ()=>{
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
    }
    const location = useLocation();

useEffect(() => {
    setShowSearchButton(location.pathname.includes('collection'));
}, [location]);

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink className='flex flex-col items-center gap-1' to='/'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink className='flex flex-col items-center gap-1' to='/collection'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink className='flex flex-col items-center gap-1' to='/about'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink className='flex flex-col items-center gap-1' to='/contact'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
            {showSearchButton?<img src={assets.search_icon} className='w-5 cursor-pointer' alt="" onClick={()=>setShowSearch(true)}/>:null}
            <div className='group relative'>
  <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="Profile" />
  <div 
    onClick={() => {
      if (!token) navigate('/login');
    }} 
    className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'
  >
    {token && (
      <div className='flex flex-col gap-2 w-36 py-5 px-5 bg-slate-100 text-gray-500 rounded'>
        <p className='cursor-pointer hover:text-black'>My Profile</p>
        <p className='cursor-pointer hover:text-black' onClick={() => navigate('/orders')}>Orders</p>
        <p className='cursor-pointer hover:text-black' onClick={logout}>Logout</p>
      </div>
    )}
  </div>
</div>
            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                <p className='absolute right-[-5px] bottom-[-8px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
            <img onClick={()=>setVisible(true)}src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>
        {/*Sidebar menu for small windows*/}
        <div className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'}`}>
            <div className='flex flex-col text-gray-700'>
                <div onClick={()=>setVisible(false)} className='flex items-center p-3 gap-4 cursor-pointer'>
                    <img src={assets.dropdown_icon} className='h-4 rotate-180'/>
                    <p>Back</p>
                </div>
                <NavLink to='/' className='py-2 pl-6 border' onClick={()=>setVisible(false)}>HOME</NavLink>
                <NavLink to='/collection' className='py-2 pl-6 border' onClick={()=>setVisible(false)}>COLLECTIONS</NavLink>
                <NavLink to='/about' className='py-2 pl-6 border' onClick={()=>setVisible(false)}>ABOUT</NavLink>
                <NavLink to='/contact' className='py-2 pl-6 border' onClick={()=>setVisible(false)}>CONTACT</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar