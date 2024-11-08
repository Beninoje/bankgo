"use client"
import { headerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import HeaderLinks from './HeaderLinks'
import { useEffect, useState } from 'react'
import HeaderMobileLinks from './HeaderMobileLinks'
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { HeaderProps } from '@/types'
const Header = ({user}:HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  let lastScrollY = 0;
  const { setTheme } = useTheme();
  const { theme, resolvedTheme } = useTheme(); 
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | null>(null);
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  useEffect(() => {
    setIsDarkTheme(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  if (isDarkTheme === null) {
    return <div>Loading...</div>; 
  }
  
  return (
    <header className='px-3 py-4 w-full m_header'>
        <nav className={`nav_container ${isScrollingUp ? 'visible' : 'hidden'} ${isOpen ? 'open' : ''}`}>
        <Link href="/" className="flex gap-2 items-center">
          <Image src={isDarkTheme ? "/icons/dark-logo.svg" :"/icons/logo.svg"} width={30} height={30} alt="bankon logo" />
          <h1 className="text-color font-semibold text-[24px] tracking-wide">
            bank<span className="text-[#FF7E61]">on</span>
          </h1>
        </Link>
        <div className={`nav_list_container`}>
          <ul className="nav_list">
            {headerLinks.map((item, i) => (
              <HeaderLinks key={i} title={item.title} link={item.link} />
            ))}
          </ul>
        </div>
        <div className={`nav_list_mobile_container ${isOpen ? 'open' : ''} `}>
          <Link href="/" className="flex gap-2 items-center">
            <Image src={isDarkTheme ? "/icons/dark-logo.svg" :"/icons/logo.svg"} width={50} height={50} alt="bankon logo" />
            <h1 className="text-color font-semibold text-[30px] tracking-wide">
              bank<span className="text-[#FF7E61]">on</span>
            </h1>
          </Link>
            <ul className="nav_mobile_list">
              {headerLinks.map((item, i) => (
                <HeaderMobileLinks key={i} title={item.title} link={item.link} />
              ))}
            </ul>
            <div className="flex justify-center gap-4 mobile_auth_container py-4">
              <Link href="/sign-up" className="sign_up_btn">
                Get Started
              </Link>
              <Link href="/sign-in" className="mx-4 login_btn">
                Login
              </Link>
            </div>
            <div className="flex gap-4 mobile_privacy_container items-center pt-[20px]">
              <Link href="/" className='mobile_link_terms'>
                Privacy Policy
              </Link>
              <span className='bullet_mobile'>•</span>
              <Link href="/" className='mobile_link_terms'>
                Terms of Use
              </Link>
              <span className='bullet_mobile'>•</span>
              <Link href="/" className='mobile_link_terms'>
                Legal
              </Link>
              <span className='bullet_mobile'>•</span>
              <Link href="/" className='mobile_link_terms'>
                Site Map
              </Link>
            </div>
            <div className=" pt-[20px]">
              <ul className='flex gap-4'>
                <li>
                  <Link href="/">
                    <Image src={isDarkTheme ? "/icons/IG_logo_dark.svg" : "/icons/IG_logo.svg"} alt="" width={25} height={25} className='footer_social_links' />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Image src={isDarkTheme ? "/icons/FB_logo_dark.svg" : "/icons/FB_logo.svg"} alt="" width={25} height={25} className='footer_social_links' />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Image src={isDarkTheme ? "/icons/LI_logo_dark.svg" : "/icons/LI_logo.svg"} alt="" width={25} height={25} className='footer_social_links' />
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" pt-[30px]">
              <p className='text-[10px]'>Copyright © 2024 bankon, Inc. All Rights Reserved.</p>
            </div>
        </div>
        <div className="flex">
          <div className={`auth_btn_container ${isOpen ? 'open': ''} `}>
            <Link href="/sign-up" className={user ? 'hidden' : "sign_up_btn"}>
              Get Started
            </Link>
            <Link href="/sign-in" className={user ? 'hidden' : "mx-4 login_btn"}>
              Login
            </Link>
          </div>
          <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span className="bar bar-1"></span>
            <span className="bar bar-2"></span>
            <span className="bar bar-3"></span>
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
      </nav>
    </header>
  )
}

export default Header