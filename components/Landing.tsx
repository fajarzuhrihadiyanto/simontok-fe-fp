import { Navbar } from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import {SocialMedia} from "./SocialMedia";

export const Landing = () => {
  return (
    <>
      <div className="py-8">
        <div className="relative">
          <Image
            className="fixed -top-12 -right-8"
            src="/assets/Vector-2.png"
            alt="bg"
            width="888"
            height="881"
          />
        </div>
        <div className="absolute w-full px-32">
          <Navbar />
          <div className="flex justify-between">
            <div className="mt-32 w-2/5">
              <h1 className="text-6xl font-black font-roboto italic text-transparent bg-clip-text bg-gradient-to-b from-primary to-secondary">
                Sistem Monitoring Stok
              </h1>
              <div className="mt-8 w-3/5">
                <h2 className="text-xl font-semibold font-poppins">
                  Semua permasalahan di tokomu, selesaikan jadi satu!
                </h2>
              </div>
              <Image
                src="/assets/line.png"
                alt="line"
                width="590"
                height="51"
              />
              <div className="mt-4 flex space-x-4">
                <Link href="/register">
                  <button className="bg-gradient-to-b from-primary px-12 py-2 h-full to-secondary rounded-full">
                    <p className="text-white hover:text-gray-200 font-medium">
                      Bergabung dengan Kami
                    </p>
                  </button>
                </Link>

                <Link href="/login">
                  <button className="bg-gradient-to-b from-primary to-light rounded-full w-18 h-12 p-1 ">
                    <div className="w-full px-8 py-2 bg-white rounded-full hover:bg-light">
                      <p>Masuk</p>
                    </div>
                  </button>
                </Link>
              </div>
              <SocialMedia />
            </div>
            <Image
                src="/assets/image.png"
                alt="image-assets"
                width="691"
                height="665"
            />
          </div>

        </div>
      </div>
    </>
  );
};
