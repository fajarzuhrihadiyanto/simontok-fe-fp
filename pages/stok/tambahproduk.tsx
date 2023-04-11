import { LeftSidebar } from "../../components/LeftSidebar";
import { PageContent } from "../../components/PageContent";
import { PageContainer } from "../../components/Container";
import { useRouter } from "next/router";
import React from "react";

export default function AddProduct() {
  const router = useRouter()

  React.useEffect(() => {
    const token = localStorage && localStorage.getItem('token')
    if (!token) {
      router.push('/login')
    }
  }, [])
  return (
    <>
      <LeftSidebar />
      <PageContent>
        <h1 className="text-lg font-bold w-full">Stok Produk</h1>
        <h2 className="mt-4 font-bold">Tambah Produk</h2>
        <PageContainer>
          <form className="flex space-x-16">
            <div className="w-1/2">
              <h1 className="text-base font-bold mb-4">Informasi Produk</h1>
              <div className="mb-3">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-800 dark:text-white"
                >
                  Foto Produk
                </label>
                <input
                  type="file"
                  className="text-sm bg-light w-full rounded-lg"
                ></input>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-800 dark:text-white"
                >
                  Nama Produk
                </label>
                <input
                  type="text"
                  id="base-input"
                  className="bg-light border border-white text-gray-800 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                ></input>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-800 dark:text-white"
                >
                  Deskripsi Produk
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="bg-light border border-white text-gray-800 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                ></textarea>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-800 dark:text-white"
                >
                  Kategori
                </label>
                <select
                  id="countries"
                  className="bg-light border border-white text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option className="m-2">A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
              <h1 className="text-base font-bold my-4">Stok dan Harga</h1>
              <div className="mb-3 flex space-x-6">
                <div className="mb-3 w-1/2">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-800 dark:text-white"
                  >
                    Stok Produk
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    className="bg-light border border-white text-gray-800 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  ></input>
                </div>
                <div className="mb-3 w-1/2">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-800 dark:text-white"
                  >
                    Harga
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    className="bg-light border border-white text-gray-800 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  ></input>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <h1 className="text-base font-bold mb-4">Informasi Pengiriman</h1>
              <div className="mb-3">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-800 dark:text-white"
                >
                  Berat
                </label>
                <input
                  type="text"
                  id="base-input"
                  className="bg-light border border-white text-gray-800 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                ></input>
              </div>
              <div className="mb-3 flex space-x-6">
                <div className="mb-3 w-1/3">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-800 dark:text-white"
                  >
                    Panjang
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    className="bg-light border border-white text-gray-800 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  ></input>
                </div>
                <div className="mb-3 w-1/3">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-800 dark:text-white"
                  >
                    Lebar
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    className="bg-light border border-white text-gray-800 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  ></input>
                </div>
                <div className="mb-3 w-1/3">
                  <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-800 dark:text-white"
                  >
                    Tinggi
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    className="bg-light border border-white text-gray-800 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  ></input>
                </div>
              </div>
              <h1 className="text-base font-bold mb-4">Ongkos Kirim</h1>
              <div className="flex flex-col">
                <div className="mb-3 flex space-x-16 items-center w-full">
                  <div className="flex w-1/2 items-center">
                    <div className="mb-3 w-1/2">
                      <div className="flex space-x-4 items-center">
                        <input
                          type="checkbox"
                          className="p-3 rounded-md bg-light border-white "
                        />
                        <label
                          htmlFor="base-input"
                          className="block font-medium text-gray-800 dark:text-white"
                        >
                          Anteraja
                        </label>
                      </div>
                    </div>
                    <div className="mb-3 w-1/2">
                      <input
                        type="text"
                        id="base-input"
                        className="bg-light border border-white text-gray-800 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      ></input>
                    </div>
                  </div>
                  <div className="flex w-1/2 items-center">
                    <div className="mb-3 w-1/2">
                      <div className="flex space-x-4 items-center">
                        <input
                          type="checkbox"
                          className="p-3 rounded-md bg-light border-white"
                        />
                        <label
                          htmlFor="base-input"
                          className="block border-white font-medium text-gray-800 dark:text-white"
                        >
                          Sicepat
                        </label>
                      </div>
                    </div>
                    <div className="mb-3 w-1/2">
                      <input
                        type="text"
                        id="base-input"
                        className="bg-light border border-white text-gray-800 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="mb-3 flex space-x-16 items-center w-full">
                  <div className="flex w-1/2 items-center">
                    <div className="mb-3 w-1/2">
                      <div className="flex space-x-4 items-center">
                        <input
                          type="checkbox"
                          className="p-3 rounded-md bg-light border-white"
                        />
                        <label
                          htmlFor="base-input"
                          className="block border-white font-medium text-gray-800 dark:text-white"
                        >
                          JNT
                        </label>
                      </div>
                    </div>
                    <div className="mb-3 w-1/2">
                      <input
                        type="text"
                        id="base-input"
                        className="bg-light border border-white text-gray-800 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      ></input>
                    </div>
                  </div>
                  <div className="flex w-1/2 items-center">
                    <div className="mb-3 w-1/2">
                      <div className="flex space-x-4 items-center">
                        <input
                          type="checkbox"
                          className="p-3 rounded-md bg-light border-white"
                        />
                        <label
                          htmlFor="base-input"
                          className="block border-white font-medium text-gray-800 dark:text-white"
                        >
                          JNE
                        </label>
                      </div>
                    </div>
                    <div className="mb-3 w-1/2">
                      <input
                        type="text"
                        id="base-input"
                        className="bg-light border border-white text-gray-800 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <button className="bg-primary w-full p-2.5 text-center rounded-lg text-white mt-4 hover:bg-forhoverprimary">
                Tambahkan Produk
              </button>
            </div>
          </form>
        </PageContainer>
      </PageContent>
    </>
  );
}
