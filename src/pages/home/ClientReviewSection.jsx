import clientOne from '../../assets/img/client1.jpg';
import clientTwo from '../../assets/img/client2.jpg';
import clientThree from '../../assets/img/client3.jpg';
import '../../utils/swiper.css';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const ClientReviewSection = () => {
  return (
    <>
      <div className='my-20  container'>
        <h1 className='font-bold text-5xl mb-20'>
          What Your Client Said About Us
        </h1>

        {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 '>
           <div className='bg-blue-500 rounded-lg text-white p-4 shadow-lg'>
             <div className='flex items-center  gap-5 p-5'>
               <div>
                 <img
                   style={{
                     width: '50px',
                     height: '50px',
                     borderRadius: '100%',
                   }}
                   src={clientOne}
                   alt='picture'
                 />
               </div>
               <div className='flex flex-col gap-2'>
                 <h1 className='font-bold text-xl'>Amelia Joseph</h1>

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

           <div className='bg-blue-500 rounded-lg text-white p-4 shadow-lg'>
             <div className='flex items-center  gap-5 p-5'>
               <div className=''>
                 <img
                   style={{
                     width: '50px',
                     height: '50px',
                     borderRadius: '100%',
                   }}
                   src={clientTwo}
                   alt='picture'
                 />
               </div>
               <div className='flex flex-col gap-2'>
                 <h1 className='font-bold text-xl'>Jacob Joshua</h1>
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

           <div className='bg-blue-500 rounded-lg text-white p-4 shadow-lg'>
             <div className='flex items-center  gap-5 p-5'>
               <div>
                 <img
                   style={{
                     width: '50px',
                     height: '50px',
                     borderRadius: '100%',
                   }}
                   src={clientThree}
                   alt='picture'
                 />
               </div>
               <div className='flex flex-col gap-2'>
                 <h1 className='font-bold text-xl'>Amelia Joseph</h1>
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
         </div> */}
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className='mySwiper'>
          <SwiperSlide>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 '>
              <div className='bg-blue-500 rounded-lg text-white p-4 shadow-lg'>
                <div className='flex items-center  gap-5 p-5'>
                  <div>
                    <img
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '100%',
                      }}
                      src={clientOne}
                      alt='picture'
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-xl'>Amelia Joseph</h1>

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

              <div className=' rounded-lg  p-4 shadow-lg'>
                <div className='flex items-center  gap-5 p-5'>
                  <div className=''>
                    <img
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '100%',
                      }}
                      src={clientTwo}
                      alt='picture'
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-xl'>Jacob Joshua</h1>
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

              <div className=' rounded-lg  p-4 shadow-lg'>
                <div className='flex items-center  gap-5 p-5'>
                  <div>
                    <img
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '100%',
                      }}
                      src={clientThree}
                      alt='picture'
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-xl'>Amelia Joseph</h1>
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
          </SwiperSlide>
          <SwiperSlide>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 '>
              <div className=' rounded-lg  p-4 shadow-lg'>
                <div className='flex items-center  gap-5 p-5'>
                  <div>
                    <img
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '100%',
                      }}
                      src={clientOne}
                      alt='picture'
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-xl'>Amelia Joseph</h1>

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

              <div className=' bg-blue-500 rounded-lg text-white p-4 shadow-lg'>
                <div className='flex items-center  gap-5 p-5'>
                  <div className=''>
                    <img
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '100%',
                      }}
                      src={clientTwo}
                      alt='picture'
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-xl'>Jacob Joshua</h1>
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

              <div className=' p-4 shadow-lg'>
                <div className='flex items-center  gap-5 p-5'>
                  <div>
                    <img
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '100%',
                      }}
                      src={clientThree}
                      alt='picture'
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-xl'>Amelia Joseph</h1>
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
          </SwiperSlide>
          <SwiperSlide>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 '>
              <div className=' rounded-lg  p-4 shadow-lg'>
                <div className='flex items-center  gap-5 p-5'>
                  <div>
                    <img
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '100%',
                      }}
                      src={clientOne}
                      alt='picture'
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-xl'>Amelia Joseph</h1>

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

              <div className='  rounded-lg  p-4 shadow-lg'>
                <div className='flex items-center  gap-5 p-5'>
                  <div className=''>
                    <img
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '100%',
                      }}
                      src={clientTwo}
                      alt='picture'
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-xl'>Jacob Joshua</h1>
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

              <div className=' bg-blue-500 rounded-lg text-white p-4 shadow-lg'>
                <div className='flex items-center  gap-5 p-5'>
                  <div>
                    <img
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '100%',
                      }}
                      src={clientThree}
                      alt='picture'
                    />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-xl'>Amelia Joseph</h1>
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
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ClientReviewSection;

<div className='my-20  container'>
  <h1 className='font-bold text-5xl mb-20'>What Your Client Said About Us</h1>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 '>
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
          <h1 className='font-bold text-xl'>Amelia Joseph</h1>

          <p>Chief Manager</p>
        </div>
      </div>
      <div className='mt-5'>
        <p className='justify-start'>
          My vision came alive effortlessly. Their blend of casual and
          professional approach made the process a breeze. Creativity flowed,
          and the results were beyond my expectations.
        </p>
      </div>
    </div>

    <div className='bg-blue-500 rounded-lg text-white p-4 shadow-lg'>
      <div className='flex items-center  gap-5 p-5'>
        <div className=''>
          <img
            style={{ width: '50px', height: '50px', borderRadius: '100%' }}
            src={clientTwo}
            alt='picture'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-xl'>Jacob Joshua</h1>
          <p>Chief Manager</p>
        </div>
      </div>
      <div className='mt-5'>
        <p className='justify-start'>
          My vision came alive effortlessly. Their blend of casual and
          professional approach made the process a breeze. Creativity flowed,
          and the results were beyond my expectations.
        </p>
      </div>
    </div>

    <div className='bg-blue-500 rounded-lg text-white p-4 shadow-lg'>
      <div className='flex items-center  gap-5 p-5'>
        <div>
          <img
            style={{ width: '50px', height: '50px', borderRadius: '100%' }}
            src={clientThree}
            alt='picture'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-xl'>Amelia Joseph</h1>
          <p>Chief Manager</p>
        </div>
      </div>
      <div className='mt-5'>
        <p className='justify-start'>
          My vision came alive effortlessly. Their blend of casual and
          professional approach made the process a breeze. Creativity flowed,
          and the results were beyond my expectations.
        </p>
      </div>
    </div>
  </div>
</div>;


