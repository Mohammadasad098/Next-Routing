import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-center gap-4 my-8'>
    <button className="btn btn-outline"><Link href={'/'}>Home</Link></button>
    <button className="btn btn-outline btn-primary"><Link href={'about'}>About</Link></button>
    <button className="btn btn-outline btn-secondary"><Link href={'contact'}>Contact</Link></button>
    <button className="btn btn-outline btn-accent"><Link href={'services'}>Services</Link></button>
    <button className="btn btn-outline btn-warning"><Link href={'product'}>product</Link></button>
    <button className="btn btn-outline btn-success"><Link href={'/about/person'}>nested route</Link></button>
    </div>
    </>
  )
}

export default Navbar