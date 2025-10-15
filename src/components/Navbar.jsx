//icons
import { HiBars3CenterLeft } from 'react-icons/hi2'; 
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { HiSearch } from 'react-icons/hi';
import avatarImage from '../assets/avatar.png';

// hooks
import { useState } from 'react';

// router
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const cartItems = useSelector(state => state.cart.cartItems)
    const {currentUser, logout} = useAuth() 
   
    const navigation = [
        {name: 'Dashboard', href: '/dashboard'},
        {name: 'Orders',    href: '/orders'},
        {name: 'Cart Page', href: '/cart'},
        {name: 'Checkout',  href: '/checkout'},
    ]

    const handleLogout = () => {
        logout()
    }
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
          <nav className="container mx-auto flex justify-between items-center">
              {/* left side  */}
              <div className='flex items-center md:gap-10 gap-4'>
                  <Link to="/"><HiBars3CenterLeft className='size-6' /></Link>
                        
                  {/* search Input  */}
                  <div className="relative sm:w-72 w-40 space-x-2">
                      <HiSearch className='absolute inline-block left-4 inset-y-2' />
                    <input type="text" placeholder='Search...' className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none' />
                  </div>
              </div>

              {/* right side  */}
              <div className='relative flex items-center md:space-x-3 space-x-2'>
                  <div>
                      {currentUser ?
                          <>
                            <button onClick={() => setIsDropDownOpen(!isDropDownOpen)} className='block' >
                                <img src={avatarImage} className='size-7 rounded-full ring-2 ring-blue-500' />
                              </button>
                              {/* Show dropdown menu */}
                              {
                                  isDropDownOpen && (
                                      <div className='absolute mt-2 right-0 bg-white shadow-lg rounded-md w-48 z-40'>
                                          <ul>
                                              {
                                                navigation.map((item) => (
                                                    <li key={item.name} onClick={() => setIsDropDownOpen(false) }>
                                                        <Link to={item.href} className='block py-2 px-4 text-sm hover:bg-gray-100'>{item.name}</Link>
                                                    </li>
                                                ))
                                              }
                                               <li>
                                                    <button className='block w-full text-left text-red-600 py-2 px-4 text-sm hover:bg-gray-100' onClick={handleLogout}>
                                                        logout
                                                    </button>
                                                </li>
                                          </ul>
                                      </div>
                                    
                                )
                              }
                             
                          </>
                          : <Link to='/login' className='block'><HiOutlineUser className='size-6' /></Link>}
                  </div>
                  
                  <button className='hidden sm:block'>
                     <HiOutlineHeart className='size-6' />
                  </button>
                  <Link to='/cart' className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm'>
                      <HiOutlineShoppingCart className='size-6' />
                      {
                          cartItems.length > 0 ? 
                            <span className='text-sm font-sans-semibold sm:ml-1'>{cartItems.length}</span> :
                            <span className='text-sm font-sans-semibold sm:ml-1'>0</span>
                      }
                  </Link>
              </div>
              
          </nav>
    </header>
  )
}
