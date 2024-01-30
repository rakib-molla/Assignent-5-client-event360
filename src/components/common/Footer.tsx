import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <section>
      <footer className="bg-gray-500 p-5">
        <div className="grid grid-cols-6 ">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Event <span className="text-[#3461FF]">360</span></h1>
          </div>
          <div>
            <h1 className="font-bold">Product</h1>
            <p>Pricing</p>
            <p>Overview</p>
            <p>Browse</p>
            <p>Accessibility</p>
          </div>
          <div>
            <h1>Solutions</h1>
            <p>Brainstorming</p>
            <p>ideation</p>
            <p>wireframing</p>
            <p>Research</p>
          </div>
          <div>
            <h1>Resources</h1>
            <p>Help Center</p>
            <p>Blog</p>
            <p>Tutorials</p>
            <p>FAQs</p>
          </div>
          <div>
            <h1>Support</h1>
            <p>Contact Us</p>
            <p>Developers</p>
            <p>Documentation</p>
            <p>Integrations</p>
          </div>
          <div>
            <h1>Company</h1>
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
      </footer>
    </section>
  );
};

export default Footer;
