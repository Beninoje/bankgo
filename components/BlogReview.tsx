"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
import { blogStats } from '@/constants';

const BlogReview = () => {
  const [isHoveredFirst, setIsHoveredFirst] = useState(false);
  const [isHoveredSecond, setIsHoveredSecond] = useState(false);
  const [isHoveredThird, setIsHoveredThird] = useState(false);
  const firstBlogImage = blogStats.at(0);
  const secondBlogImage = blogStats.at(1);
  const thirdBlogImage = blogStats.at(2);
  return (
        <div className="py-[100px] px-32 blog_section">
            <div className="flex justify-center items-center w-full blog_section_intro">
                <div className="w-full blog_section_intro_title">
                  <h3 className='text-color font-bold text-[40px]'>Navigate. Analyze, Thrive:<br></br> 
                  Financial Dashboard</h3>
                </div>
                <div className="blog_section_intro_desc">
                  <p className='text-[20px]'>Explore financial possibilities, immerse yourself in data-driven insights, and actively shape your financial future</p>
                </div>
            </div>
            <div className="pt-[100px] flex flex-col">
              <div className="grid grid-cols-5 items-center w-full">
                <div className="col-span-1">
                  <Image src={firstBlogImage ? firstBlogImage.imageURL : "/icons/unlock_insights.svg"}  alt="" width={300} height={300} />
                </div>
                <div className="col-span-3 pl-[30px]">
                    <LinkPreview url="/blog" className='' imageSrc="/icons/unlock_insights.svg" isStatic>
                      <h3 className='font-semibold text-[35px]'>{blogStats.at(0)?.title}</h3>
                      <p className='text-[18px]'>{blogStats.at(0)?.preDesc}</p>
                    </LinkPreview>
                </div>
                <div className="col-span-1 flex justify-end">
                  <Link
                    href='/blog'
                    className="pagination_btn"
                    onMouseEnter={() => setIsHoveredFirst(true)}
                    onMouseLeave={() => setIsHoveredFirst(false)}
                  >
                    {isHoveredFirst ? (
                      <Image
                        src="/icons/arrow-right-hover.svg"
                        alt="Next"
                        width={18}
                        height={18}
                      />
                    ) : (
                      <Image
                        src="/icons/arrow-right.svg"
                        alt="Next"
                        width={18}
                        height={18}
                      />
                    )}
                  </Link>
                </div>
              </div>
              <div className="flex flex-col h-[100px] justify-center">
                <div className="blog_separator "></div>
              </div>
              <div className="grid grid-cols-5 items-center w-full">
                <div className="col-span-1">
                  <Image src={secondBlogImage ? secondBlogImage.imageURL : "/icons/unlock_insights.svg"}  alt="" width={300} height={300} />
                </div>
                <div className="col-span-3 pl-[30px]">
                    <LinkPreview url="/blog" className='' imageSrc="/icons/dive_deeper.svg" isStatic>
                    <h3 className='font-semibold text-[35px]'>{blogStats.at(1)?.title}</h3>
                    <p className='text-[18px]'>{blogStats.at(1)?.preDesc}</p>
                    </LinkPreview>
                </div>
                <div className="col-span-1 flex justify-end">
                  <Link
                    href='/blog'
                    className="pagination_btn"
                    onMouseEnter={() => setIsHoveredSecond(true)}
                    onMouseLeave={() => setIsHoveredSecond(false)}
                  >
                    {isHoveredSecond ? (
                      <Image
                        src="/icons/arrow-right-hover.svg"
                        alt="Next"
                        width={18}
                        height={18}
                      />
                    ) : (
                      <Image
                        src="/icons/arrow-right.svg"
                        alt="Next"
                        width={18}
                        height={18}
                      />
                    )}
                  </Link>
                </div>
              </div>
              <div className="flex flex-col h-[100px] justify-center">
                <div className="blog_separator "></div>
              </div>
              <div className="grid grid-cols-5 items-center w-full">
                <div className="col-span-1">
                  <Image src={thirdBlogImage ? thirdBlogImage.imageURL : "/icons/unlock_insights.svg"}  alt="" width={300} height={300} />
                </div>
                <div className="col-span-3 pl-[30px]">
                    <LinkPreview url="/blog" className='' imageSrc="/icons/spendage.svg" isStatic>
                        <h3 className='font-semibold text-[35px]'>{blogStats.at(2)?.title}</h3>
                        <p className='text-[18px]'>{blogStats.at(2)?.preDesc}</p>
                    </LinkPreview>
                </div>
                <div className="col-span-1 flex justify-end">
                  <Link
                    href='/blog'
                    className="pagination_btn"
                    onMouseEnter={() => setIsHoveredThird(true)}
                    onMouseLeave={() => setIsHoveredThird(false)}
                  >
                    {isHoveredThird ? (
                      <Image
                        src="/icons/arrow-right-hover.svg"
                        alt="Next"
                        width={18}
                        height={18}
                      />
                    ) : (
                      <Image
                        src="/icons/arrow-right.svg"
                        alt="Next"
                        width={18}
                        height={18}
                      />
                    )}
                  </Link>
                </div>
              </div>
            </div>
        </div>
  )
}

export default BlogReview