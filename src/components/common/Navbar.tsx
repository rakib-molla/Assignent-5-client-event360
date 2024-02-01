import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion';
import heroSectionImage from '@/assets/img/heroSectionImage.png'
import Container from '@/layouts/Container';


function Navbar() {



  return (
   <> 
    <motion.header className='h-16  w-full  bg-white z-[999] border'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay:1, duration:1 }}
    >
        <nav className=' w-full max-w-[1230px] mx-auto  h-full flex items-center justify-between px-[20px]'>
            <span className='text-3xl font-bold'>Event <span className='text-[#3461FF]'>360</span></span>
            <ul className='space-x-4'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
               <NavLink to={'/contact'}>Contact</NavLink>
            </ul>
        </nav>
    </motion.header>

   {/* hero section*/}
    <div className='flex border max-w-[1230px] px-[20px] mx-auto md:flex-nowrap  flex-wrap  gap-10'>
<div>
    <h1 className='text-6xl font-bold'>Brand New <br /> Event Packages <span className='custom-font-color'>For Winter</span></h1>
    <p className='max-w-[50ch] my-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel non.</p>
    <button className='bg-[#3461FF] text-white py-2 px-10'>Explore</button>
</div>
    
    <div className='flex w-full mx-auto items-center justify-center'>
        <img src={heroSectionImage} alt="" />
    </div>


    </div>
 


    </>
  )
}

export default Navbar