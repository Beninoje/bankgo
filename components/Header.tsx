import { headerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import HeaderLinks from './HeaderLinks'

const Header = () => {
  return (
    <div className='px-3 py-4 w-full'>
      <nav className="nav_container">
        <Link href="/" className="flex gap-2 items-center">
          <Image src="/icons/logo.svg"
            width={30}
            height={30}
            alt="bankon logo"/>
            <h1 className='text-color font-semibold text-[24px] tracking-wide'>bank<span className='text-[#FF7E61]'>on</span></h1>
        </Link>
        <div className="">
          <ul className='nav_list '>
            {headerLinks.map((item,i)=>(
              <HeaderLinks
                key={i}
                title={item.title}
                link={item.link}
              />
            ))}
          </ul>
        </div>
        <div className="auth_btn_container">
            <Link href="/sign-in" className='mx-4'>
              <span className='login_in_btn'>Login</span>
            </Link>
            <Link href="/sign-up" className='sign_up_btn'>
              Sign Up
            </Link>
        </div>
      </nav>
      
    </div>
  )
}

export default Header