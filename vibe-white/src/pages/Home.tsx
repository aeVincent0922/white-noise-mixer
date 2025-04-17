import type { FC } from "react";

const Home: FC = () => {

  return (
    <div>
      <div className="flex justify-center opacity-60 pointer-events-none">
        <div className="absolute flex w-full justify-center bottom-[35%] left-[20%] rotate-[45deg]">
          <h1 className="text-white absolute bottom-0 translate-x-[-20px] translate-y-[-20px] text-[15vw] leading-none font-extrabold whitespace-nowrap select-none">
            WHITE
          </h1>
          <h1 className="text-olive-200 text-[15vw] leading-none font-extrabold whitespace-nowrap select-none">
            WHITE
          </h1>
        </div>
        <div className="absolute flex w-full justify-center bottom-[20%] right-[7%] rotate-[45deg]">
          <h1 className="text-olive-100 absolute bottom-0 translate-x-[-20px] translate-y-[-20px] text-[15vw] leading-none font-extrabold whitespace-nowrap select-none">
            VIBE
          </h1>
          <h1 className="text-olive-200 text-[15vw] leading-none font-extrabold whitespace-nowrap select-none">
            VIBE
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
