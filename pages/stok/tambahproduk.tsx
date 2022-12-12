import { LeftSidebar } from "../../components/LeftSidebar";
import { PageContent } from "../../components/PageContent";
import { PageContainer } from "../../components/Container";

export default function AddProduct() {
  return (
    <>
      <LeftSidebar />
      <PageContent>
        <h1 className="text-lg font-bold w-full">Stok Produk</h1>
        <h2 className="mt-4 font-bold">Tambah Produk</h2>
        <PageContainer>
          <form className="flex space-x-16">
            <div className="w-1/2">
              <h1 className="text-base font-bold mb-4"> Informasi Produk</h1>
              <div className="mb-3">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Foto Produk
                </label>
                <input type="file" className="text-sm"></input>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nama Produk
                </label>
                <input
                  type="text"
                  id="base-input"
                  className="bg-light border border-white text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                ></input>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Deskripsi Produk
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="bg-light border border-white text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                ></textarea>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Kategori
                </label>
                <select
                  id="countries"
                  className="bg-light border border-white text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option className="m-2">A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
              <h1 className="text-base font-bold my-4"> Stok dan Harga</h1>
              <div className="mb-3 flex space-x-6">
                  <div className="mb-3 w-1/2">
                      <label
                          htmlFor="base-input"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                          Stok Produk
                      </label>
                      <input
                          type="text"
                          id="base-input"
                          className="bg-light border border-white text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      ></input>
                  </div>
                  <div className="mb-3 w-1/2">
                      <label
                          htmlFor="base-input"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                          Harga
                      </label>
                      <input
                          type="text"
                          id="base-input"
                          className="bg-light border border-white text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      ></input>
                  </div>
              </div>
            </div>
              <div className="w-1/2">
                  <h1 className="text-base font-bold mb-4"> Informasi Pengiriman</h1>
                  <div className="mb-3">
                      <label
                          htmlFor="base-input"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                          Berat
                      </label>
                      <input
                          type="text"
                          id="base-input"
                          className="bg-light border border-white text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      ></input>
                  </div>
                  <div className="mb-3 flex space-x-6">
                      <div className="mb-3 w-1/3">
                          <label
                              htmlFor="base-input"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                              Panjang
                          </label>
                          <input
                              type="text"
                              id="base-input"
                              className="bg-light border border-white text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                          ></input>
                      </div>
                      <div className="mb-3 w-1/3">
                          <label
                              htmlFor="base-input"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                              Lebar
                          </label>
                          <input
                              type="text"
                              id="base-input"
                              className="bg-light border border-white text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                          ></input>
                      </div>
                      <div className="mb-3 w-1/3">
                          <label
                              htmlFor="base-input"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                              Tinggi
                          </label>
                          <input
                              type="text"
                              id="base-input"
                              className="bg-light border border-white text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                          ></input>
                      </div>
                  </div>
              </div>
          </form>
        </PageContainer>
      </PageContent>
    </>
  );
}
