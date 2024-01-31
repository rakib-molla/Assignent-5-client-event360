import Container from "@/layouts/Container";
import { ArrowRight, EuroIcon, PlusIcon, WholeWord } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className=" bg-gradient-to-r from-[#545540] to-[#4e4b6b]">
      <Container> 
      <footer>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 justify-center gap-10 md:justify-items-center pt-20 pb-10">
          <div className="">
            <h1 className="text-3xl font-bold text-white text-left md:me-0 ">Event <span className="text-[#3461FF]">360</span></h1>
          </div>
          <div className="text-white">
            <h1 className="font-bold">Product</h1>
            <p>Pricing</p>
            <p>Overview</p>
            <p>Browse</p>
            <p>Accessibility</p>
          </div>
          <div className="text-white">
            <h1 className="font-bold">Solutions</h1>
            <p>Brainstorming</p>
            <p>ideation</p>
            <p>wireframing</p>
            <p>Research</p>
          </div>
          <div className="text-white">
            <h1 className="font-bold">Resources</h1>
            <p>Help Center</p>
            <p>Blog</p>
            <p>Tutorials</p>
            <p>FAQs</p>
          </div>
          <div className="text-white">
            <h1 className="font-bold">Support</h1>
            <p>Contact Us</p>
            <p>Developers</p>
            <p>Documentation</p>
            <p>Integrations</p>
          </div>
          <div className="text-white">
            <h1 className="font-bold">Company</h1>
            <p>About</p>
            <p>Press</p>
            <p>Events</p>
            <Link to={'/'} className="flex items-start gap-2">
              Request Demo{" "}
              <span>
                <ArrowRight />
              </span>
            </Link>
          </div>

         
        </div>
        <div>
          <h1 className="border border-dashed border-gray-300 my-5 px-10 w-[95%] mx-auto "></h1>
        </div>


        <div className=" relative flex items-start justify-between gap-5 flex-wrap p-10 ">
          <div className="text-white">@2023.All Right Reserved</div>
          <div className="flex gap-5 items-center flex-wrap text-white">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Contact</span>
            <span className="flex gap-2 items-center"><WholeWord/> EN</span>
            <span className="flex gap-2 items-center"><EuroIcon/> EUR</span>
            <span className="flex gap-2 items-center border border-rose-50 rounded-full"><PlusIcon/></span>
          
          {/* <div className="absolute  size-96  bg-red-400 opacity-10 end-0 -top-72"></div> */}

          </div>

        </div>
      </footer>
        </Container>
    </section>
  );
};

export default Footer;
