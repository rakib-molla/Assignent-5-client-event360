import heroImage from '@/assets/img/heroSectionImage.png'
const RecentEvents = () => {
  return (
    <div className="my-28 max-w-[1230] p-5">
      <div className="container mx-auto mt-8 flex flex-col items-center justify-center gap-10 md:flex-row">
        {/* <!-- Left Column - Images --> */}
        <div className="md:w-1/2">
          <div className="flex  justify-between mb-4 gap-5">
            <img
              src={heroImage}
              alt="Image 1"
              className="w-[190px] rounded-3xl md:w-full h-[190px] object-cover"
            />
            <img
              src={heroImage}
              alt="Image 1"
              className="w-[190px] rounded-3xl md:w-full h-[190px] object-cover"
            />
            <img
              src={heroImage}
              alt="Image 1"
              className="w-[190px] rounded-full md:w-full h-[190px] object-cover"
            />
            
          </div>
          <div className="flex  justify-between mb-4 gap-5">
          <img
              src={heroImage}
              alt="Image 1"
              className="w-[190px] rounded-full md:w-full h-[190px] object-cover"
            />
            <img
              src={heroImage}
              alt="Image 1"
              className="w-[190px] rounded-3xl md:w-full h-[190px] object-cover"
            />
            
            <img
              src={heroImage}
              alt="Image 1"
              className="w-[190px] rounded-3xl md:w-full h-[190px] object-cover"
            />
          </div>
          
        </div>

        {/* <!-- Right Column - Heading, Text, Button --> */}
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-6xl font-bold mb-4">Recent Events</h2>
          <p className="text-gray-700 mb-4">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
          <button className="py-2 px-10 bg-blue-500 text-white">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentEvents;
