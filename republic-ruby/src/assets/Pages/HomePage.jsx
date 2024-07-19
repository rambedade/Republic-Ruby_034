import React from "react";
import Hero from "../component/LandingPage/Hero";

import Testimonials from "../component/LandingPage/Testimonials";
import Footer from "../component/LandingPage/Footer";
import Features from "../component/LandingPage/Features";
import { GoogleAI } from "../component/LandingPage/GoogleAi";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
      <GoogleAI />
    </>
  );
};
