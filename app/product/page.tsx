import Link from 'next/link'
import React from 'react'

const Product = () => {
  return (
    <>
    <div>Product</div>
    <button className="btn btn-error"><Link href={'/'}>Back</Link></button>
    </>
  )
}

export default Product