import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import AboutUsIntro from "../Components/AboutUsIntro/AboutUsIntro";
import How from "../Components/How/How";
import Featured from "../Components/Featured/Featured";
import FAQ from "../Components/FAQ/FAQ";
import Us from "../Components/Us/Us";
import Blog from "../Components/Blog/Blog";
function AboutUs() {
  return (
    <>
      <Header />
      <AboutUsIntro />
      <How />
      <Featured />
      <FAQ />
      <Us />
      <Blog />
      <Footer />
    </>
  );
}

export default AboutUs;
