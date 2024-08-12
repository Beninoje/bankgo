import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const CashClearer = () => {
  return (
    <div className='bg-[#fff]'>
        <div className="py-[100px] px-16 cash_clearer_section">
            <div className="cash_clearer_container flex justify-around items-center w-full">
                <div className="cash_clearer_desc">
                    <h3 className='text-color font-bold text-[50px]'>Make Your Cash<br></br> Flow Clearer</h3>
                    <Link href="/sign-in" className='bg-[#1A1A23] py-[9px] pl-6 pr-3 w-[170px] rounded-full  flex items-center justify-between mt-10'>
                        <p className='text-white text-left bg-transparent tracking-wide'>Get Started</p>
                        <div className="bg-[#f5f5f5] p-2 rounded-full">
                        <Image src='/icons/arrow-right-solid.svg' alt="arrow" width={15} height={15} />
                        </div>
                    </Link>
                </div>
                <div className="cash_clearer_img_container p-4">
                    <Image src="/icons/cash_clear.svg" alt="" width={400} height={400} className='cash_clearer_img'/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default CashClearer