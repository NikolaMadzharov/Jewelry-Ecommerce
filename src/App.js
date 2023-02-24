import logo from './logo.svg';
import './App.css';
import { Header } from "./Components/IndexPage/Header";
import { SectionSlider } from './Components/IndexPage/SectionSlider';
import { ItemSelection } from './Components/IndexPage/ItemSelection';
import { AboutSection } from './Components/IndexPage/AboutSection';
import { PriceSection } from './Components/IndexPage/PriceSection';
import { SpecialRingSenction } from './Components/IndexPage/SpecialRingSection';
import { ClientSection } from './Components/IndexPage/ClientSection';
import { ContactUs } from './Components/IndexPage/ContactUs';
import { Footer } from './Components/IndexPage/Footer';

function App() {
  return (


    <div>
      <div className="hero_area">

        <Header />

        <SectionSlider />


      </div>

      <div className="item_section layout_padding2">
        < ItemSelection />
      </div>

      <section className="about_section layout_padding2-top layout_padding-bottom">
        <AboutSection />
      </section>

      <section className="price_section layout_padding">
        <PriceSection />
      </section>

      <SpecialRingSenction />


      <section className="client_section">
        <ClientSection />
      </section>

      <ContactUs />

      <section className="info_section ">
        <Footer />
      </section>

      <section className="container-fluid footer_section">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By Nikola Madzhaarov
        </p>
      </section>


    </div>


  );
}

export default App;
