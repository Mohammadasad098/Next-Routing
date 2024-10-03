import Link from 'next/link'
import React from 'react'

const Person = () => {
  return (
    <>
        <div>Person</div>
        <button className="btn btn-error"><Link href={'/'}>Back</Link></button>
    </>

  )
}

export default Person