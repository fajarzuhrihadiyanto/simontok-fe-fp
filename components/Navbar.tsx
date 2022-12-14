import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between">
        <Link href="/">
          <Image
            src="/assets/logo-simontok.png"
            alt="logo"
            width="198"
            height="75"
            priority
          />
        </Link>
        <div className="flex space-x-8 items-center text-gray-800">
          <Link href="/" className="font-bold hover:text-primary">
            Beranda
          </Link>
          <Link href="#" className="font-bold hover:text-primary">
            Tentang Kami
          </Link>
          <Link href="#" className="font-bold hover:text-primary">
            Paket dan Harga
          </Link>
          <Link href="#" className="font-bold hover:text-primary">
            Hubungi Kami
          </Link>
          <Link href="/register">
            <button className="bg-gradient-to-b from-primary to-light py-4 px-12 rounded-full">
              <p className="text-white font-bold hover:text-gray-200">Daftar</p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
