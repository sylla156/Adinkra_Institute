import BackgroundColor from "../components/BackgroundColor";
import About from "../containers/About";
import Contact from "../containers/Contact";
import Footer from "../containers/Footer";
import Hero from "../containers/Hero";
import Teams from "../containers/Teams";

const Home = () => {
  return (
    <BackgroundColor>
      <main className="px-3 sm:px-10 md:px-16 relative max-w-[1500px] mx-auto">
        <Hero />
        <About />
        <Teams />
        <Contact />
      </main>
      <Footer />
    </BackgroundColor>
  );
};

export default Home;
