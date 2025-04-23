import { FC, useEffect } from "react";
import { userTracksStore } from "../store";
import { createTimeline, stagger } from "animejs";

const Knob: FC = () => {
    const tracks = userTracksStore((state) => state.tracks);
    useEffect(() => {
        const tl = createTimeline({ defaults: { duration: 750 } });
        tl.add('.track-card', {
            opacity: [0, 1],
            y: '5rem',
            delay: stagger(200)
        })
    }, [])
    return (
        <div className="max-w-[80%] flex gap-10 justify-center content-start flex-wrap mx-auto">
            {tracks.map((track) => (
                <>
                    <div className="track-card opacity-0 w-72 bg-olive-100 shadow-xl rounded-2xl overflow-hidden hover:scale-[1.03] transition-transform">
                        <div className="pt-4 pb-2 px-4">
                            <div className="flex items-center gap-5">
                                <img src={track.img} alt="scene" className="w-[80px] h-[80px]" />
                                <h3 className="text-2xl font-bold ">
                                    {track.title}
                                </h3>
                            </div>
                        </div><div className="px-4 pb-4">
                            <p className="text-sm text-gray-700 mb-3">{track.describe}</p>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-[--color-olive-500] mb-1">
                                    音量控制
                                </label>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    defaultValue="70"
                                    className="w-full h-2 bg-[--color-olive-300] rounded-lg appearance-none cursor-pointer" />
                            </div>
                            <div className="flex gap-2">
                                <button className="bg-[--color-olive-300] hover:bg-[--color-olive-400] text-white font-semibold py-1 px-3 rounded-lg">
                                    啟用
                                </button>
                                <button className="border border-[--color-olive-300] text-[--color-olive-500] py-1 px-3 rounded-lg">
                                    預覽
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
}
export default Knob;