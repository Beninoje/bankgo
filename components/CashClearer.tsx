"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const CashClearer = () => {
    const { theme, resolvedTheme } = useTheme(); 
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDarkTheme(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  if (isDarkTheme === null) {
    return <div>Loading...</div>; 
  }
  return (
    <div className='bg-[#fff] dark:bg-[#1a1a23]'>
        <div className="py-[100px] px-16 cash_clearer_section">
            <div className="cash_clearer_container flex-col md:flex-row flex justify-around items-center w-full">
                <div className="cash_clearer_desc order-1 md:order-first flex-1">
                    <h3 className='text-color main_header_title font-bold text-[50px]'>Make Your Cash<br></br> Flow Clearer</h3>
                    <p className='text-[18px] dark:text-[#AEAEAE] w-full md:w-1/2'>Gain full control over your finances with a clear view of your cash flow. Track every transaction and optimize your spending effortlessly.</p>
                    <Link href="/sign-in" className='bg-[#1A1A23] dark:bg-[#121217] py-[9px] pl-6 pr-3 w-[170px] rounded-full  flex items-center justify-between mt-10'>
                        <p className='text-white text-left bg-transparent tracking-wide'>Get Started</p>
                        <div className="bg-[#f5f5f5]  p-2 rounded-full">
                        <Image src='/icons/arrow-right-solid.svg' alt="arrow" width={15} height={15} />
                        </div>
                    </Link>
                </div>
                <div className="cash_clearer_img_container p-4">
                    <Image src={isDarkTheme ? '/icons/cash_clear_dark.svg' : "/icons/cash_clear.svg"} alt="" width={400} height={400} className='cash_clearer_img'/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default CashClearer