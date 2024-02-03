import ClientSection from "./ClientSection";
import EventItems from "./EventItems";
import GallerySection from "./GallerySection";
import OurServices from "./OurServices";
import RecentEvents from "./RecentEvents";

const Home = () => {
   return (
      <div>
         <ClientSection/>
         <OurServices/>
         <EventItems/>
         <RecentEvents/>
         <GallerySection/>
      </div>
   );
};

export default Home;