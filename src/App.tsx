import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyTunamsam } from './components/WhyTunamsam';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
// import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  // const handleStartProject = () => {
  //   const element = document.getElementById('cta');
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  // const handleViewWork = () => {
  //   const element = document.getElementById('portfolio');
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyTunamsam />
      <Process />
      <Portfolio />
      {/* <Pricing /> */}
      <CTA />
      <Footer />
    </div>
  );
}
