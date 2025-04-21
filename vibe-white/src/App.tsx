import "./index.css";
import { useEffect, useState } from "react";
import Home from "./pages/Home.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import Char_1 from "./components/Char_1.tsx";
import LoadingAnimation from "./components/LoadingAnimation.tsx";

function App() {
  // LoadingAnimation
  const [isLoading, setIsLoading] = useState(true);

  // 這裡可以改成資源真正載入後觸發
  // useEffect(() => {
  //   const timer = setTimeout(() => setIsLoading(false), 9000);
  //   return () => clearTimeout(timer);
  // }, []);

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
          <Char_1 />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
