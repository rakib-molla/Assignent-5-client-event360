import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion';
import heroSectionImage from '@/assets/img/heroSectionImage.png'
import Container from '@/layouts/Container';


function Navbar() {

   const intro = {
      hidden:{opacity: 0},
      visible:{opacity: 1,
          transition: {
          duration: 0.5,
          staggerChildren: 0.25,
          delayChildren: 1,
      }}
  }
  const introChildren ={
      hidden:{opacity: 0, y: -200},
      visible:{opacity: 1,y: 0,
          transition: {
          duration: 0.5,
          type:'spring',bounce:0.6,
      }}
  }
  const laptop = {
      initial:{y: 0, rotate:0, scale: 5},
      animate:{
          y:20,
          rotate: -30,
          scale:1,
          transition:{
              duration: 1,
              ease: 'linear',
              y:{duration: 2,
              repeat: Infinity,
              repeatType:'reverse',
              ease:'easeInOut',
          }
          }
      }
  }

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

 


    </>
  )
}

export default Navbar