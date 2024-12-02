import React from "react";
import Header from "../Header/Header";
import Sponsored from "../Sponsored/Sponsored";
import Specs from "../Specs/Specs";
import HeroSearch from "../HeroSearch/HeroSearch";
import styles from "./Hero.module.css";
import HeroTitle from "../HeroTitle/HeroTitle";
function Hero() {
  return (
    <section className={styles.hero}>
      <Header />
      <HeroTitle />
      <HeroSearch />
      <Specs />
    </section>
  );
}

export default Hero;
