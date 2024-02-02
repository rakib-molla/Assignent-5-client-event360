import ClientSection from "./ClientSection";
import EventItems from "./EventItems";
import OurServices from "./OurServices";
import RecentEvents from "./RecentEvents";

const Home = () => {
   return (
      <div>
         <ClientSection/>
         <OurServices/>
         <EventItems/>
         <RecentEvents/>
      </div>
   );
};

export default Home;