import Navigator from './Navigation/Navigation'
import Home from "./sections/Home/Home";
import About from './sections/About/About';
import Services from './sections/Services/Services';
import ServiceFooder from './sections/Services/ServiceFooder';
import Portfolio from './sections/Portfolio/Portfolio';
import PortfolioCarousel from "./sections/Portfolio/PortfolioCarousel";
import Team from './sections/Team/Team';
import Contact from './sections/Contact/Contact';
import Fooder from './Fooder/Fooder';

function App() {
  return (
    <div>
      <Navigator/> 
      <Home/>
      <About/>
      <Services/>
      <ServiceFooder/>
      <Portfolio/>
      <PortfolioCarousel/>
      <Team/>
      <Contact/>
      <Fooder/>
    </div>
  );
}

export default App;
