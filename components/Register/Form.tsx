export const RegisterForm = () => {
    return (
        <>
            <div className="bg-white rounded rounded-lg p-8">
                <h1 className="text-2xl font-bold text-primary font-poppins">Buat Akun Baru</h1>
                <div className="flex justify-between mb-4">
                    <p>Sudah memiliki akun?</p>
                    <a href="/login">
                        <p className="text-primary">Masuk</p>
                    </a>
                </div>
                <form className="flex-col space-y-4">
                <div className="flex space-x-4">
                    <input type="text" className="px-4 py-2 w-1/2 rounded-md bg-gray-50" placeholder="Nama Depan" required/>
                    <input type="text" className="px-4 py-2 w-1/2 rounded-md bg-gray-50" placeholder="Nama Belakang" required/>
                </div>
                    <input type="email" className="px-4 py-2 w-full rounded-md bg-gray-50" placeholder="Email" required/>
                    <input type="password" className="px-4 py-2 w-full rounded-md bg-gray-50" placeholder="Kata Sandi" required/>
                    <p className="mb-6 text-xs text-justify text-gray-400">Dengan mengklik Daftar, Anda menyetujui Ketentuan, Kebijakan Data dan Kebijakan
                        Cookie kami. Anda akan menerima email dari Simontok dan dapat menolaknya kapan saja.</p>
                    <button className="bg-primary px-4 py-2 w-full rounded-md hover:bg-forhoverprimary">
                        <p className="text-white text-center">Daftar</p>
                    </button>
                </form>
            </div>
        </>
    )
}
