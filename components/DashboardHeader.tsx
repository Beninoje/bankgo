import { HeaderBoxProps } from '@/types'
import React from 'react'

const DashboardHeader = ({type="title",title,subtext,user}:HeaderBoxProps) => {
  return (
    <div className="header-box">
        <h1 className='header-box-title'>
            {title}
            {type==='greeting' &&(
                <span className="text-bankGradient">
                    &nbsp;{user}
                </span>
            )}    
        </h1>
        <p className="header-box-subtext dark:text-[#AEAEAE]">{subtext}</p>
    </div>
  )
}

export default DashboardHeader