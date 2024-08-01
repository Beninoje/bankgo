import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import FAQInfo from '@/components/FAQInfo';
import Banks from '@/components/Banks';
import Reviews from '@/components/Reviews';
import CashClearer from '@/components/CashClearer';
import BlogReview from '@/components/BlogReview';
import { TryNow } from '@/components/TryNow';
import PennyProtected from '@/components/PennyProtected';

const Home: React.FC= () => {
  return (
    <div>
      <Header/>
      <div className="grid grid-cols-4 items-center container mx-auto px-8 pt-[100px]">
        <div className=" col-span-2 text-left flex flex-col items-start justify-start">
          <p className='text-sm text-[#6b6b6b]'>WELCOME TO BANKON</p>
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
      <div className="w-full flex justify-center mt-32">
        <Image src="/icons/homepage-img.svg" alt="homepage img" width={1000} height={1000}/>
      </div>
      <Banks/>
      <FAQInfo/>
      <Reviews/>
      <CashClearer/>
      <BlogReview/>
      <PennyProtected/>
      <TryNow/>
      <Footer/>
    </div>
  )
}

export default Home