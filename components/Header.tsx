"use client"
import { headerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import HeaderLinks from './HeaderLinks'
import { useEffect, useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  let lastScrollY = 0;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
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
  }, []);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);
  
  return (
    <div className='px-3 py-4 w-full'>
        <nav className={`nav_container ${isScrollingUp ? 'visible' : 'hidden'} ${isOpen ? 'open' : ''}`}>
        <Link href="/" className="flex gap-2 items-center">
          <Image src="/icons/logo.svg" width={30} height={30} alt="bankon logo" />
          <h1 className="text-color font-semibold text-[24px] tracking-wide">
            bank<span className="text-[#FF7E61]">on</span>
          </h1>
        </Link>
        <div className={`nav_list_container ${isOpen ? 'open' : ''}`}>
          <ul className="nav_list">
            {headerLinks.map((item, i) => (
              <HeaderLinks key={i} title={item.title} link={item.link} />
            ))}
          </ul>
        </div>
        <div className={`auth_btn_container ${isOpen ? 'open': ''}`}>
          <Link href="/sign-in" className="mx-4">
            <span className="login_in_btn">Login</span>
          </Link>
          <Link href="/sign-up" className="sign_up_btn">
            Sign Up
          </Link>
        </div>
        <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar bar-1"></span>
          <span className="bar bar-2"></span>
          <span className="bar bar-3"></span>
        </button>
      </nav>
    </div>
  )
}

export default Header