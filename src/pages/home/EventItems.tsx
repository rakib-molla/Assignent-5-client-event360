import Container from "@/layouts/Container"

function EventItems() {
  return (
    <Container>
        <div className="text-center flex flex-col justify-between items-center">
        <h1 className="text-5xl font-bold">Event Items</h1>
        <p className="max-w-[80ch] mt-10 mb-10 ">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
        </div>

        <div className="grid grid-cols-12 border  border-rose-500">
            <div className="border col-span-8">
                <div className="grid grid-cols-12">
                    <div className="border border-green-400 col-span-6 h-20">a</div>
                    <div className="border border-yellow-400 col-span-6 h-20">a</div>
                    <div className="border border-green-400 col-span-6 h-20">c</div>
                    <div className="border border-yellow-400 col-span-6 h-20">d</div>
                </div>
                
            </div>
            <div className="border col-span-4 h-[360px]">
                <div className="bg-gray-400 overflow-hidden p-5 ">
                    <img className="h-80 contrast-50 w-[100%] hover:contrast-100 transition-all hover:p-1 rounded-md" src="https://img.freepik.com/free-photo/view-3d-person-sleeping-clouds_23-2151113525.jpg?t=st=1706700661~exp=1706704261~hmac=dc1084ff02ac85a0d03049def5384119301485246236bc581f011755f2b872fd&w=740" alt="" />
                </div>
            </div>
            
        </div>

    </Container>
  )
}

export default EventItems