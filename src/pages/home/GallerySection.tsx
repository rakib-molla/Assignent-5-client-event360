import { Check } from "lucide-react";

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
        <div className="md:w-1/2 border">
          <div className="flex justify-between mb-4">
            <img
              src="image1.jpg"
              alt="Image 1"
              className="w-1/2 md:w-full object-cover"
            />
            <img
              src="image2.jpg"
              alt="Image 2"
              className="w-1/2 md:w-full object-cover"
            />
            <img
              src="image2.jpg"
              alt="Image 2"
              className="w-1/2 md:w-full object-cover"
            />
          </div>
          
          
        </div>

        

      </div>
    </div>
   );
};

export default GallerySection;