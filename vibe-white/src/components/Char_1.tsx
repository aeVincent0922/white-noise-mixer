import { FC } from "react";

const Char_1: FC = () => {
  return (
    <div className="relative h-screen">
      <div className="sour-gummy bubble_1 relative top-1/3 left-1/7 h-[100px] w-fit rounded-full border-2 bg-white p-5 text-center text-lg">
        <p>Let's make some</p>
        <p>good vibes.</p>
      </div>
      <div>
        <img
          src="../public/images/char_1.png"
          alt=""
          className="char_1-enter fixed -bottom-10 -left-5"
        />
      </div>
    </div>
    // <div className="fixed bottom-0 left-10 flex items-end space-x-4">
    //   {/* 對話氣泡 */}
    //   <div className="speech-bubble relative max-w-xs rounded-xl bg-white p-4 text-sm text-gray-800 shadow-lg">
    //     Let's make some good vibes.
    //   </div>

    //   {/* 飛行員圖片 */}
    //   <img
    //     src="../public/images/char_1.png"
    //     alt="Pilot"
    //     className="char_1-enter h-auto w-32"
    //   />
    // </div>
  );
};

export default Char_1;
