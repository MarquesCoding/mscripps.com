'use client'

import React from "react";
import Space from "@/app/components/Space";

export default function Home() {
    const [lightMode, setLightMode] = React.useState(localStorage.getItem('lightMode') === 'true');

    const toggleLightMode = () => {
        const updatedMode = !lightMode;
        setLightMode(updatedMode);
        localStorage.setItem('lightMode', updatedMode.toString());
    };

    return (
        <div className={`w-screen h-screen flex items-center justify-center overflow-scroll ${lightMode ? 'bg-cover bg-gradient-to-br from-blue-600 to-indigo-300 bg-opacity-0' : 'bg-cover bg-gray-800'}`}>
            <div className={`w-screen h-screen absolute ${lightMode ? 'opacity-100' : 'opacity-50'}`}>
                <Space/>
            </div>
            <div className="w-full h-auto absolute bottom-0 z-20 p-4 overflow-scroll flex justify-between items-center ">
                <div className={`bg-white text-xl rounded-full px-4 py-4 hover:bg-opacity-70 duration-500 cursor-pointer ease-in-out`} onClick={toggleLightMode}>
                    {lightMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>
                    )}
                </div>
                <div className={`${lightMode ? 'text-white' : 'text-gray-200 opacity-75 '} flex text-center items-center gap-4`}>
                    <div>
                        Powered by <span>Next.js</span>, <span>TailwindCSS</span>, <span>Vercel</span> and <span>Three.js</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="#ffffff" viewBox="0 0 448 512">
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                    </svg>
                </div>
            </div>
                <div className="flex items-center justify-center w-full h-screen overflow-scroll flex-col gap-3 absolute z-10">
                    <div className="text-white text-sm font-medium border px-3 py-1 rounded-md text-center border-white/20 hover:bg-white/20 duration-300 w-fit mb-8 fade-in-animation-delay-75">
                        (っ◔◡◔)っ · Hannah · 12/02/22
                    </div>
                    <p className="text-white text-7xl fade-in-animation-delay-20 font-semibold text-center">Marques Scripps</p>
                    <p className="text-gray-100 text-xl fade-in-animation-delay-20 text-center">Software Engineer from the UK</p>
                    <p className="text-white opacity-50">Where I've worked</p>
                    <div className="flex flex-row gap-2">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="hover:opacity-50 duration-300" height="2em" fill="#ffffff" viewBox="0 0 448 512">
                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                            </svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="hover:opacity-50 duration-300" height="2em" fill="#ffffff" viewBox="0 0 496 512">
                                <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/>
                            </svg>
                        </div>
                    </div>
                    <p className="text-white opacity-50">...</p>
                    <div className="w-96 h-auto rounded-lg border border-gray-50 border-opacity-50 ackdrop-blur-sm backdrop-opacity-50  bg-white/5 hover:bg-white/10 duration-300 p-4 text-white">
                        <div className="flex w-full flex-col">
                            <p className="font-light opacity-50">Ocado Technology -<span className="text-xs"> Hatfield UK</span></p>
                            <p className="text-xl font-medium">Software Engineer</p>
                            <p className="text-sm italic opacity-75">Jun 2022 - Present</p>
                        </div>
                    </div>
                    <div className="w-96 h-auto rounded-lg border border-gray-50 border-opacity-50 backdrop-blur-sm backdrop-opacity-50  bg-white/5 hover:bg-white/10 duration-300 p-4 text-white">
                        <div className="flex w-full flex-col">
                            <p className="font-light opacity-50">Ocado Technology -<span className="text-xs"> Hatfield UK</span></p>
                            <p className="text-xl font-medium">Software Engineer</p>
                            <p className="text-sm italic opacity-75">Jun 2022 - Present</p>
                        </div>
                    </div>
                    <p className="text-white opacity-50">···</p>
                </div>
        </div>
  )
}
