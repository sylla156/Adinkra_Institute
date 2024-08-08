import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Map from "./Map";

const Hero = () => {
  return (
    <div className="min-h-[100dvh]">
      <Topbar />
      <Header />
      <Map />
    </div>
  );
};

export default Hero;
