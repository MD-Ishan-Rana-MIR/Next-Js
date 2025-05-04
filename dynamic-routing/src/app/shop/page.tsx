import Link from 'next/link'
import React from 'react'
type productType = {
    id: number;
    productName: string;
    categoryName: string
}
const ShopPage: React.FC = () => {
    const categoryData: productType[] = [
        { "id": 1, "productName": "iPhone 14 Pro", "categoryName": "Electronics" },
        { "id": 2, "productName": "LG Refrigerator", "categoryName": "HomeAppliances" },
        { "id": 3, "productName": "Adidas Sneakers", "categoryName": "Fashion" },
        { "id": 4, "productName": "The Hobbit", "categoryName": "Books" },
        { "id": 5, "productName": "Maybelline Lipstick", "categoryName": "Beauty&PersonalCare" },
        { "id": 6, "productName": "Yoga Mat", "categoryName": "Sports & Outdoors" },
        { "id": 7, "productName": "Hot Wheels Car Set", "categoryName": "Toys&Games" },
        { "id": 8, "productName": "Bosch Car Battery", "categoryName": "Automotive" },
        { "id": 9, "productName": "Oreo Cookies", "categoryName": "Grocery" },
        { "id": 10, "productName": "Purina Dog Food", "categoryName": "PetSupplies" },
        { "id": 11, "productName": "Centrum Multivitamin", "categoryName": "Health&Wellness" },
        { "id": 12, "productName": "Wooden Dining Table", "categoryName": "Furniture" },
        { "id": 13, "productName": "HP Laser Printer", "categoryName": "OfficeSupplies" },
        { "id": 14, "productName": "Pampers Diapers", "categoryName": "BabyProducts" },
        { "id": 15, "productName": "Gold Pendant", "categoryName": "Jewelry" },
        { "id": 16, "productName": "Garden Hose Pipe", "categoryName": "Garden&Tools" },
        { "id": 17, "productName": "Yamaha Acoustic Guitar", "categoryName": "Music&Instruments" },
        { "id": 18, "productName": "Acrylic Paint Set", "categoryName": "Art&Craft" },
        { "id": 19, "productName": "Clarks Leather Boots", "categoryName": "Footwear" },
        { "id": 20, "productName": "PlayStation 5", "categoryName": "Gaming" }
    ];


    return (
        <div>
            <div className=' grid grid-cols-4 gap-5  ' >
                {
                    categoryData.map((item, i) => {
                        return (
                            <div key={i} className=' border border-red-700 p-4 shadow-md rounded-xl  transition-all hover:translate-x-2 '  >
                                <Link href={`/shop/${item.categoryName}`}>
                                    <h1 className=' text-center h-auto ' >Product Name : {item.productName}</h1>
                                    <h1 className=' text-center h-auto ' >Category Name : {item.categoryName}</h1>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShopPage