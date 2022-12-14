import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
export const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

  const [errorMessage, setErrorMessage] = useState("");
  const submitForm = async (data: any) => {
    event?.preventDefault();
    const formData = new FormData();
    formData.append("name", data.nama);
    formData.append("email", data.email);
    formData.append("password", data.password);

    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/register_user",
      { method: "POST", body: formData }
    );

    const datas = await res.json();

    if (res.status != 200) {
      setErrorMessage(`Error: ${datas.message}(${datas.code})`);
    }
    if (res.status == 200) {
      Router.push("/verifikasi?id=" + 1234);
    }
  };
  return (
    <>
      <div className="p-8 bg-white rounded-lg h-fit">
        <h1 className="text-2xl font-bold text-primary font-poppins">
          Buat Akun Baru
        </h1>
        <div className="flex justify-between mb-4">
          <p>Sudah memiliki akun?</p>
          <Link href="/login">
            <p className="text-primary">Masuk</p>
          </Link>
        </div>
        <h1 className="text-center">{errorMessage}</h1>
        <form
          className="flex-col space-y-4"
          onSubmit={handleSubmit(submitForm)}
        >
          <input
            type="text"
            className="w-full p-3 border border-white rounded-lg bg-light"
            placeholder="Nama"
            required
            {...register("nama")}
          />
          <input
            type="email"
            className="w-full p-3 border border-white rounded-lg bg-light"
            placeholder="Email"
            required
            {...register("email")}
          />
          <input
            type="password"
            className="w-full p-3 border border-white rounded-lg bg-light"
            placeholder="Kata Sandi"
            required
            {...register("password")}
          />
          <p className="mb-6 text-xs text-justify text-gray-400">
            Dengan mengklik Daftar, Anda menyetujui Ketentuan, Kebijakan Data
            dan Kebijakan Cookie kami. Anda akan menerima email dari Simontok
            dan dapat menolaknya kapan saja.
          </p>
          <button className="w-full p-3 border border-white rounded-md bg-primary hover:bg-forhoverprimary">
            <p className="text-center text-white">Daftar</p>
          </button>
        </form>
      </div>
    </>
  );
};
