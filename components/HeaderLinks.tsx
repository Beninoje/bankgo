import Link from 'next/link'
import React from 'react'

const HeaderLinks: React.FC<HeaderLinkProps> = ({title,link}) => {
  return (
    <Link href={link}>
        <p className='text-color text-[15px]'>{title}</p>
    </Link>
  )
}

export default HeaderLinks