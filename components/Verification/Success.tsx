import Link from "next/link";

export const VerificationSuccess = () => {
  return (
    <>
      <div className="flex flex-col space-y-4 p-8 bg-white rounded rounded-lg h-fit">
          <h1 className="text-2xl font-bold text-primary font-poppins">
              Verifikasi berhasil!
          </h1>
          <h2 className="text">
              Silakan <span><Link href="/login" className="text-primary">masuk</Link></span> ke akun untuk melanjutkan.
          </h2>
      </div>
    </>
  );
};
