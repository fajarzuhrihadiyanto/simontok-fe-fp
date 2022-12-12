export type most_sale_product = {
    product_name: string;
    categories?: category[];
    price: string;
    sale: number
}

export type category = {
    id:number,
    category_name:string,
}

export const most_sale_products: most_sale_product[] = [
    {
        product_name: "Maybelline Hypercurl Mascaraa",
        categories: [
            {
                id: 1,
                category_name: "eye"
            }
        ],
        price: "Rp100.000,00",
        sale: 15
    },
    {
        product_name: "Nasi Goreng Sosis",
        categories: [
            {
                id: 1,
                category_name: "food"
            },
            {
                id: 2,
                category_name: "rice"
            }
        ],
        price: "Rp100.000,00",
        sale: 12
    },
    {
        product_name: "Es Boba",
        price: "Rp100.000,00",
        sale: 13
    }
]
