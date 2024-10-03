import BackgroundColor from "../components/BackgroundColor";
import Topbar from "../components/Topbar";
import About from "../containers/About";
import Contact from "../containers/Contact";
import Footer from "../containers/Footer";
import Hero from "../containers/Hero";
import Teams from "../containers/Teams";
import Achievers from "./Achievers";

const Home = () => {
  return (
    <BackgroundColor>
      <main className="px-3 sm:px-10 md:px-16 relative max-w-[1500px] mx-auto">
        {window.location.pathname === "/" ? (
          <>
            <Hero />
            <About />
            <Teams />
            {/* <Press /> */}
            <Contact />
          </>
        ) : (
          <>
            <Topbar />
            <Achievers />
          </>
        )}
      </main>
      <Footer />
    </BackgroundColor>
  );
};

export default Home;
