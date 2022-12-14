import Image from "next/image";
import * as React from "react";
import {SocialMedia} from "./SocialMedia";

interface MainViewProps {
    children: React.ReactNode
}

export const MainView:React.FC<MainViewProps> = ({ children }) => {
    return (
        <div>
            <div className="flex flex-col items-center h-screen md:flex-row">
                <div className="justify-center hidden w-1/2 px-8 py-16 bg-white md:flex">
                    <div className="w-fit">
                        <a href="/">
                            <h1 className="italic font-black text-transparent md:text-6xl xl:text-8xl font-roboto bg-clip-text bg-gradient-to-b from-primary to-secondary">
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
                <div className="flex items-center justify-center w-full h-full md:w-1/2 2xl:py-16 2xl:px-40 bg-light">
                    <div className="flex flex-col items-center justify-center w-full px-2 py-4 bg-white md:w-fit rounded-xl">
                        <a href="/">
                            <h1 className="text-4xl italic font-black text-transparent md:hidden xl:text-8xl font-roboto bg-clip-text bg-gradient-to-b from-primary to-secondary">
                                Simontok
                            </h1>
                        </a>
                        { children }
                    </div>
                </div>
            </div>
        </div>
    )
}
