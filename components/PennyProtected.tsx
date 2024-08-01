"use client"
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const PennyProtected = () => {
  return (
    <div className='bg-[#fff]'>
        <div className="py-[150px] flex justify-around px-48 items-center w-full">
            <div className="flex w-full relative">
                <img src="/icons/account_cards.svg" alt="" className='w-[500px]' />
            </div>
            <div className="text-right flex flex-col items-end">
                <h3 className='text-color text-[50px] font-bold'>Every Penny Is<br></br> Protected</h3>
                <p className='text-[17px]'>Login has dual indentity and biometric case protection, and each enterprise is insured with 2500PICC insurance protection</p>
                <Link href="/sign-in" className='bg-[#1A1A23] py-[9px] pl-3 pr-6 w-[170px] rounded-full  flex items-center justify-between mt-4'>
                    <div className="bg-[#f5f5f5] p-2 rounded-full">
                        <Image src='/icons/arrow-left.svg' alt="arrow" width={15} height={15} />
                    </div>
                    <p className='text-white text-right bg-transparent tracking-wide'>Get Started</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PennyProtected