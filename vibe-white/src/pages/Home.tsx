import type { FC } from "react";
import "../assets/style/Home.css";
import Knob from "../components/Knob";

const Home: FC = () => {
  return (
    <>
      <div className="card-container flex justify-center">
        <Knob />
      </div>
    </>
  );
};

export default Home;
