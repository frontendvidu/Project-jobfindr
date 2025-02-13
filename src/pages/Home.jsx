import React from "react";
import Hero from "../Components/Hero/Hero";
import Sponsored from "../Components/Sponsored/Sponsored";
import Category from "../Components/Category/Category";
import Services from "../Components/Services/Services";
import Testimonials from "../Components/Testimonials/Testimonials";
import Blog from "../Components/Blog/Blog";
import Footer from "../Components/Footer/Footer";
import Jobs from "../Components/Jobs/Jobs";
function Home() {
  return (
    <>
      <Hero />
      <Sponsored />
      <Jobs />
      <Category />
      <Services />
      <Testimonials />
      <Blog />
      <Footer />
    </>
  );
}

export default Home;
