import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='flex bg-white pl-8 mt-6 pb-2 shadow-sm'>
        {/* Navbar content goes here */}
        {/* https://images.seeklogo.com/logo-png/35/2/myntra-logo-png_seeklogo-355038.png */}
        <img className='h-12.5' src="https://images.seeklogo.com/logo-png/35/2/myntra-logo-png_seeklogo-355038.png"/>
        <div className='flex gap-8 ml-20'>
            <button className='font-bold'>MEN</button>
            <button className='font-bold'>WOMEN</button>
            <button className='font-bold'>KIDS</button>
            <button className='font-bold'>HOME & LIVING</button>
            <button className='font-bold'>BEAUTY</button>
            <div className='flex'>
                <button className='font-bold'>STUDIO</button>
                <p className='text-[13px] text-pink-400 font-bold'>New</p>
            </div>
            {/* 
            https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-9.png 
            https://images.rawpixel.com/image_png_700/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsb2ZmaWNlNV9zaW1wbGVfbWluaW1hbGlzdGljX2JsYWNrX2FuZF93aGl0ZV9pY29uX29mX2FfdV85MTU4MGM0Yi0yZDI3LTRjY2MtYWZhMC1mODFlOTNlNzhhOGUucG5n.
            https://static.thenounproject.com/png/3386813-200.png
            https://cdn-icons-png.flaticon.com/512/468/468209.png
            */}
            <div className='relative'>
                <img className='h-4 w-4 absolute top-5 left-3' src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-9.png " />
                <input className='bg-gray-100 h-9 w-130 mt-2 text-[14px] pl-16' placeholder='Search for products brands and more'/>   
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img className='flex h-5 w-5 mt-2' src="https://cdn-icons-png.flaticon.com/128/456/456283.png" />
                <p className='text-[13px] font-bold'>Profile</p>
            </div>
             <div className='flex flex-col justify-center items-center'>
                <img className='h-6 w-6 mt-1' src=" https://static.thenounproject.com/png/3386813-200.png" />
                <p className='text-[13px] font-bold'>Wishlist</p>
            </div>
             <div className='flex flex-col justify-center items-center'>
                <img className='h-5 w-5 mt-2' src="https://cdn-icons-png.flaticon.com/512/468/468209.png" />
                <p className='text-[13px] font-bold'>Bag</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
