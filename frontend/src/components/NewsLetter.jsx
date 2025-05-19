import React from 'react'

const NewsLetter = () => {

    const onSubmitHandler=(event)=>{
        event.preventDefault();
    }
    
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off!</p>
        <p className='text-gray-400 mt-3'>
            Subscribe to our newsletter for exclusive deals, latest drops, and style inspiration — straight to your inbox
        </p>
        <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' onSubmit={onSubmitHandler}>
            <input type="email" placeholder='Enter your Email' className='w-full sm:flex-1 outline-none' required/>
            <button type='submit' className='bg-black text-white text-x5 px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetter