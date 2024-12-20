import { productsData } from '@/utils/productsData'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='cardsContainer  flex flex-wrap gap-5 justify-center'>

    {
      productsData.map((product)=>{
        return(
          <Link href={`/pages/${product.id}`} key={product.id}> <div className="productCard w-[300px] h-[400px] " >
            <div className="image h-[300px]"><img className='w-[100%] h-[100%] object-cover' src={product.imageURL}/></div>
            <div className="title">{product.title}</div>
          </div>
          </Link>
        )
      })
    }

    </div>
  )
}

export default Page