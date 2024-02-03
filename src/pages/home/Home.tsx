import ClientSection from "./ClientSection";
import EventItems from "./EventItems";
import GallerySection from "./GallerySection";
import OurServices from "./OurServices";
import PricingPlanSection from "./PricingPlanSection";
import RecentEvents from "./RecentEvents";

const Home = () => {
   return (
      <div>
         <ClientSection/>
         <OurServices/>
         <EventItems/>
         <PricingPlanSection/>
         <GallerySection/>
         <RecentEvents/>
      </div>
   );
};

export default Home;