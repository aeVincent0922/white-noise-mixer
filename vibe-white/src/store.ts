import { create } from 'zustand';

// export type TracksInfo = {
//     title: string,
//     describe: string,
//     img: string
// }

// 音軌
export const userTracksStore = create(() => ({
    tracks: [
        {
            title: 'Star Night',
            describe: '蟲鳴、微風、樹林、鳥叫、動物',
            img: '/images/scene_1.png'
        },
        {
            title: 'Glacier',
            describe: '寒風、冰川、荒涼',
            img: '/images/scene_2.png'
        },
        {
            title: 'City',
            describe: '城市、施工、地鐵、汽鳴聲',
            img: '/images/scene_3.png'
        },
        {
            title: 'Cavern',
            describe: '水滴、回音、氣流、窸窣',
            img: '/images/scene_4.png'
        },
        {
            title: 'Forest',
            describe: '草叢、動物、蟲鳴、水流、樹葉、微風',
            img: 'images/scene_5.png'
        },
        {
            title: 'Scenic Byway',
            describe: '收音機、引擎、風切',
            img: 'images/scene_6.png'
        },
        {
            title: 'Wilderness',
            describe: '腳步、碎石、灌木摩擦、昆蟲鳴叫、砂礫、微風',
            img: 'images/scene_7.png'
        },
        {
            title: 'Dune',
            describe: '風沙、沙漠、枯木',
            img: 'images/scene_8.png'
        }
    ]
}))