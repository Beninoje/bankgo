"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
import { blogStats } from '@/constants';
import { useTheme } from 'next-themes';
import { getBlogs } from '@/lib/actions/blog.actions';

const BlogReview = () => {
  const [isHoveredFirst, setIsHoveredFirst] = useState(false);
  const [isHoveredSecond, setIsHoveredSecond] = useState(false);
  const [isHoveredThird, setIsHoveredThird] = useState(false);
  const firstBlogImage = blogStats.at(0);
  const secondBlogImage = blogStats.at(1);
  const thirdBlogImage = blogStats.at(2);
  const { theme, resolvedTheme } = useTheme(); 
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | null>(null);

  const [blogs, setBlogs] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const result = await getBlogs(); // Fetch blog data from Appwrite
        setBlogs(result);
      } catch (error) {
        console.log("Failed to fetch blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);
  useEffect(() => {
    setIsDarkTheme(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  if (isDarkTheme === null) {
    return <div>Loading...</div>; 
  }
  return (
        <div className="py-[100px] px-32 blog_section">
            <div className="flex justify-center items-center w-full blog_section_intro">
                <div className="w-full blog_section_intro_title">
                  <h3 className='text-color main_header_title font-bold text-[40px]'>Navigate. Analyze, Thrive:<br></br> 
                  Financial Dashboard</h3>
                </div>
                <div className="blog_section_intro_desc">
                  <p className='text-[20px] dark:text-[#AEAEAE]'>Explore financial possibilities, immerse yourself in data-driven insights, and actively shape your financial future</p>
                </div>
            </div>
            <div className="pt-[100px] flex flex-col">
              <div className="grid grid-cols-5 blog_container items-center w-full">
                <div className="col-span-1">
                  <Image src={isDarkTheme ? "/icons/unlock_insights_dark.svg" : "/icons/unlock_insights.svg"}  alt="" className='blog_preview_img' width={300} height={300} />
                </div>
                <div className="col-span-3 pl-0 pt-6 md:pt-0 md:pl-[30px]">
                    <LinkPreview url="/blog" className='' imageSrc="/icons/unlock_insights.svg" isStatic>
                      <h3 className='font-semibold blog_title_landing text-[35px]'>{blogStats.at(0)?.title}</h3>
                      <p className='text-[18px] blog_desc_landing dark:text-[#AEAEAE]'>{blogStats.at(0)?.preDesc}</p>
                    </LinkPreview>
                </div>
                <div className="col-span-1 blog_button flex justify-end">
                  <Link
                    href='/blog'
                    className="blog_preview_btn"
                    onMouseEnter={() => setIsHoveredFirst(true)}
                    onMouseLeave={() => setIsHoveredFirst(false)}
                  >
                    <span className='block md:hidden'>View</span>
                    {isHoveredFirst ? (
                      <Image
                        src="/icons/arrow-right-hover.svg"
                        alt="Next"
                        className='blog_arrow_img'
                        width={18}
                        height={18}
                      />
                    ) : (
                      <Image
                        src="/icons/arrow-right.svg"
                        alt="Next"
                        className='blog_arrow_img'
                        width={18}
                        height={18}
                      />
                    )}
                  </Link>
                </div>
              </div>
              {blogs.map((blog,index)=>(
                <div className="" key={blog.$id}>
                  <Link href={`/view/?id=${blog.$id}`}>
                    Click Here to View Blog
                  </Link>
                  <h1>{blog.title}</h1>
                  <h1>{blog.subtitle}</h1>
                </div>
              ))}
              <div className="flex flex-col h-[100px] justify-center">
                <div className="blog_separator  "></div>
              </div>
              <div className="grid grid-cols-5 blog_container items-center w-full">
                <div className="col-span-1">
                  <Image src={isDarkTheme ? "/icons/dive_deeper_dark.svg" : "/icons/dive_deeper.svg"}  className='blog_preview_img'  alt="" width={300} height={300} />
                </div>
                <div className="col-span-3 pl-0 pt-6 md:pt-0  md:pl-[30px]">
                    <LinkPreview url="/blog" className='' imageSrc="/icons/dive_deeper.svg" isStatic>
                    <h3 className='font-semibold blog_title_landing text-[35px]'>{blogStats.at(1)?.title}</h3>
                    <p className='text-[18px] blog_desc_landing dark:text-[#AEAEAE]'>{blogStats.at(1)?.preDesc}</p>
                    </LinkPreview>
                </div>
                <div className="col-span-1 blog_button flex justify-end">
                  <Link
                    href='/blog'
                    className="blog_preview_btn"
                    onMouseEnter={() => setIsHoveredSecond(true)}
                    onMouseLeave={() => setIsHoveredSecond(false)}
                  >
                    <span className='block md:hidden'>View</span>
                    {isHoveredSecond ? (
                      <Image
                        src="/icons/arrow-right-hover.svg"
                        alt="Next"
                        className='blog_arrow_img'
                        width={18}
                        height={18}
                      />
                    ) : (
                      <Image
                        src="/icons/arrow-right.svg"
                        alt="Next"
                        className='blog_arrow_img'
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
              <div className="grid grid-cols-5 blog_container items-center w-full">
                <div className="col-span-1">
                  <Image src={isDarkTheme ? "/icons/spendage_dark.svg" : "/icons/spendage.svg"}  className='blog_preview_img' alt="" width={300} height={300} />
                </div>
                <div className="col-span-3 pl-0 pt-6 md:pt-0 md:pl-[30px]">
                    <LinkPreview url="/blog" className='' imageSrc="/icons/spendage.svg" isStatic>
                        <h3 className='font-semibold blog_title_landing  text-[35px]'>{blogStats.at(2)?.title}</h3>
                        <p className='text-[18px] blog_desc_landing dark:text-[#AEAEAE]'>{blogStats.at(2)?.preDesc}</p>
                    </LinkPreview>
                </div>
                <div className="col-span-1 blog_button flex justify-end">
                  <Link
                    href='/blog'
                    className="blog_preview_btn"
                    onMouseEnter={() => setIsHoveredThird(true)}
                    onMouseLeave={() => setIsHoveredThird(false)}
                  >
                    <span className='block md:hidden'>View</span>
                    {isHoveredThird ? (
                      <Image
                        src="/icons/arrow-right-hover.svg"
                        alt="Next"
                        className='blog_arrow_img'
                        width={18}
                        height={18}
                      />
                    ) : (
                      <Image
                        src="/icons/arrow-right.svg"
                        alt="Next"
                        className='blog_arrow_img'
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