import Container from "@/layouts/Container"

function EventItems() {
  return (
    <Container>
        <div className="text-center flex flex-col justify-between items-center">
        <h1 className="text-5xl font-bold">Event Items</h1>
        <p className="max-w-[80ch] mt-10 mb-10 ">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
        </div>

        <div className="grid grid-cols-12 ">
            <div className="border col-span-12 md:col-span-8">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 md:col-span-6  bg-[#F0F0F5] p-2 rounded-md">
                            <img className="h-[150px] cursor-pointer contrast-50 w-[100%] hover:contrast-100 transition-all object-cover rounded-md" src="https://img.freepik.com/free-photo/view-3d-person-sleeping-clouds_23-2151113525.jpg?t=st=1706700661~exp=1706704261~hmac=dc1084ff02ac85a0d03049def5384119301485246236bc581f011755f2b872fd&w=740" alt="" />
                        <h1 className="font-bold ps-6 flex py-2 items-center">Event Item - 1</h1>

                    </div>
                    <div className=" col-span-12 md:col-span-6  bg-[#F0F0F5] p-2 rounded-md">
                            <img className="h-[150px] cursor-pointer contrast-50 w-[100%] hover:contrast-100 transition-all object-cover rounded-md" src="https://img.freepik.com/free-photo/view-3d-person-sleeping-clouds_23-2151113525.jpg?t=st=1706700661~exp=1706704261~hmac=dc1084ff02ac85a0d03049def5384119301485246236bc581f011755f2b872fd&w=740" alt="" />
                        <h1 className="font-bold ps-6 flex py-2 items-center">Event Item - 4</h1>

                    </div>
                    <div className=" col-span-12 md:col-span-6 ">
                        <div className="flex items-center justify-center gap-2">
                            <div className="border  col-span-12 md:col-span-6  bg-[#F0F0F5] p-2 rounded-md">
                            <img className="h-[150px] cursor-pointer contrast-50 w-[100%] hover:contrast-100 transition-all object-cover rounded-md " src="https://img.freepik.com/free-photo/view-3d-person-sleeping-clouds_23-2151113525.jpg?t=st=1706700661~exp=1706704261~hmac=dc1084ff02ac85a0d03049def5384119301485246236bc581f011755f2b872fd&w=740" alt="" />
                        <h1 className="font-bold ps-6 flex py-2 items-center">Event Item - 2</h1>

                    </div>

                    <div className=" col-span-12 md:col-span-6  bg-[#F0F0F5] p-2 rounded-md">
                            <img className="h-[150px] cursor-pointer contrast-50 w-[100%] hover:contrast-100 transition-all object-cover rounded-md " src="https://img.freepik.com/free-photo/view-3d-person-sleeping-clouds_23-2151113525.jpg?t=st=1706700661~exp=1706704261~hmac=dc1084ff02ac85a0d03049def5384119301485246236bc581f011755f2b872fd&w=740" alt="" />
                        <h1 className="font-bold ps-6 flex py-2 items-center">Event Item - 3</h1>

                    </div>

                        </div>
                    </div>
                    <div className=" col-span-12 md:col-span-6  bg-[#F0F0F5] p-2 rounded-md">
                            <img className="h-[150px] cursor-pointer contrast-50 w-[100%] hover:contrast-100 transition-all object-cover rounded-md" src="https://img.freepik.com/free-photo/view-3d-person-sleeping-clouds_23-2151113525.jpg?t=st=1706700661~exp=1706704261~hmac=dc1084ff02ac85a0d03049def5384119301485246236bc581f011755f2b872fd&w=740" alt="" />
                        <h1 className="font-bold ps-6 flex py-2 items-center">Event Item - 5</h1>

                    </div>
                </div>
                
            </div>
            <div className=" col-span-12 w-96 md:col-span-4 bg-gray-400 rounded-md overflow-hidden">
                <div className="flex items-center justify-center overflow-hidden p-2">
                    <img className="h-[350px] cursor-pointer contrast-50 w-[90%] hover:contrast-100 transition-all object-cover rounded-md" src="https://img.freepik.com/free-photo/view-3d-person-sleeping-clouds_23-2151113525.jpg?t=st=1706700661~exp=1706704261~hmac=dc1084ff02ac85a0d03049def5384119301485246236bc581f011755f2b872fd&w=740" alt="" />
                </div>
                <h1 className="font-bold ps-6 flex py-2 items-center">Event Item - 6</h1>
            </div>
            
        </div>

    </Container>
  )
}

export default EventItems