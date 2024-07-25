"use client"
import  { faqInfo }  from '@/constants';
import Link from 'next/link';
import AccordionItem from './AccordionItem';
import { useState } from 'react';
import Image from 'next/image';


const FAQInfo = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
      };
  return (
    <section className='bg-[#fff] py-[100px] px-8 '>
        <div className="grid grid-cols-4 place-items-center bg-[#fff]  container mx-auto items-start">
            <div className="bg-[#fff] col-span-2 w-full">
                <h2 className='text-color font-bold text-[50px] bg-[#fff]'>
                    Beyond The<br></br> Business Banking Basics
                </h2>
                <Link href="/sign-in" className='bg-[#1A1A23] py-[9px] pl-6 pr-3 w-[170px] rounded-full  flex items-center justify-between mt-10'>
                    <p className='text-white text-left bg-transparent tracking-wide'>Get Started</p>
                    <div className="bg-[#f5f5f5] p-2 rounded-full">
                    <Image src='/icons/arrow-right-solid.svg' alt="arrow" width={15} height={15} />
                    </div>
                </Link>
            </div>
            <div className="col-span-2 w-full px-32 flex flex-col gap-10">
                {faqInfo.map((item,i)=>{
                    return(
                        <AccordionItem
                            key={i}
                            open={openIndex === i}
                            toggle={()=> toggle(i)}
                            title={item.title}
                            description={item.description}
                        />
                    )
                })}
            </div>
        </div>
        
    </section>
  )
}

export default FAQInfo

