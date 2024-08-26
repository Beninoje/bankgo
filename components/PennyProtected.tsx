"use client"
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const PennyProtected = () => {
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
        <div className="py-[100px] flex every_p_container justify-around px-48 items-center w-full">
            <div className="flex w-full every_p_image">
                <img src={isDarkTheme ? "/icons/account_cards_dark.svg" : "/icons/account_cards.svg"} alt="" className='w-[500px] account_card_img' />
            </div>
            <div className="text-right flex flex-col items-end every_p_desc">
                <h3 className='text-color main_header_title text-[50px] font-bold'>Every Penny Is<br></br> Protected</h3>
                <p className='text-[17px] dark:text-[#AEAEAE]'>Login has dual indentity and biometric case protection, and each enterprise is insured with 2500PICC insurance protection</p>
                <Link href="/sign-in" className='bg-[#1A1A23] dark:bg-[#121217] every_p_btn py-[9px] pl-3 pr-6 w-[170px] rounded-full  flex items-center justify-between mt-4'>
                    <div className="bg-[#f5f5f5] p-2 rounded-full">
                        <Image src='/icons/arrow-left.svg' alt="arrow" width={15} height={15} />
                    </div>
                    <p className='text-white text-right bg-transparent tracking-wide'>Get Started</p>
                </Link>
                <Link href="/sign-in" className='bg-[#1A1A23] every_p_btn_m py-[9px] pl-6 pr-3 w-[170px] rounded-full  flex items-center justify-between mt-10'>
                        <p className='text-white text-left bg-transparent tracking-wide'>Get Started</p>
                        <div className="bg-[#f5f5f5] p-2 rounded-full">
                        <Image src='/icons/arrow-right-solid.svg' alt="arrow" width={15} height={15} />
                        </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PennyProtected