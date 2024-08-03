import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const IntroLanding = () => {
  return (
    <div className="">
        <div className="grid grid-cols-4 items-center landing_container pt-[100px]">
            <div className=" col-span-2 text-left flex flex-col items-start justify-start">
              <p className='text-sm text-[#6b6b6b] font-semibold'>WELCOME TO BANKON</p>
              <h1 className='text-color text-[60px] font-bold'>Bank That Is<br></br> Always Online</h1>
            </div>
            <div className="pt-4 col-span-2 ml-32">
              <p className='text-[20px]'>Bankon’s online banking allows to easily manage your funds and perfectly control your cash flow</p>
              <Link href="/sign-in" className='bg-[#1A1A23] py-[9px] pl-6 pr-3 w-[200px] rounded-full  flex items-center justify-between mt-4'>
                  <p className='text-white text-left bg-transparent tracking-wide'>Open an account</p>
                  <div className="bg-[#f5f5f5] p-2 rounded-full">
                      <Image src='/icons/arrow-right-solid.svg' alt="arrow" width={15} height={15} />
                  </div>
              </Link>
            </div>
        </div>
      <div className="w-full intro_image_container flex justify-center mt-32">
        <Image src="/icons/homepage-img.svg" alt="homepage img" width={1000} height={1000} className='intro_image'/>
      </div>
    </div>
    
      
  )
}

export default IntroLanding