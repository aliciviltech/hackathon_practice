'use client'
import { productsData } from '@/utils/productsData'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface ProductType {
    id: number,
    title: string,
    imageURL: string
}
const Page = () => {
    const [targetProduct, setTargetProduct] = useState<ProductType>();
    const param = useParams()
    const { id } = param;

    useEffect(() => {
        const renderProduct = () => {
            const selectedProduct = productsData.find((product) => {
                return product.id === Number(id);
            })
            setTargetProduct(selectedProduct)
        }
        renderProduct()
    }, [])
    return (
        <div>
            <h1>Detailed Page</h1>
            {/* {
                productsData.map((product, index) => {
                    return (
                        product.id === Number(id) &&
                        <div className="productDetails">
                            <div className="image"><img src={product.imageURL} alt="" /></div>
                            <div className="title">{product.title}</div>
                        </div>
                    )
                })
            } */}

            {
                targetProduct &&
                <div className="productDetails">
                    <div className="image"><img src={targetProduct.imageURL} alt="" /></div>
                    <div className="title">{targetProduct.title}</div>
                </div>
            }

        </div>
    )
}

export default Page