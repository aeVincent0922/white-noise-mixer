import { FC, useEffect } from "react";
import { createTimeline, stagger } from "animejs";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: FC<LoadingAnimationProps> = ({ onComplete }) => {
  const letters = ['V', 'I', 'B', 'E', 'W', 'H', 'I', 'T', 'E'];
  useEffect(() => {
    const tl = createTimeline({ defaults: { duration: 750 }, onComplete: () => onComplete?.() });
    tl.add('.logo-letter', {
      opacity: [0, 1],
      y: '2rem',
      delay: stagger(200),
    }, 1000)
      .add('.logo-letter', {
        opacity: [1, 0],
        scale: 20,
        ease: 'inSine',
        delay: stagger(50),
      }, '+=1000')
  }, [onComplete]);

  return (
    <div className="loader-container fixed inset-0 flex flex-col items-center justify-center bg-bg-100 z-50 opacity-100">
      <h1 className="text-5xl font-bold text-white flex mt-2 gap-5">
        <div>
          {letters.slice(0, 4).map((char, index) => (
            <span key={index} className="logo-letter opacity-0 black-ops text-olive-400 inline-block">
              {char}
            </span>
          ))}
        </div>
        <div>
          {letters.slice(4).map((char, index) => (
            <span key={index} className="logo-letter opacity-0 black-ops text-white inline-block">
              {char}
            </span>
          ))}
        </div>
      </h1>
    </div>
  );
};
export default LoadingAnimation;
