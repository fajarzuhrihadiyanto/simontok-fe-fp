import Image from "next/image";
import * as React from "react";
import {SocialMedia} from "./SocialMedia";

interface MainViewProps {
    children: React.ReactNode
}

export const MainView:React.FC<MainViewProps> = ({ children }) => {
    return (
        <>
            <div className="flex h-screen">
                <div className="flex items-center w-1/2 bg-white pl-40 pr-8 py-16">
                    <div className="w-full">
                        <a href="/">
                            <h1 className="text-8xl font-black font-roboto italic text-transparent bg-clip-text bg-gradient-to-b from-primary to-secondary">
                                Simontok
                            </h1>
                        </a>
                        <div className="mt-4">
                            <h2 className="text-xl font-semibold font-poppins">
                                Semua permasalahan di tokomu, selesaikan jadi satu!
                            </h2>
                        </div>

                        <Image className="mt-16"
                               src="/assets/assets-nobg.png"
                               alt="image-assets"
                               width="450"
                               height="391"
                        />
                        <SocialMedia />
                    </div>
                </div>
                <div className="flex items-center bg-light w-1/2 py-16 px-40 h-full">
                    <div className="bg-white w-full py-4 px-2 rounded-xl">
                        { children }
                    </div>
                </div>
            </div>
        </>
    )
}
