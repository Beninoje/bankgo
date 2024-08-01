import Link from 'next/link'
import React from 'react'

const FooterItem: React.FC<FooterItemProps> = ({title, item1, link1, item2, link2, item3, link3}) => {
  return (
    <div>
        <h4 className='font-semibold text-color text-[25px]'>{title}</h4>
          <div className="flex flex-col pt-2 gap-4">
                <Link href={link1} className='text-[#9C9C9C] text-[20px] footer_link'>
                    {item1}
                </Link>
                <Link href={link2} className='text-[#9C9C9C] text-[20px] footer_link'>
                    {item2}
                </Link>
                <Link href={link3} className='text-[#9C9C9C] text-[20px] footer_link'>
                    {item3}
                </Link>
            </div>
    </div>
  )
}

export default FooterItem