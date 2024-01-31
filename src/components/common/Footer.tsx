import { ArrowRight, EuroIcon, PlusIcon, WholeWord } from "lucide-react";

const Footer = () => {
  return (
    <section>
      <footer className="bg-gray-500 p-5">
        <div className="grid lg:grid-cols-6 md:grid-cols-3 justify-center gap-10 justify-items-center">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-white">Event <span className="text-[#3461FF]">360</span></h1>
          </div>
          <div>
            <h1 className="font-bold">Product</h1>
            <p>Pricing</p>
            <p>Overview</p>
            <p>Browse</p>
            <p>Accessibility</p>
          </div>
          <div>
            <h1 className="font-bold">Solutions</h1>
            <p>Brainstorming</p>
            <p>ideation</p>
            <p>wireframing</p>
            <p>Research</p>
          </div>
          <div>
            <h1 className="font-bold">Resources</h1>
            <p>Help Center</p>
            <p>Blog</p>
            <p>Tutorials</p>
            <p>FAQs</p>
          </div>
          <div>
            <h1 className="font-bold">Support</h1>
            <p>Contact Us</p>
            <p>Developers</p>
            <p>Documentation</p>
            <p>Integrations</p>
          </div>
          <div>
            <h1 className="font-bold">Company</h1>
            <p>About</p>
            <p>Press</p>
            <p>Events</p>
            <p className="flex items-start gap-2">
              Request Demo{" "}
              <span>
                <ArrowRight />
              </span>
            </p>
          </div>
        </div>
        <div>
          <h1 className="border border-red-500 my-5"></h1>
        </div>
        <div className="flex items-start justify-between gap-5 border flex-wrap">
          <div>@2023.All Right Reserved</div>
          <div className="flex gap-5 items-center flex-wrap">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Contact</span>
            <span className="flex gap-2 items-center"><WholeWord/> EN</span>
            <span className="flex gap-2 items-center"><EuroIcon/> EUR</span>
            <span className="flex gap-2 items-center border border-rose-50 rounded-full"><PlusIcon/></span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
