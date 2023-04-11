import { LeftSidebar } from "../../components/LeftSidebar";
import { PageContent } from "../../components/PageContent";
import { stocks } from "../../components/utils/Stock";
import { Card } from "../../components/Card";
import { PageContainer } from "../../components/Container";
import { useRouter } from "next/router";
import React from "react";

export default function DetailStock() {

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
        <h2 className="mt-4 font-bold">Detail Stok: [Item] </h2>
        <PageContainer>
          <div className="flex w-full">
            <div className="w-1/2">
              <table >
                <tbody className="flex flex-col space-y-4">
                  <tr>
                    <th className="w-48 text-left">Nama Produk</th>
                    <td className="w-4 text-left">:</td>
                    <td className="w-max">Test Item</td>
                  </tr>
                  <tr>
                    <th className="w-48 text-left">Deskripsi Produk</th>
                    <td className="w-4 text-left">:</td>
                    <td className="w-max">Test Item</td>
                  </tr>
                  <tr>
                    <th className="w-48 text-left">Kategori</th>
                    <td className="w-4 text-left">:</td>
                    <td className="w-max">Test Item</td>
                  </tr>
                  <tr>
                    <th className="w-48 text-left">Stok Produk</th>
                    <td className="w-4 text-left">:</td>
                    <td className="w-max">Test Item</td>
                  </tr>
                  <tr>
                    <th className="w-48 text-left">Harga</th>
                    <td className="w-4 text-left">:</td>
                    <td className="w-max">Test Item</td>
                  </tr>
                  <tr>
                    <th className="w-48 text-left">Pengiriman</th>
                  </tr>
                  <tr className="pl-8">
                    <th className="text-left w-40">Berat</th>
                    <td className="w-4 text-left">:</td>
                    <td className="w-max">
                      [] <span>gram</span>{" "}
                    </td>
                  </tr>
                  <tr className="pl-8">
                    <th className="text-left w-40">Dimensi</th>
                    <td className="w-4 text-left">:</td>
                    <td className="">
                      <div className="flex space-x-8">
                        <div className="flex space-x-2">
                          <p className="font-bold">Panjang</p>
                          <p>:</p>
                          <p>
                            [] <span>cm</span>{" "}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <p className="font-bold">Lebar</p>
                          <p>:</p>
                          <p>
                            [] <span>cm</span>{" "}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <p className="font-bold">Tinggi</p>
                          <p>:</p>
                          <p>
                            [] <span>cm</span>{" "}
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-1/2">FOR PHOTO</div>
          </div>
        </PageContainer>
      </PageContent>
    </>
  );
}
