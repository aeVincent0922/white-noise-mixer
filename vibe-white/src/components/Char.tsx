import { FC, useEffect, useState } from "react";
import '../assets/style/Char.css';

const Char: FC = () => {
  const [charIndex, setCharIndex] = useState(1);

  useEffect(() => {
    const randomIndex = Math.round(Math.random() * 4) + 1;
    setCharIndex(randomIndex);
  }, []);

  const charImage = `/images/char_${charIndex}.png`
  return (
    <div className=" h-screen z-50">
      <div className="relative h-7">
        <img
          src={charImage}
          alt="char"
          className="char-enter fixed -bottom-10 -left-5"
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

export default Char;
