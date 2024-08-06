import Link from 'next/link'
import React from 'react'

const HeaderMobileLinks: React.FC<HeaderLinkProps> = ({title,link}) => {
  return (
    <Link href={link} className='text-color text-[20px] mobile_link'>
        {title}
    </Link>
  )
}

export default HeaderMobileLinks