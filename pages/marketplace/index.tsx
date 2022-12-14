import {LeftSidebar} from "../../components/LeftSidebar";
import {stocks} from "../../components/utils/Stock";
import {Card} from "../../components/Card";
import {PageContent} from "../../components/PageContent";
import {PageContainer} from "../../components/Container";
import Image from "next/image";
import {most_sale_products} from "../../components/utils/Product";

export default function ViewMarketplace () {
    return (
        <>
            <LeftSidebar />
            <PageContent>
                <h1 className="text-lg font-bold w-full">Stok Produk</h1>
                <h2 className="mt-4 font-bold">Daftar Marketplace</h2>
                <div className="flex space-x-8 mt-4">
                    <div className="p-4 bg-white flex space-x-4 rounded-lg items-center w-60 justify-center">
                        <Image src="/assets/tokped.png" alt="tokopedia" width="80" height="69"></Image>
                        <h1 className="font-bold text-xl">Tokopedia</h1>
                    </div>
                    <div className="p-4 bg-white flex space-x-4 rounded-lg items-center w-60 justify-center">
                        <Image src="/assets/shopee.png" alt="tokopedia" width="53" height="76"></Image>
                        <h1 className="font-bold text-xl">Shopee</h1>
                    </div>
                </div>
                <PageContainer>
                    <h1 className="text-center text-xl font-bold">Detail</h1>
                    <div className="border border-b-gray-200 mt-4"></div>
                    <div className="flex space-x-24 mt-4">
                        <div className="w-1/2">
                            <h1 className="font-bold text-lg">Produk Terlaris Bulan Ini</h1>
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
                        <div className="w-1/2">
                            <h1 className="font-bold text-lg">Total Pendapatan</h1>
                            <div className="flex space-x-8 items-center justify-between">
                                <table className="mt-4 w-1/2">
                                    <tbody className="flex flex-col space-y-2.5">
                                    <tr>
                                        <th className="w-48 text-left">Pendapatan Kotor</th>
                                        <td className="w-4 text-left">:</td>
                                        <td className="w-max"><span>Rp</span></td>
                                    </tr>
                                    <tr>
                                        <th className="w-48 text-left">Pajak</th>
                                        <td className="w-4 text-left">:</td>
                                        <td className="w-max"><span>Rp</span></td>
                                    </tr>
                                    <tr>
                                        <th className="w-48 text-left">Biaya Layanan</th>
                                        <td className="w-4 text-left">:</td>
                                        <td className="w-max"><span>Rp</span></td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className="w-1/3 bg-light flex flex-col h-fit p-4 rounded-lg">
                                    <h1 className="text-primary font-bold text-xl text-center">Pendapatan Bersih</h1>
                                    <h1 className="text-secondary font-bold text-xl text-center">...</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-b-gray-200 mt-4"></div>
                    <h1 className="font-bold text-lg text-center mt-4">Transaksi Terbaru</h1>
                    <table className="w-full">
                        <tbody>
                        <tr className="text-left">
                            <th className="w-1/12">ID Transaksi</th>
                            <th className="w-1/6">Tanggal Transaksi</th>
                            <th className="w-1/3">Produk</th>
                            <th className="w-1/12">Pengiriman</th>
                            <th className="w-1/12">Keterangan</th>
                            <th className="w-1/6">Harga</th>
                        </tr>
                        <tr className="m-2">
                            <td>1001</td>
                            <td>2022-12-14 10:40:15</td>
                            <td>Es Kepal Milo</td>
                            <td>Anteraja</td>
                            <td>Dikemas</td>
                            <td><span>Rp</span>172.500,00</td>
                        </tr>
                        </tbody>
                    </table>
                </PageContainer>
            </PageContent>
        </>
    )
}
