import Hero from './Hero';
import Main from './Main';
import Request from './Request';
import Ready from './Ready';
import Special from './Special';
import About from './About';
import Brands from './Brands';
import Contacts from './Contacts';
import Footer from './Footer';
import Collaboration from './Collaboration';
import NotFound from './NotFound';
import UnderConstruction from './UnderConstruction';

export default function Home() {
  return (
    <div className="bg-neutral-900 text-white overflow-x-hidden">
      <Hero />
      <Main />
      <Request />
      <Ready />
      <Special />
      <Request />
      <About />
      <Brands />
      <Contacts />
      <Footer />
      {/* <Collaboration/> */}
      {/* <NotFound/> */}
    </div>
  );
}
