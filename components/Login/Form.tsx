import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const [errorMessage, setErrorMessage] = useState("");

  const submitForm = async (data: any) => {
    event?.preventDefault();
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/login_user",
      { method: "POST", body: formData }
    );
    const datas = await res.json();
    if (res.status != 200) {
      setErrorMessage(`Error: ${datas.message}(${datas.code})`);
    }
    if (res.status == 200) {
      sessionStorage.setItem("smnt-token", data.token);
      Router.push("/dashboard");
    }
  };
  return (
    <>
      <div className="p-8 bg-white rounded-lg h-fit">
        <h1 className="text-2xl font-bold text-primary font-poppins">Masuk</h1>
        <div className="flex justify-between mb-4">
          <p>Belum memiliki akun?</p>
          <Link href="/register">
            <p className="text-primary">Daftar</p>
          </Link>
        </div>
        <h1 className="text-center">{errorMessage}</h1>
        <form
          className="flex-col space-y-4"
          onSubmit={handleSubmit(submitForm)}
        >
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
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="p-2 rounded-md bg-gray-50" />
              <p className="text-gray-500">Ingat saya</p>
            </div>
            <Link href="#" className="text-primary">
              Lupa Password?
            </Link>
          </div>
          <button className="w-full px-4 py-2 border border-white rounded-md bg-primary hover:bg-forhoverprimary">
            <p className="text-center text-white">Masuk</p>
          </button>
        </form>
      </div>
    </>
  );
};
