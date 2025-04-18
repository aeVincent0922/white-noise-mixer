import type { FC } from "react";
import { animate } from "animejs";
import "../assets/style/Home.css";

const Home: FC = () => {
  animate("#s1", { x: "52%" });

  return (
    <div className="pointer-events-none opacity-30 -z-50" id="sentence-container">
      <div className="sentence relative -left-[52%] p-1" id="s1">
        <p className="text-slide text-olive-200 text-8xl font-bold">
          Define your own vibe
        </p>
        <p className="text-slide text-olive-400 absolute bottom-3 left-3 text-8xl font-bold">
          Define your own vibe
        </p>
      </div>
      <div className="sentence relative p-1" id="s2">
        <p className="text-slide text-olive-300 text-8xl font-bold">
          定義專屬於你的vibe
        </p>
        <p className="text-slide text-olive-500 absolute top-3 left-3 text-8xl font-bold">
          定義專屬於你的vibe
        </p>
      </div>
      <div className="sentence relative p-1" id="s3">
        <p className="text-slide text-olive-100 text-8xl font-bold">
          自分だけの雰囲気を創ろう
        </p>
        <p className="text-slide text-olive-300 absolute top-3 -left-3 text-8xl font-bold">
          自分だけの雰囲気を創ろう
        </p>
      </div>
      <div className="sentence relative p-1" id="s4">
        <p className="text-slide text-olive-200 text-8xl font-bold">
          Crée ta propre ambiance
        </p>
        <p className="text-slide text-olive-500 absolute bottom-3 left-3 text-8xl font-bold">
          Crée ta propre ambiance
        </p>
      </div>
      <div className="sentence relative p-1" id="s5">
        <p className="text-slide text-olive-100 text-8xl font-bold">
          너만의 분위기를 정의해봐
        </p>
        <p className="text-slide text-olive-400 absolute bottom-3 left-3 text-8xl font-bold">
          너만의 분위기를 정의해봐
        </p>
      </div>
      <div className="sentence relative p-1" id="s6">
        <p className="text-slide text-olive-200 text-8xl font-bold">
          Crea la tua vibrazione
        </p>
        <p className="text-slide text-olive-300 absolute bottom-3 left-3 text-8xl font-bold">
          Crea la tua vibrazione
        </p>
      </div>
      <div className="sentence relative p-1" id="s7">
        <p className="text-slide text-olive-200 text-8xl font-bold">
          Definiere deinen eigenen Vibe
        </p>
        <p className="text-slide text-olive-500 absolute bottom-3 left-3 text-8xl font-bold">
          Definiere deinen eigenen Vibe
        </p>
      </div>
    </div>
  );
};

export default Home;
