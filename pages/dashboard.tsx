import { LeftSidebar } from "../components/LeftSidebar";
import { Content } from "../components/Dashboard/Content";
import { RightSidebar } from "../components/RightSidebar";
import {most_sale_products} from "../components/utils/Product";

export default function Dashboard() {
  return (
    <>
      <LeftSidebar />
      <Content>
        <h1 className="text-lg font-bold w-full">Dashboard</h1>
        <h2 className="font-bold">Penjualan Harian</h2>
        <div className="flex flex-col space-y-6">
          <div className="grid grid-cols-3 gap-12">
            <button className="flex flex-col justify-start bg-primary p-4 rounded-lg">
              <p className="text-gray-200">DIKEMAS</p>
              <p className="text-white">100</p>
            </button>
            <button className="flex flex-col justify-start bg-primary p-4 rounded-lg">
              <p className="text-gray-200">DIKIRIM</p>
              <p className="text-white">100</p>
            </button>
            <button className="flex flex-col justify-start bg-primary p-4 rounded-lg">
              <p className="text-gray-200">DITERIMA</p>
              <p className="text-white">100</p>
            </button>
          </div>
          <div className="flex space-x-8 ">
            <div className="w-3/5 bg-white rounded-lg p-4">
              <h1 className="text-center">Produk Terlaris Bulan Ini</h1>
              <ul className="flex flex-col space-y-4 mt-4 ">
                {most_sale_products.map(({product_name, categories, price, sale}, key) => (
                    <li className="flex justify-between" key={key}>
                      <div className="flex space-x-4">
                        <div className="bg-gray-700 w-16 h-16 text-white">
                          buat gambar
                        </div>
                        <div>
                          <h1>{product_name}</h1>
                          <h2 className="text-sm">Kategori: </h2>
                          <h3>{price}</h3>
                        </div>
                      </div>
                      <div className="flex items-center w-16 h-16 font-bold text-center text-lg">
                        {sale} Terjual
                      </div>
                    </li>
                ))}
              </ul>
            </div>
            <div className="w-2/5 bg-white rounded-lg p-4">
              <h1 className="text-center">Marketplace</h1>
              <div className="flex flex-col space-y-2 mt-4">
                <button className="bg-green-400 w-full text-center h-12">
                  Tokopedia
                </button>
                <button className="bg-orange-400 w-full text-center h-12">
                  Shopee
                </button>
              </div>
            </div>
          </div>
          <div className="flex px-6 py-4 w-96 rounded-lg bg-light justify-between">
            <h1 className="text-lg text-primary">Pendapatan Kotor: </h1>
            <h1 className="flex items-center font-bold text-xl text-secondary">
              Rp37.685.000,00
            </h1>
          </div>
        </div>
      </Content>
      <RightSidebar />
    </>
  );
}
