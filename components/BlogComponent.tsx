"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

const BlogComponent: React.FC<BlogComponentProps> = ({title,imageURL, preDesc}) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-5 items-center w-full">
        <div className="col-span-1">
          <Image src={imageURL} alt="" width={300} height={300} />
        </div>
        <div className="col-span-3 pl-[30px]">
            <LinkPreview url="/blog" className='' imageSrc="/icons/dive_deeper.svg" isStatic>
                <h3 className='font-semibold text-[35px]'>{title}</h3>
                <p className='text-[18px]'>{preDesc}</p>
            </LinkPreview>
        </div>
        <div className="col-span-1 flex justify-end">
          <Link
            href='/blog'
            className="pagination_btn"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? (
              <Image
                src="/icons/arrow-right-hover.svg"
                alt="Next"
                width={18}
                height={18}
              />
            ) : (
              <Image
                src="/icons/arrow-right.svg"
                alt="Next"
                width={18}
                height={18}
              />
            )}
          </Link>
        </div>
      </div>
      <div className="flex flex-col h-[100px] justify-center">
        <div className="blog_separator "></div>
      </div>
    </div>
  )
}

export default BlogComponent