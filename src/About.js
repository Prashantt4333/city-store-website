import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "City Store",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
      <Footer />
    </>
  );
};

export default About;
