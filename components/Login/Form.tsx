import Link from "next/link";

export const LoginForm = () => {
  return (
    <>
      <div className="bg-white rounded rounded-lg p-8 h-fit">
        <h1 className="text-2xl font-bold text-primary font-poppins">Masuk</h1>
        <div className="flex justify-between mb-4">
          <p>Belum memiliki akun?</p>
          <Link href="/register">
            <p className="text-primary">Daftar</p>
          </Link>
        </div>
        <form className="flex-col space-y-4">
          <input
            type="email"
            className="px-4 py-2 w-full rounded-md bg-gray-50"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="px-4 py-2 w-full rounded-md bg-gray-50"
            placeholder="Kata Sandi"
            required
          />
          <div className="flex items-center justify-between">
            <div className="flex space-x-2 items-center">
              <input type="checkbox" className="p-2 rounded-md bg-gray-50" />
              <p className="text-gray-500">Ingat saya</p>
            </div>
            <Link href="#" className="text-primary">
              Lupa Password?
            </Link>
          </div>
          <button className="bg-primary px-4 py-2 w-full rounded-md hover:bg-forhoverprimary">
            <p className="text-white text-center">Masuk</p>
          </button>
        </form>
      </div>
    </>
  );
};
