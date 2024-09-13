'use client'
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Blog = () => {
  const user = getLoggedInUser();

  const { setTheme } = useTheme();
  const { theme, resolvedTheme } = useTheme(); 
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | null>(null);
  useEffect(() => {
    setIsDarkTheme(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  if (isDarkTheme === null) {
    return <div>Loading...</div>; 
  }
  return (
    <div className='flex flex-col'>
      <Header user={user}/>
      <div className="w-full h-[300px] pt-[100px] dark:bg-[#22222E]"></div>
      <div className="flex justify-start px-48 gap-3">
        <div className="article_section">
          <div className="image_section flex flex-col gap-3 items-start mt-[-150px]">
            <h1 className='text-[50px]'>Unlock Your Insights</h1>
            
            <Image src="/icons/unlock_insights_blog.svg" alt="" width={800} height={800} className='rounded-[20px]'/>

          </div>
          <div className="flex flex-col items-start dark:bg-[#22222E] px-3 py-5 rounded-md w-[400px] mt-[-20px] relative">
            <span className='text-[12px] uppercase'>7 MIN Read </span>
            <span className=''>Published September 15, 2024</span>
              <div className="flex items-center gap-3 pt-4">
                <Image src="/icons/micheal_profile.svg" height={20} width={30} alt="" className='rounded-full w-[35px] h-[35px] object-cover'/>
                <span>Written by <b>Peter Yan</b></span>
              </div>
          </div> 
          <div className="w-[500px]">
          <div className="collapse mt-8 rounded-md bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title flex items-center justify-between text-xl font-medium">
                  <div className="flex gap-2">
                    <Image src={isDarkTheme ? "/icons/dark-logo.svg" :"/icons/logo.svg"} width={30} height={30} alt="bankon logo" />
                    <h2 className='text-[16px]'>The bankon promise</h2>
                  </div>
                  <div className="">
                    <Image src={isDarkTheme ? "/icons/arrow-down-up-dark.svg" : "/icons/arrow-down-up.svg"} width={20} height={20} alt=""/>
                  </div>
                </div>
                <div className="collapse-content">
                  <p>At Bankrate, we strive to help you make smarter financial decisions. To help readers understand how insurance affects their finances, we have licensed insurance professionals on staff who have spent a combined 47 years in the auto, home and life insurance industries. While we adhere to strict editorial integrity, this post may contain references to products from our partners. Here's an explanation of how we make money. Our content is backed by Coverage.com, LLC, a licensed entity (NPN: 19966249). For more information, please see our Insurance Disclosure.</p>
                </div>
              </div>
          </div>   
          <div className="header-1">
          </div>
          <div className="paragraph">

          </div>
          <div className="written_by">

          </div>

        <div className="article_director">
          
        </div>
      </div>
      
    </div>
      <Footer/>
    </div>
  )
}

export default Blog