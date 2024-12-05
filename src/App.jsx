import React from "react";
import Hero from "./Components/Hero/Hero";
import Sponsored from "./Components/Sponsored/Sponsored";
import Category from "./Components/Category/Category";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";
import Blog from "./Components/Blog/Blog";
function App() {
  return (
    <>
      <Hero />
      <Sponsored />
      <Category />
      <Services />
      <Testimonials />
      <Blog />
    </>
  );
}

export default App;
