import Container from "@/layouts/Container"
import { Check } from "lucide-react"

function PricingPlanSection() {
  return (
    <Container>
        <div className="text-center flex flex-col justify-between items-center">
        <h1 className="text-5xl font-bold">Explore our pricing plans </h1>
        <p className="max-w-[80ch] mt-10 mb-10 ">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
        </div>

        <div className="grid  md:grid-cols-3 items-center justify-items-center gap-10 mb-20 px-10">
            <div className="bg-[#EFE8F1] border  rounded-lg p-4 w-[100%] ">
                <div className="flex items-center ">
                    <img className="h-60 w-[100%] rounded-md" src='https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040433.jpg' alt="" />
                </div>
                <div className="flex flex-col">
                <h1 className="font-bold text-xl py-1 ">Corporate Event</h1>
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
            <div className="bg-[#EFE8F1] border  rounded-lg p-4 w-[100%]">
                <div className="flex items-center ">
                    <img className="h-60 w-[100%] rounded-md" src='https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?w=1380&t=st=1706693750~exp=1706694350~hmac=ff414879f080aee191d9801ec05a677181f9ab99509ea7146a2ac889e726337a' alt="" />
                </div>
                <div className="flex flex-col">
                <h1 className="font-bold text-xl py-1 ">Corporate Event</h1>
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
            <div className="bg-[#B6DEDB] border   rounded-lg p-4 w-[100%]">
                <div className="">
                <h1 className="font-bold text-3xl  ">Wedding Event</h1>
                <p className="py-3">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies.Ut posuere felis arcu tellus tempus in in ultricies.</p>
                </div>
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

                    <button className="py-2 px-5 bg-blue-500 mt-2 text-white">Check it out</button>
                </div>
          </div>
        </div>
        
    </Container>
  )
}

export default PricingPlanSection