import {LeftSidebar} from "../../components/LeftSidebar";
import {PageContent} from "../../components/PageContent";
import {Card} from "../../components/Card";
import { stocks } from "../../components/utils/Stock"
import { useRouter } from "next/router";
import React from "react";

export default function ViewStock () {

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
                <h2 className="mt-4 font-bold">Lihat Stok</h2>
                <div className="w-auto h-56 bg-secondary rounded-xl mt-6"></div>
                <div className="h-full w-11/12 mx-auto">
                    <div className="-mt-24 grid gap-6 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 ">
                        {stocks.map((obj, key)=>(
                            <Card obj={obj} key={key}/>
                        ))}
                    </div>
                </div>
            </PageContent>
        </>
    )
}
