import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import FAQInfo from '@/components/FAQInfo';
import Banks from '@/components/Banks';
import Reviews from '@/components/Reviews';
import CashClearer from '@/components/CashClearer';
import BlogReview from '@/components/BlogReview';
import { TryNow } from '@/components/TryNow';
import PennyProtected from '@/components/PennyProtected';
import IntroLanding from '@/components/IntroLanding';

const Home: React.FC= () => {
  return (
    <div>
      <Header/>
      <IntroLanding/>
      <Banks/>
      <FAQInfo/>
      <Reviews/>
      <CashClearer/>
      <BlogReview/>
      <PennyProtected/>
      <TryNow/>
      <Footer/>
    </div>
  )
}

export default Home