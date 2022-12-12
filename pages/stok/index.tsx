import {LeftSidebar} from "../../components/LeftSidebar";
import {PageContent} from "../../components/PageContent";
import {Card} from "../../components/Card";
import { stocks } from "../../components/utils/Stock"

export default function ViewStock () {
    return (
        <>
            <LeftSidebar />
            <PageContent>
                <h1 className="text-lg font-bold w-full">Stok Produk</h1>
                <h2 className="mt-4 font-bold">Lihat Stok</h2>
                <div className="w-auto h-56 bg-secondary rounded-xl mt-6"></div>
                <div className="h-full w-11/12 mx-auto">
                    <div className="-mt-24 grid gap-6 grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
                        {stocks.map((obj, key)=>(
                            <Card obj={obj} key={key}/>
                        ))}
                    </div>
                </div>
            </PageContent>
        </>
    )
}
