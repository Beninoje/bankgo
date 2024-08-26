"use client"
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { footerItemStats } from '@/constants'
import FooterItem from './FooterItem'
import { useTheme } from 'next-themes'

const Footer = () => {
  const [isHoverIG, setIsHoveredIG] = useState(false);
  const [isHoverFB, setIsHoveredFB] = useState(false);
  const [isHoverLI, setIsHoveredLI] = useState(false);
  const { theme, resolvedTheme } = useTheme(); 
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDarkTheme(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  if (isDarkTheme === null) {
    return <div>Loading...</div>; 
  }
  return (
    <footer className='pt-32 '>
        <div className="footer_container flex justify-between items-center w-[90%] mx-auto pb-10">
          <div className="footer_item">
          <Link href="/" className="flex gap-2 items-center">
            <Image src={isDarkTheme ? "/icons/dark-logo.svg" :"/icons/logo.svg"} width={50} height={50} alt="bankon logo" />
            <h1 className="text-color font-semibold text-[35px] tracking-wide">
              bank<span className="text-[#FF7E61]">on</span>
            </h1>
        </Link>
            <p className='text-[#6F6F6F] text-[20px] py-5'>Your Money, <br></br> Your Way<br></br> Everyday</p>
          </div>
          {footerItemStats.map((item,i)=>(
            <FooterItem
             key={i}
             title={item.title}
             item1={item.item1}
             item2={item.item2}
             item3={item.item3}
             link1={item.link1 ?? '/'}
             link2={item.link2 ?? '/'}
             link3={item.link3 ?? '/'}
            />
          ))} 
      </div>
      <div className="h-[2px] bg-[#D1D1D1] w-[90%] mx-auto">
      </div>
      <div className="flex w-[90%] footer_ending_credits mx-auto py-8 justify-between">
        <div className="">
          <p className=''>Copyright © 2024 bankon, Inc. All Rights Reserved.</p>
        </div>
        <div className="flex items-center gap-8">
          <Link 
           href="/" 
           className='footer_social_links'
           onMouseEnter={() => setIsHoveredIG(true)}
           onMouseLeave={() => setIsHoveredIG(false)}
           >
            {isHoverIG ? (
              <Image src="/icons/IG_logo_hover.svg" alt="" width={25} height={25} className='footer_social_links' />
            ):(
              <Image src={isDarkTheme ? "/icons/IG_logo_dark.svg" : "/icons/IG_logo.svg"} alt="" width={25} height={25} className='footer_social_links' />
            )}
            
          </Link>
          <Link 
           href="/" 
           className='footer_social_links'
           onMouseEnter={() => setIsHoveredFB(true)}
           onMouseLeave={() => setIsHoveredFB(false)}
           >
            {isHoverFB ? (
              <Image src="/icons/FB_logo_hover.svg" alt="" width={25} height={25} className='footer_social_links' />
            ):(
              <Image src={isDarkTheme ? "/icons/FB_logo_dark.svg" : "/icons/FB_logo.svg"} alt="" width={25} height={25} className='footer_social_links' />
            )}
            
          </Link>
          <Link 
           href="/" 
           className='footer_social_links'
           onMouseEnter={() => setIsHoveredLI(true)}
           onMouseLeave={() => setIsHoveredLI(false)}
           >
            {isHoverLI ? (
              <Image src="/icons/LI_logo_hover.svg" alt="" width={25} height={25} className='footer_social_links' />
            ):(
              <Image src={isDarkTheme ? "/icons/LI_logo_dark.svg" : "/icons/LI_logo.svg"} alt="" width={25} height={25} className='footer_social_links' />
            )}
            
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer