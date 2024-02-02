import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion';
import heroSectionImage from '@/assets/img/heroSectionImage.png'

import { Heart } from 'lucide-react';


function Navbar() {



  return (
   <div className='bg-red-300 px-[20px]'> 
    <header className='h-16  w-full  z-[999] '
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // transition={{ delay:1, duration:1 }}
    >
        <nav className=' w-full max-w-[1230px] mx-auto  h-full flex items-center justify-between '>
            <span className='text-3xl font-bold'>Event <span className='text-[#3461FF]'>360</span></span>
            <ul className='space-x-4'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
               <NavLink to={'/contact'}>Contact</NavLink>
            </ul>
        </nav>
    </header>

   {/* hero section*/}
    <div className='flex  mx-auto md:flex-nowrap  flex-wrap  gap-5'>
    
    <div>
        <h1 className='text-6xl font-bold mt-10'>Brand New <br /> Event Packages <br /> <span className='custom-font-color'>For Winter</span></h1>
        <p className='max-w-[40ch] my-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel non.</p>
        <button className='bg-[#3461FF] text-white py-2 px-10'>Explore</button>


        <div className='flex gap-5 mt-5  w-full'>
            <div className='border-2 border-white p-3 rounded-3xl bg-[#EFEDF9] shadow-sm'>
                <Heart className=' size-12  fill-[#685FD4] text-[#C3BFED] bg-[#C3BFED] p-2 rounded-full '/>
                <p className='max-w-[20ch] mt-8 text-[#333333] font-thin'>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id.</p>
            </div>
            <div className='border-2 border-white p-3 rounded-3xl bg-[#EFEDF9] shadow-sm'>
                <Heart className=' size-12  fill-[#F2C94C] text-[#F2E3BD] bg-[#F2E3BD] p-2 rounded-full '/>
                <p className='max-w-[20ch] mt-8 text-[#333333] font-thin'>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id.</p>
            </div>
            <div className='border-2 border-white p-3 rounded-3xl bg-[#EFEDF9] shadow-sm'>
                <Heart className=' size-12  fill-[#8AB2DC] text-[#CDDBF0] bg-[#CDDBF0] p-2 rounded-full '/>
                <p className='max-w-[20ch] mt-8 text-[#333333] font-thin'>Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus imperdiet sed id.</p>
            </div>
        </div>

    </div>
    
    <div className='flex  mx-auto items-center justify-center'>
        <img src={heroSectionImage} alt="" />
    </div>



    </div>
 


    </div>
  )
}

export default Navbar