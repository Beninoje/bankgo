import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import FAQInfo from '@/components/FAQInfo';
import Banks from '@/components/Banks';
import Reviews from '@/components/Reviews';
import CashClearer from '@/components/CashClearer';
import BlogReview from '@/components/BlogReview';
import { TryNow } from '@/components/TryNow';
import PennyProtected from '@/components/PennyProtected';
import IntroLanding from '@/components/IntroLanding';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home: React.FC= async() => {
  const loggedIn = await getLoggedInUser();
  return (
    <div>
      <Header user={loggedIn}/>
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