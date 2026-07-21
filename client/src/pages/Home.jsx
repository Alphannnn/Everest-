import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedStore from '../components/FeaturedStore';
import OfferCards from '../components/OffersCards';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedStore />
      <OfferCards />
    </>
  );
}

export default Home;
