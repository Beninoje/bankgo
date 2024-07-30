import  { faqInfo, reviews, reviewStats }  from '@/constants';
import Link from 'next/link';
import AccordionItem from './AccordionItem';
import { useState } from 'react';
import Image from 'next/image';
import ReviewCarousel from './ReviewCarousel';


const Reviews = () => {
  return (
    <div className='py-[100px]'>
        <div className="">
            <h2 className='text-[50px] text-center font-bold'>Trust Us, <br></br>We Are Finanical Experts</h2>
        </div>
        <div className="grid grid-cols-3 px-32 mt-12">
            {reviewStats.map((item)=>{
                return(
                <div className="col-span-1 p-3 flex flex-col items-center justify-center">
                    <div className="flex items-center">
                        <h3 className='text-color text-[35px] font-bold'>{item.number}</h3>
                        <p className='font-semibold  text-[25px]'>{item.sign}</p>
                    </div>
                    <p className=''>{item.description}</p>
                </div>
                )
            })}
            
            
        </div>
        <div className="px-32">
            <ReviewCarousel reviews={reviews} />
        </div>
       
    </div>
  )
}

export default Reviews