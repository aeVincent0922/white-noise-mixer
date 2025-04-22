import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="flex w-full z-10 fade-down">
      <div className="relative w-full">
        <img src="/images/logo.svg" alt="" className="absolute top-2 left-2" />
        <ul className="black-ops mt-2 flex justify-center text-5xl font-bold pointer-events-none">
          <div className="title-typing flex gap-5">
            <p className="text-olive-400">DEFINE YOUR OWN</p>
            <p className="text-white">VIBE</p>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
