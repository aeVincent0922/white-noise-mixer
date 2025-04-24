import type { FC } from "react";
import "../assets/style/Home.css";
import Tracks from "../components/Tracks";

const Home: FC = () => {
  return (
    <>
      <div>
        <Tracks />
      </div>
    </>
  );
};

export default Home;
