const RecentEvents = () => {
  return (
    <div className="my-20">
      <div className="container mx-auto mt-8 flex flex-col md:flex-row">
        {/* <!-- Left Column - Images --> */}
        <div className="md:w-1/2">
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
          
          <div className="flex justify-between mt-4">
            <img
              src="image5.jpg"
              alt="Image 5"
              className="w-1/2 md:w-full object-cover"
            />
            <img
              src="image5.jpg"
              alt="Image 5"
              className="w-1/2 md:w-full object-cover"
            />
            <img
              src="image6.jpg"
              alt="Image 6"
              className="w-1/2 md:w-full object-cover"
            />
          </div>
        </div>

        {/* <!-- Right Column - Heading, Text, Button --> */}
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">Recent Events</h2>
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
