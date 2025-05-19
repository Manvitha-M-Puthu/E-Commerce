import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} alt="" className='mb-5 w-32'/>
                <p className='w-full md:w-2/3 text-gray-600'>Discover fashion that fits your lifestyle. From timeless classics to modern trends, we’ve got you covered. Crafted with care, styled with confidence. Join our journey — where quality meets comfort. Made for you, loved by many.</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 892023233</li>
                    <li>manvithaputhu123@gmail.com</li>
                </ul>
            </div>
        </div>
        <div><hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All Rights Reserved</p></div>
    </div>
  )
}

export default Footer