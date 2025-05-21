import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetter from '../components/NewsLetter'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img src={assets.about_img} className='w-full max-w-[450px]' alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4'>
            <p>At Forever, fashion meets timeless elegance. We curate modern, trend-forward styles that let you express yourself boldly—because your wardrobe should evolve with you.</p>
            <p>Driven by passion, designed for confidence. Forever is more than just clothing; it's a movement to empower individuality through effortless, everyday fashion.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>At Forever, our mission is to inspire confidence through fashion that feels authentic, inclusive, and ever-evolving. We’re committed to creating high-quality, affordable clothing that empowers individuals to own their style and embrace every moment with boldness and grace.</p>
          </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US?'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Asurance</b>
          <p className='text-gray-600'>Every piece at Forever is crafted with precision, using premium materials and attention to detail. We believe in delivering fashion that not only looks good but lasts longer.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>From seamless browsing to easy checkout, we’ve designed a shopping experience that fits your lifestyle. Enjoy fast delivery, easy returns, and a user-friendly interface—fashion, simplified.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Your satisfaction is our priority—we’re here for you every step of the way. Our support team is responsive, reliable, and ready to help with anything you need.</p>
        </div>
      </div>

      <NewsLetter />
    </div>
  )
}

export default About