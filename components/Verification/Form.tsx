export const VerificationForm = () => {
  return (
    <>
      <div className="flex flex-col space-y-4 p-8 bg-white rounded rounded-lg h-fit">
        <h1 className="text-2xl font-bold text-primary font-poppins">
          Verifikasi akun anda!
        </h1>
        <h2 className="text">
          Masukkan kode OTP yang telah dikirimkan pada email anda!
        </h2>
        <form className="flex-col space-y-4">
          <div className="flex space-x-4 w-full">
            <input type="text" className="p-3 bg-light rounded-lg w-14 text-lg text-center font-bold text-primary border border-white" required/>
            <input type="text" className="p-3 bg-light rounded-lg w-14 text-lg text-center font-bold text-primary border border-white" required/>
            <input type="text" className="p-3 bg-light rounded-lg w-14 text-lg text-center font-bold text-primary border border-white" required/>
            <input type="text" className="p-3 bg-light rounded-lg w-14 text-lg text-center font-bold text-primary border border-white" required/>
            <button className="bg-primary rounded-lg py-2 px-6 text-white border border-white w-full">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
