import About from "../components/About";
import Benifits from "../components/Benifits";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Navabar from "../components/Navbar";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navabar />
      <Hero />
      <About />
      <Features />
      <Benifits />
      <FAQ/>
      <Footer/>


    </>
  );
}

export default Home;
