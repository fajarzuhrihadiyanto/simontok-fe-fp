import Link from "next/link";
import Router from "next/router";
import { useForm } from "react-hook-form";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitForm = async (data: any) => {
    event?.preventDefault();
    const formData = new FormData();
    formData.append("name", data.nama);
    formData.append("email", data.email);
    formData.append("password", data.password);

    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "api/register_user",
      { method: "POST", body: formData }
    );

    if (res.status != 200) {
      //error here
    }

    Router.push("/login");
  };
  return (
    <>
      <div className="p-8 bg-white rounded-lg">
        <h1 className="text-2xl font-bold text-primary font-poppins">
          Buat Akun Baru
        </h1>
        <div className="flex justify-between mb-4">
          <p>Sudah memiliki akun?</p>
          <Link href="/login">
            <p className="text-primary">Masuk</p>
          </Link>
        </div>
        <form
          className="flex-col space-y-4"
          onSubmit={handleSubmit(submitForm)}
        >
          <div className="flex space-x-4">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-gray-50"
              placeholder="Nama"
              required
              {...register("nama")}
            />
          </div>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-md bg-gray-50"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            })}
          />
          <input
            type="password"
            className="w-full px-4 py-2 rounded-md bg-gray-50"
            placeholder="Kata Sandi"
            required
            {...register("password")}
          />
          <p className="mb-6 text-xs text-justify text-gray-400">
            Dengan mengklik Daftar, Anda menyetujui Ketentuan, Kebijakan Data
            dan Kebijakan Cookie kami. Anda akan menerima email dari Simontok
            dan dapat menolaknya kapan saja.
          </p>
          <button className="w-full px-4 py-2 rounded-md bg-primary hover:bg-forhoverprimary">
            <p className="text-center text-white">Daftar</p>
          </button>
        </form>
      </div>
    </>
  );
};
