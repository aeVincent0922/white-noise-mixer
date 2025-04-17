import "./index.css";
import Home from "./pages/Home.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import Char_1 from "./components/Char_1.tsx";

function App() {
  return (
    <>
      <Header />
      <div>
        <Home />
      </div>
      <Char_1 />
      <Footer />
    </>
  );
}

export default App;
