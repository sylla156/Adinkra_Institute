import Topbar from "../components/Topbar";
import Header from "../components/Header";
import BackgroundColor from "../components/BackgroundColor";

const Hero = () => {
  return (
    <>
      <Topbar />
      <BackgroundColor>
        <Header />
      </BackgroundColor>
    </>
  );
};

export default Hero;
