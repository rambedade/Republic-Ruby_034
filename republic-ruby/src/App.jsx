import { useState } from "react";
import "./App.css";
import Navbar from "./assets/component/LandingPage/Navbar";
import { AllRoutes } from "./assets/routes/AllRoutes";
import Hero from "./assets/component/LandingPage/Hero";

/**initialize firebase */
//import { initializeApp } from "firebase/app";
//import { config } from "./assets/config/config";
//initializeApp(config.firebaseConfig);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App;
