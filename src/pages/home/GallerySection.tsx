import { Check } from "lucide-react";
import pictureOne from '@/assets/img/Picture1.png';
import pictureTwo from '@/assets/img/Picture2.png';
import pictureThree from '@/assets/img/Picture3.png';
import pictureFour from '@/assets/img/Picture4.png';
import pictureFive from '@/assets/img/Picture5.png';
import pictureSix from '@/assets/img/Picture6.png';
import pictureSeven from '@/assets/img/Picture7.png';
import pictureEight from '@/assets/img/Picture8.png';
import pictureNine from '@/assets/img/Picture9.png';
import pictureTen from '@/assets/img/Picture10.png';

const GallerySection = () => {
   return (
      <div className="my-20">
      <div className="container mx-auto mt-8 flex flex-col md:flex-row">

         {/* <!-- Right Column - Heading, Text, Button --> */}
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">Gallery</h2>
          <p className="text-gray-700 mb-4">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
          
          <div className="flex flex-col">
                    <div className="flex items-center  gap-2 mb-2">
                        <Check className="size-5 bg-white rounded-full text-green-500 p-1"/> <p className="max-w-[25ch]"> One day pas access all lecture</p>
                    </div>
                    <div className="flex items-center  gap-2 mb-2">
                        <Check className="size-5 bg-white rounded-full text-green-500 p-1"/> <p className="max-w-[25ch]">Lunch and Snack</p>
                    </div>
                    <div className="flex items-center  gap-2 mb-2">
                        <Check className="size-5 bg-white rounded-full text-green-500 p-1"/> <p className="max-w-[25ch]"> Meet Event Speaker</p>
                    </div>
                    <div className="flex items-center  gap-2 mb-2">
                        <Check className="size-5 bg-white rounded-full text-green-500 p-1"/> <p className="max-w-[25ch]"> Front Seat</p>
                    </div>
                    <div className="flex items-center  gap-2 mb-2 ">
                        <Check className="size-5 bg-white rounded-full text-green-500 p-1"/> <p className="max-w-[25ch]"> One day access all lecture </p>
                    </div>
                </div>
        </div>

        {/* <!-- Left Column - Images --> */}
        <div className="md:w-2/3 ">
          <div className="flex items-center flex-wrap">
              
                <div className="flex flex-col items-center gap-1  h-[450px]">
                  <div className="">
                      <img className=" h-40" src={pictureOne} alt="" />
                  </div>
                  
                  <div className="h-32 w-52">
                      <img className=" h-50" src={pictureTwo} alt="" />
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3   h-[650px]">
                  <div className="">
                      <img className=" h-50" src={pictureThree} alt="" />
                  </div>

                  <div className="h-50">
                      <img className=" h-50" src={pictureFour} alt="" />
                  </div>
                  <div className="h-56 ">
                      <img className=" h-52" src={pictureFive} alt="" />
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3  h-[650px]">
                  <div className="">
                      <img className=" h-36" src={pictureSix} alt="" />
                  </div>

                  <div className="h-50 ">
                      <img className=" h-50" src={pictureSeven} alt="" />
                  </div>
                  <div className="h-50 ">
                      <img className=" h-50" src={pictureEight} alt="" />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-3  h-[650px]">
                  <div className="">
                      <img className="h-auto" src={pictureNine} alt="" />
                  </div>

                  <div className="h-50 ">
                      <img className=" h-50" src={pictureTen} alt="" />
                  </div>
                 
                </div>
                
          </div>
        </div>
      </div>
    </div>
   );
};

export default GallerySection;