import { Sidebar } from "flowbite-react";

export const LeftSidebar = () => {
  return (
    <>
      <div className="fixed left-0 top-0 bottom-0 w-72 py-2 border-r-2 border-gray-100">
        <Sidebar>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/dashboard">Dashboard</Sidebar.Item>
              <Sidebar.Item href="/marketplace">Marketplace</Sidebar.Item>
              {/*<Sidebar.Collapse label="Marketplace" className="text-sm">*/}
              {/*  <Sidebar.Item href="#">Marketplace Anda</Sidebar.Item>*/}
              {/*  <Sidebar.Item href="#">Tambah Marketplace</Sidebar.Item>*/}
              {/*</Sidebar.Collapse>*/}
              <Sidebar.Collapse label="Stok Produk">
                <Sidebar.Item href="/stok">Lihat Stok</Sidebar.Item>
                <Sidebar.Item href="/stok/tambahproduk">Tambah Produk</Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Item href="#">Laporan</Sidebar.Item>
              <Sidebar.Item href="#">Statistik</Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  );
};
