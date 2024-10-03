import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <>
    <div>About</div>
    <button className="btn btn-error"><Link href={'/'}>Back</Link></button>
    </>
  )
}

export default About