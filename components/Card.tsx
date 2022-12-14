// @ts-ignore
export const Card = ({ obj }) => {
    console.log(obj)
    return (
        <>
            <div className="w-full flex flex-col space-y-2 bg-slight p-4 rounded-lg">
                <div className="bg-gray-400 h-32">Buat Image</div>
                <h1 className="truncate text-sm"> {obj.product_name}</h1>
                <div className="flex space-x-4">
                    <div className="rounded-lg bg-white p-2 text-xs w-1/2">Stok: {obj.stock}</div>
                    <button className="rounded-lg bg-secondary p-2 text-xs w-1/2 text-white">Detail</button>
                </div>
            </div>
        </>
    )
}
