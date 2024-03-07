import DealsOffers from "../DealsOffers";
import Banner from "./Banner";
import Count from "./Count";
import Featured from "./Featured";
import Hero from "./Hero";
import PopularAirlines from "./PopularAirlines";
import Travel from "./Travel";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <DealsOffers></DealsOffers>
      <PopularAirlines></PopularAirlines>
      <Count></Count>
      <Travel></Travel>
      <Hero></Hero>
    </div>
  );
};

export default Home;
