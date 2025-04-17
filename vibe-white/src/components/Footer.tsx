import type { FC } from "react";
import { useEffect, useState } from "react";

const Footer: FC = () => {
  // 控制向上滾動
  const [isVisible, setIsVisible] = useState(false);
  // 顯示滾動距離
  const [scrollDistance, setscrollDistance] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      // scrollY為視窗滾動距離
      const scrolled = window.scrollY;
      // 將scrolled更新scrollDistance
      setscrollDistance(scrolled);
      // 如果滾動距離>30，更新isVisible浮現Footer組件
      setIsVisible(scrolled > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-bg-200 shadow-style-1 fixed right-0 bottom-0 left-0 z-50 mx-3 h-14 rounded-t-2xl p-1 transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "translate-y-full"} `}
    >
      <div className="flex justify-center w-full">
        <span className="mx-auto">{ scrollDistance }</span>
      </div>
    </div>
  );
};

export default Footer;
