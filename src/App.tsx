import BackgroundColor from "./components/BackgroundColor";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import Hero from "./containers/Hero";


const App = () => {
  return (
    <BackgroundColor>
      <main className="mx-3 sm:mx-16 relative">
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </BackgroundColor>
  );
};

export default App;
