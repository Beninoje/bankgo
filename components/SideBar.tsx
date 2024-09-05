'use client';
import Link from 'next/link';
import Image from 'next/image';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import DashboardFooter from './DashboardFooter';
import PlaidLink from './PlaidLink';
import { SiderbarProps } from '@/types';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const SideBar = ({user}:SiderbarProps) => {
    const pathName = usePathname();
    const { setTheme } = useTheme();
    const { theme, resolvedTheme } = useTheme(); 
    const [isDarkTheme, setIsDarkTheme] = useState<boolean | null>(null);
    
    useEffect(() => {
        setIsDarkTheme(resolvedTheme === 'dark');
      }, [resolvedTheme]);
    
      if (isDarkTheme === null) {
        return <div>Loading...</div>; 
      }

  return (
    <section className='sidebar'>
        <nav className="flex flex-col gap-4">
            <Link href="/" className='mb-12 cursor-pointer flex items-center gap-2'>
                <Image
                    src={isDarkTheme ? "/icons/dark-logo.svg" :"/icons/logo.svg"}
                    width={34}
                    height={34}
                    alt="bankon logo"
                    className='size-[24] max-xl:size-14'
                />
                <h1 className="text-color font-semibold text-[24px] tracking-wide">
                    bank<span className="text-[#FF7E61]">on</span>
                </h1>
            </Link>

            {sidebarLinks.map((item)=>{
                const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)
                return (
                    <Link
                            href={item.route}
                            key={item.label}
                            className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
                        >
                            <div className='relative size-6'>
                                <Image
                                    src={item.imgURL}
                                    alt={item.label}
                                    fill
                                    className={cn({
                                        'brightness-[3] invert': isActive && isDarkTheme,
                                        'brightness-[3] invert-0': isActive && !isDarkTheme,
                                        'brightness-[1] invert-[0.7]': !isActive && isDarkTheme,
                                    })}
                                />
                            </div>
                            <p className={cn('sidebar-label', {
                                '!text-[#1A1A23]': isActive && isDarkTheme,
                                '!text-[#AEAEAE]': !isActive && isDarkTheme,
                                '!text-white': isActive && !isDarkTheme,
                            })}>
                                {item.label}
                            </p>
                        </Link>
                )
            })}
            <PlaidLink user={user} />
        </nav>
        <DashboardFooter user={user} type="desktop"/>
    </section>
  )
}

export default SideBar