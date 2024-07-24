import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className="flex justify-start items-center px-32 pt-[100px]">
        <div className="text-left">
          <p className='text-sm text-[#6b6b6b]'>WELCOME TO BANKON</p>
          <h1 className='text-color text-[50px] font-bold'>Bank that is always online</h1>
        </div>
        <div className="">
          <p>Bankon’s online banking allows to easily manage your funds and perfectly control your cash flow</p>
          <Link href="/sign-in" className='bg-[#1A1A23] py-[9px] pl-6 pr-3 w-[200px] rounded-full  flex items-center justify-between'>
            <p className='text-white text-left bg-transparent tracking-wide'>Open an account</p>
            <div className="bg-[#f5f5f5] p-2 rounded-full">
              <Image src='/icons/arrow-right-solid.svg' alt="arrow" width={15} height={15} />
            </div>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home