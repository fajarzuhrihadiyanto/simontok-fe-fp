import Link from "next/link";
import { useState } from "react";
import { BACKEND_URL } from "../../config";
import { useRouter } from "next/router";

export const RegisterForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const router = useRouter()

    const onSubmit = (e: any) => {
        e.preventDefault()

        const data = JSON.stringify({
            email,
            password,
            name: `${firstName} ${lastName}`
        })

        fetch(`${BACKEND_URL}/api/register_user`, {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            return response.json()
        }).then(data => {
            if (data.success) {
                console.log(data)
                router.push('/login')
            } else {
                throw Error('not success')
            }
        })
      .catch(e => {
          console.error(e)
      })
    }

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
                    <input type="text" className="w-full p-3 rounded-lg sm:w-1/2 bg-light border border-white" onChange={e => {setFirstName(e.target.value)}} placeholder="Nama Depan" required/>
                    <input type="text" className="w-full p-3 rounded-lg sm:w-1/2 bg-light border border-white" onChange={e => {setLastName(e.target.value)}} placeholder="Nama Belakang" required/>
                </div>
                    <input type="email" className="w-full p-3 rounded-lg border border-white bg-light" placeholder="Email" onChange={e => {setEmail(e.target.value)}} required/>
                    <input type="password" className="w-full p-3 rounded-lg border border-white bg-light" placeholder="Kata Sandi" onChange={e => {setPassword(e.target.value)}} required/>
                    <p className="mb-6 text-xs text-justify text-gray-400">Dengan mengklik Daftar, Anda menyetujui Ketentuan, Kebijakan Data dan Kebijakan
                        Cookie kami. Anda akan menerima email dari Simontok dan dapat menolaknya kapan saja.</p>
                    <button className="w-full p-3 rounded-md bg-primary border border-white hover:bg-forhoverprimary" onClick={onSubmit}>
                        <p className="text-center text-white">Daftar</p>
                    </button>
                </form>
            </div>
        </>
    )
}
