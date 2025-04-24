import { FC, useEffect } from "react";
import { userTracksStore } from "../store";
import { createTimeline, stagger } from "animejs";

const Tracks: FC = () => {
    const tracks = userTracksStore((state) => state.tracks);
    useEffect(() => {
        const tl = createTimeline({ defaults: { duration: 750 } });
        tl.add('.track-container-title', {
            opacity: [0, 1],
        })
        .add('.track', {
            opacity: 1,
            y: '1rem',
            delay: stagger(100),
        }, '+=200')
    }, [])
    return (
        <div>
            <h1 className="track-container-title opacity-0 relative max-w-[48%] mx-auto text-start text-3xl text-olive-200 py-3 inter font-bold">Scene</h1>
            <div className="track-container max-w-[60%] flex gap-10 justify-center content-start flex-wrap mx-auto">
                {tracks.map((track) => (
                    <>
                        <div className="inter relative -top-[1rem] track opacity-0 w-72 bg-olive-100 shadow-2xl/50 rounded-2xl overflow-hidden hover:scale-[1.05] hover:bg-olive-200 transition-transform ease-in-out duration-400">
                            <div className="pt-4 pb-2 px-4">
                                <div className="flex items-center gap-5">
                                    <img src={track.img} alt="scene" className="w-[80px] h-[80px]" />
                                    <h3 className="text-2xl font-bold text-plum-200">
                                        {track.title}
                                    </h3>
                                </div>
                            </div>
                            <div className="px-4 pb-4">
                                <p className="text-sm text-olive-400 mb-3">{track.describe}</p>
                                {/* <div className="mb-4">
                                    <label className="block text-sm font-medium text-[--color-olive-500] mb-1">
                                        音量控制
                                    </label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        defaultValue="0"
                                        className="w-full h-2 bg-[--color-olive-300] rounded-lg appearance-none cursor-pointer" />
                                </div> */}
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}
export default Tracks;