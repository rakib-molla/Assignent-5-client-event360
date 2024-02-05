import clientOne from '../../assets/img/client1.jpg';
import clientTwo from '../../assets/img/client2.jpg';
import clientThree from '../../assets/img/client3.jpg';
const ClientReviewSection = () => {
   return (
     <div className='my-20  container'>
       <h1 className='font-bold text-5xl mb-20'>
         What Your Client Said About Us
       </h1>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
         <div className='bg-blue-500 rounded-lg text-white p-4 shadow-lg'>
           <div className='flex items-center  gap-5 p-5'>
             <div>
               <img
                 style={{ width: '50px', height: '50px', borderRadius: '100%' }}
                 src={clientOne}
                 alt='picture'
               />
             </div>
             <div className='flex flex-col gap-2'>
               <h1>Amelia Joseph</h1>
               <p>Chief Manager</p>
             </div>
           </div>
           <div className='mt-5'>
             <p className='justify-start'>
               My vision came alive effortlessly. Their blend of casual and
               professional approach made the process a breeze. Creativity
               flowed, and the results were beyond my expectations.
             </p>
           </div>
         </div>

         <div className='bg-white p-4 shadow-lg'>
           <div className='flex items-center  gap-5 p-5'>
             <div className=''>
               <img
                 style={{ width: '50px', height: '50px', borderRadius: '100%' }}
                 src={clientTwo}
                 alt='picture'
               />
             </div>
             <div className='flex flex-col gap-2'>
               <h1>Amelia Joseph</h1>
               <p>Chief Manager</p>
             </div>
           </div>
           <div className='mt-5'>
             <p className='justify-start'>
               My vision came alive effortlessly. Their blend of casual and
               professional approach made the process a breeze. Creativity
               flowed, and the results were beyond my expectations.
             </p>
           </div>
         </div>

         <div className='bg-white p-4 shadow-lg'>
           <div className='flex items-center  gap-5 p-5'>
             <div>
               <img
                 style={{ width: '50px', height: '50px', borderRadius: '100%' }}
                 src={clientThree}
                 alt='picture'
               />
             </div>
             <div className='flex flex-col gap-2'>
               <h1>Amelia Joseph</h1>
               <p>Chief Manager</p>
             </div>
           </div>
           <div className='mt-5'>
             <p className='justify-start'>
               My vision came alive effortlessly. Their blend of casual and
               professional approach made the process a breeze. Creativity
               flowed, and the results were beyond my expectations.
             </p>
           </div>
         </div>
       </div>
     </div>
   );
};

export default ClientReviewSection;


