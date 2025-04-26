import React from 'react'
import Image from 'next/image'
import authImage from '@assets/images/authImage.svg'
export default function LeftAuth() {
  return (
    <section className='shadow-2xl shadow-stone-300 flex justify-center bg-authColor  rounded-r-[45px]  w-[700px]'>
       
      <div className='w-[482px] mt-10 '>
         {/* welcome */}
        
         <header>
         <h1 className="text-[50px] font-bold mb-1">Welcome to</h1>
  <h2 className="text-[40px] font-bold mb-3">Elevate</h2>
  <p className="text-base text-muted-foreground w-[75%]">
    Quidem autem voluptatibus qui quaerat aspernatur architecto natus
  </p>
         </header>
        {/* Image */}
        <Image width={350} src={authImage} alt='authImage'></Image>
      </div>
    </section>
  )
}
