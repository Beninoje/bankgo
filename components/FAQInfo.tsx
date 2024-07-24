"use client"
import  { faqInfo }  from '@/constants';
import Link from 'next/link';
import AccordionItem from './AccordionItem';
import { useState } from 'react';


const FAQInfo = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
      };
  return (
    <div className='pt-[50px] px-32 flex justify-between container mx-auto items-start'>
        <div className="">
            <h2 className='text-color'>
                Beyond The Business Banking Basics
            </h2>
            <Link href="/sign-in">
                <p>Get Started</p>
            </Link>
        </div>
        <div className="">
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
  )
}

export default FAQInfo

