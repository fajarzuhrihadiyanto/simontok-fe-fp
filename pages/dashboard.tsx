import { LeftSidebar } from "../components/LeftSidebar";
import { Content } from "../components/Dashboard/Content";
import { RightSidebar } from "../components/RightSidebar";
import {most_sale_products} from "../components/utils/Product";
import { useEffect } from "react";
import Router from "next/router";

const user = async() => {
    useEffect(()=>{
        const token = sessionStorage?.getItem("token")
        if (token == "" || token == undefined) {
            Router.push("/login")
        }
        let url = process.env.NEXT_PUBLIC_API_URL || ""
        let bearer = "Bearer " + token
        console.log(bearer)
        fetch(url+"/user", {
            // mode: 'no-cors',
            method: 'GET',
            credentials: 'include',
            headers: new Headers({
                'Authorization':bearer,
                'Content-Type': 'application/json',
                'Host': 'api.chelsh.site',
                'Origin':''
            })
        }).then(res => {
          return res
        }).then(data => {
            console.log(data)
        })
    },[])    
}

export default function Dashboard() {
    user()
  return (
    <>
      <LeftSidebar />
      <Content>
        <h1 className="w-full text-lg font-bold">Dashboard</h1>
        <h2 className="font-bold">Penjualan Harian</h2>
        <div className="flex flex-col space-y-6">
          <div className="grid grid-cols-3 gap-12">
            <button className="flex flex-col justify-start p-4 rounded-lg bg-primary">
              <p className="text-gray-200">DIKEMAS</p>
              <p className="text-white">100</p>
            </button>
            <button className="flex flex-col justify-start p-4 rounded-lg bg-primary">
              <p className="text-gray-200">DIKIRIM</p>
              <p className="text-white">100</p>
            </button>
            <button className="flex flex-col justify-start p-4 rounded-lg bg-primary">
              <p className="text-gray-200">DITERIMA</p>
              <p className="text-white">100</p>
            </button>
          </div>
          <div className="flex space-x-8 ">
            <div className="w-3/5 p-4 bg-white rounded-lg">
              <h1 className="text-center">Produk Terlaris Bulan Ini</h1>
              <ul className="flex flex-col mt-4 space-y-4 ">
                {most_sale_products.map(({product_name, categories, price, sale}, key) => (
                    <li className="flex justify-between" key={key}>
                      <div className="flex space-x-4">
                        <div className="w-16 h-16 text-white bg-gray-700">
                          buat gambar
                        </div>
                        <div>
                          <h1>{product_name}</h1>
                          <h2 className="text-sm">Kategori: </h2>
                          <h3>{price}</h3>
                        </div>
                      </div>
                      <div className="flex items-center w-16 h-16 text-lg font-bold text-center">
                        {sale} Terjual
                      </div>
                    </li>
                ))}
              </ul>
            </div>
            <div className="w-2/5 p-4 bg-white rounded-lg">
              <h1 className="text-center">Marketplace</h1>
              <div className="flex flex-col mt-4 space-y-2">
                <button className="w-full h-12 text-center bg-green-400">
                  Tokopedia
                </button>
                <button className="w-full h-12 text-center bg-orange-400">
                  Shopee
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between px-6 py-4 rounded-lg w-96 bg-light">
            <h1 className="text-lg text-primary">Pendapatan Kotor: </h1>
            <h1 className="flex items-center text-xl font-bold text-secondary">
              Rp37.685.000,00
            </h1>
          </div>
        </div>
      </Content>
      <RightSidebar />
    </>
  );
}
