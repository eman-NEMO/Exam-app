import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
export default function NavBar() {
  return (
    <nav className=' flex justify-end space-x-5 me-20 mt-14 ' >
    
     <Button variant="ghost" className='text-lg '>
        <Link href={`/auth/login`}>English</Link>
      </Button>
      <Button variant="ghost" className=' text-lg font-bold text-[#4461F2]'>
        <Link href={`/auth/login`}>Sign In</Link>
      </Button>
      <Button variant="outline"  className='text-lg text-[#4461F2]'>
        <Link href={`/auth/register`}>Register</Link>
      </Button>
     
    </nav>
  )
}