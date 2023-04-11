import {LeftSidebar} from "../../components/LeftSidebar";
import {PageContent} from "../../components/PageContent";
import {Card} from "../../components/Card";
import { stocks } from "../../components/utils/Stock"
import React from 'react'
import { BACKEND_URL } from "../../config";
import { useRouter } from "next/router";

export default function ViewStock () {
    const [shops, setShops] = React.useState([])

    React.useEffect(() => {
      const getShop = async () => {
          const token = localStorage.getItem('token')

          const response = await fetch(`${BACKEND_URL}/api/shop`, {
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
              },
          })
          const data = await response.json()
          console.log(data)
          setShops(data.data)
      }

      getShop()
    }, [])


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
                <h1 className="text-lg font-bold w-full">Toko</h1>
                <h2 className="mt-4 font-bold">Lihat Toko</h2>
                <div className="w-auto h-56 bg-secondary rounded-xl mt-6"></div>
                <div className="h-full w-11/12 mx-auto">
                    <div className="-mt-24 grid gap-6 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 ">
                        {shops.map((shop: any, key)=>(
                          <div key={key} className="w-full flex flex-col space-y-2 bg-slight p-4 rounded-lg">
                            <div className="bg-gray-400 h-32">Buat Image</div>
                            <h1 className="truncate text-sm"> {shop.name}</h1>
                          </div>
                        ))}
                    </div>
                </div>
            </PageContent>
        </>
    )
}
