import { useState, useEffect } from "react";
import "./loader.css";
import logo from "/public/loader.png"; 

const Loader = () => {
  const [loadingText, setLoadingText] = useState("Cargando");
  const [dots, setDots] = useState(0);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((dots) => (dots + 1) % 4);
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      setLoadingText("Carga completa");
      setIsLoadingComplete(true);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`loading ${isLoadingComplete ? "loading-hidden" : ""}`}>
      <div className="loader">
      </div>
        <img id="imgLoader" src={logo} alt="Loader" />
      
      <h2 id="textLoading">{loadingText + ".".repeat(dots)}</h2>
    </div>
  );
};

export default Loader;
