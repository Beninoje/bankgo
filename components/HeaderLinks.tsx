import Link from 'next/link'
import React from 'react'

const HeaderLinks: React.FC<HeaderLinkProps> = ({title,link}) => {
  return (
    <Link href={link} className='text-color text-[15px] mobile_link'>
        {title}
    </Link>
  )
}

export default HeaderLinks