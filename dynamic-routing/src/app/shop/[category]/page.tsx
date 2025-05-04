import Link from 'next/link'
import React from 'react'

interface categoryInterface {
  params: {
    category: string
  }
}


const CategoryPage = ({ params }: categoryInterface) => {
  const product = [
    { "id": 1, "productName": "iPhone 14 Pro", "categoryName": "Electronics" },

  ]
  const { category } = params;
  return (
    <div>
      <h1>category name {category}</h1>
      <div className=' grid grid-cols-4 gap-5  ' >
        {
          product.map((item, i) => {
            return (
              <div key={i} className=' border border-red-700 p-4 shadow-md rounded-xl  transition-all hover:translate-x-2 '  >
                <Link href={`/shop/${item.categoryName}/${item.productName}`}>
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

export default CategoryPage