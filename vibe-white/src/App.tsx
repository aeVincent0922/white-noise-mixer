import "./index.css";
import { useEffect, useState } from "react";
import Home from "./pages/Home.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import Char from "./components/Char.tsx";
import LoadingAnimation from "./components/LoadingAnimation.tsx";

function App() {
  // LoadingAnimation
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      console.log("Loading Completed");
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <LoadingAnimation onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Header />
          <Home />
          <Char />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
