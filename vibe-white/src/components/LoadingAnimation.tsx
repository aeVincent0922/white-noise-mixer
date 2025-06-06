import { FC, useEffect } from "react";
import { createTimeline, stagger, Target } from "animejs";
import '../assets/style/Header.css'
interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation: FC<LoadingAnimationProps> = ({ onComplete }) => {
  const letters = ['V', 'I', 'B', 'E', 'W', 'H', 'I', 'T', 'E'];
  useEffect(() => {
    const tl = createTimeline({ defaults: { duration: 750 }, onComplete: () => onComplete?.() });
    // 向下淡入
    tl.add('.logo-letter', {
      opacity: [0, 1],
      y: '2rem',
      delay: stagger(100),
    }, 500)
      // 淡出非Logo字母
      .add('.minor-letter', {
        opacity: [1, 0],
        duration: 500
      }, '+=300')
      // 組合Logo字母
      .add('.main-letter-1, .main-letter-2', {
        x: (_el: Target, i: number) => i === 0 ? '3rem' : '-0.7rem',
        scale: 3,
      }, '+=100')
      // 放大淡出
      .add('.main-letter-2, .main-letter-1', {
        opacity: [1, 0],
        scale: 20,
        duration: 700
      }, '+=500')
  }, [onComplete]);

  return (
    <div className="loader-container fixed inset-0 flex flex-col items-center justify-center bg-bg-100 z-50 opacity-100">
      <h1 className="text-5xl font-bold text-white flex mt-2 gap-5">
        <div>
          {letters.slice(0, 4).map((char, index) => (
            <span key={index} className={'logo-letter opacity-0 black-ops text-olive-400 inline-block' + (index === 0 ? ' main-letter-1' : ' minor-letter')}>
              {char}
            </span>
          ))}
        </div>
        <div>
          {letters.slice(4).map((char, index) => (
            <span key={index} className={'logo-letter opacity-0 black-ops text-white inline-block' + (index === 0 ? ' main-letter-2' : ' minor-letter')}>
              {char}
            </span>
          ))}
        </div>
      </h1>
    </div>
  );
};
export default LoadingAnimation;
