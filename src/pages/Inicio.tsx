
import CardsPrincipales from '../components/CardPrincipales';
import FotoSlider from '../components/FotoSlider';
import HeroSection from '../components/HeroSection';
import SeccionKPIs from '../components/KPI';
// import AboutUs from './AboutUs';

export default function Inicio() {
  return (
    <>
    <HeroSection />
    
    <CardsPrincipales/>
    <FotoSlider/>
    <SeccionKPIs/>
   {/*  <AboutUs/> */}
    </>

  );
}