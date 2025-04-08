import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z0" />
      <WhatsNew />
    </div>
    <div className="relative">
      <World />
      <Insights />
      <div className="gradient-06 z0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
