"use client"
import { formatAmount } from '@/lib/utils'
import { CreditCardProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import Copy from './Copy'
import { Toaster } from './ui/toaster'

const BankCard = ({account, userName, showBalance = true}: CreditCardProps) => {
    const pathname = usePathname();
  
    const displayDivOnPath = '/my-banks';
    return (
    <div className='bg-bank-gradient bank-card'>
            <Link href={`/transaction-history/?id=${account.appwriteItemId}`} className=' h-full relative'>
                            <div className="bank-card_content">
                                <div className="">
                                    <h1 className="text-16 font-semibold text-white">
                                        {account.name}
                                    </h1>
                                    <p className="font-black text-white">
                                        {formatAmount(account.currentBalance )}
                                    </p>
                                </div>
                                <article className='flex flex-col gap-2'>
                                    <div className="flex justify-between">
                                        <h1 className='text-12 font-semibold text-white'>
                                            {userName}
                                        </h1>
                                        <h2 className='text-12 font-semibold text-white'>
                                        ●● / ●●
                                        </h2>
                                    </div>
                                    <p className="text-14 font-semibold tracking-[1.1px] text-white">
                                    ●●●● ●●●● ●●●● <span className="text-16">
                                            1234
                                        </span>
                                    </p>
                                </article>
                            </div>
                </Link>
        
                <div className="p-6 flex flex-col h-full items-center justify-between">
                    {pathname === displayDivOnPath && (
                        <Copy title={account?.shareableId}/>
                    )}
                    
                    <Image 
                        src="/icons/mastercard.svg"
                        width={60}
                        height={50}
                        alt="pay"
                    />
                    
                </div>
                <Image src="/icons/lines.png" width={316} height={190} alt="lines" className='absolute top-0 w-full h-full left-0'/>
            </div> 

  )
}

export default BankCard