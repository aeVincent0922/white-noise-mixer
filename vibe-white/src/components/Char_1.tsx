import { FC } from "react";
import '../assets/style/Char_1.css';

const Char_1: FC = () => {
  return (
    <div className=" h-screen z-50">
      <div className="relative h-7">
        <img
          src="/images/char_1.png"
          alt="pilot"
          className="char_1-enter fixed -bottom-10 -left-5"
        />
        <div className="flip-card fixed bottom-70 left-50 h-[100px] w-[300px]">
          <div className="flip-inner flipped">
            <div className="flip-front flex items-center justify-center bg-transparent"></div>
            <div className="flip-back">
              <img
                src="/images/speech_bubble_1.gif"
                alt="speech_bubble_1"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Char_1;
