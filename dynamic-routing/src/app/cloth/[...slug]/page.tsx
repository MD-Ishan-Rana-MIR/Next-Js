import React from 'react'
import NotFounds from './not-found';

const ProductDetails = async ({ params }: { params : Promise<{slug : string[]}> } ) => {
    const { slug } = await params;

    if(slug.length>2){
        return <NotFounds></NotFounds>
    }
    
    return (
        <div>
            {
                slug.length > 0 && slug.map((item, i) => {
                    return (
                        <div key={i} >
                            <p>
                                {
                                    item
                                }
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductDetails