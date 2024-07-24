import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='bg-[#F5F5F5] px-3 py-4 w-full'>
      <div className="flex justify-between items-center w-full mx-auto px-32">
        <Link href="/" className="flex gap-2 items-center">
          <Image src="/icons/logo.svg"
            width={30}
            height={30}
            alt="bankon logo"/>
            <h1 className='text-color font-semibold text-[24px] tracking-wide'>bank<span className='text-[#FF7E61]'>on</span></h1>
        </Link>
        <div className="">
          <ul className='flex justify-between items-center gap-16'>
            <Link href="/about">
              <p className='text-color text-[18px]'>About Us</p>
            </Link>
            <Link href="/">
              <p className='text-color text-[18px]'>Account</p>
            </Link>
            <Link href="/blog">
              <p className='text-color text-[18px]'>Blog</p>
            </Link>
            <Link href="/reviews">
              <p className='text-color text-[18px]'>Reviews</p>
            </Link>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-8">
            <Link href="/sign-in" className='mx-4'>
              <span className='text-color text-[18px]'>Login</span>
            </Link>
            <Link href="/sign-up" className='bg-[#FF7E61] px-6 py-1 rounded-full text-color text-[18px] mx-4'>
              Sign Up
            </Link>
        </div>
      </div>
      
    </div>
  )
}

export default Header