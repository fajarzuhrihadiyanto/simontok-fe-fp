import Link from "next/link";

export const RegisterForm = () => {
    return (
        <>
            <div className="p-8 bg-white rounded rounded-lg h-fit">
                <h1 className="text-2xl font-bold text-primary font-poppins">Buat Akun Baru</h1>
                <div className="flex justify-between mb-4">
                    <p>Sudah memiliki akun?</p>
                    <Link href="/login">
                        <p className="text-primary">Masuk</p>
                    </Link>
                </div>
                <form className="flex-col space-y-4">
                <div className="flex flex-col space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row">
                    <input type="text" className="w-full p-3 rounded-lg sm:w-1/2 bg-light border border-white" placeholder="Nama Depan" required/>
                    <input type="text" className="w-full p-3 rounded-lg sm:w-1/2 bg-light border border-white" placeholder="Nama Belakang" required/>
                </div>
                    <input type="email" className="w-full p-3 rounded-lg border border-white bg-light" placeholder="Email" required/>
                    <input type="password" className="w-full p-3 rounded-lg border border-white bg-light" placeholder="Kata Sandi" required/>
                    <p className="mb-6 text-xs text-justify text-gray-400">Dengan mengklik Daftar, Anda menyetujui Ketentuan, Kebijakan Data dan Kebijakan
                        Cookie kami. Anda akan menerima email dari Simontok dan dapat menolaknya kapan saja.</p>
                    <button className="w-full p-3 rounded-md bg-primary hover:bg-forhoverprimary">
                        <p className="text-center text-white">Daftar</p>
                    </button>
                </form>
            </div>
        </>
    )
}
