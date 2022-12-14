import { useRouter } from "next/router";
import Router from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const VerificationForm = () => {
  const { register, handleSubmit } = useForm();

  const [errorMessage, setErrorMessage] = useState("");
  const { query } = useRouter();

  const submitForm = async (data: any) => {
    event?.preventDefault();
    const formData = new FormData();
    formData.append("user_id", query.id);
    formData.append("otp", data.otp);
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/verify_otp",
      { method: "POST", body: formData }
    );
    const datas = await res.json();
    if (res.status != 200) {
      setErrorMessage(`Error: ${datas.message}(${datas.code})`);
    }
    if (res.status == 200) {
      Router.push("/verifikasi/success");
    }
  };
  return (
    <>
      <div className="flex flex-col p-8 space-y-4 bg-white rounded-lg h-fit">
        <h1 className="text-2xl font-bold text-primary font-poppins">
          Verifikasi akun anda!
        </h1>
        <h2 className="text">
          Masukkan kode OTP yang telah dikirimkan pada email anda!
        </h2>
        <h1 className={"text-center" + errorMessage == "" ? "hidden" : "block"}>
          {errorMessage}
        </h1>
        <form
          className="flex-col space-y-4"
          onSubmit={handleSubmit(submitForm)}
        >
          <div className="flex w-full space-x-4">
            <input
              type="text"
              className="w-full p-3 text-lg font-bold text-center border border-white rounded-lg bg-light text-primary"
              required
              maxLength={4}
              {...register("otp")}
            />
            <button className="px-6 py-2 text-white border border-white rounded-lg w-fit bg-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
