"use client";
import React, { useEffect, useState } from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";


export function TryNow() {
  const { theme, resolvedTheme } = useTheme(); 
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDarkTheme(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  if (isDarkTheme === null) {
    return <div>Loading...</div>; 
  }
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-[200px] end_title text-center font-bold text-color">
                bank<span className="text-[#FF7E61]">on</span> 
            </h1>
          </>
        }
      >
        <Image
          src={isDarkTheme ? `/icons/dark-dashboard.svg` : `/icons/try_now.svg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <div className="try_now mx-auto text-center">
        <Link href="/sign-in" className="text-color font-bold text-[50px] text-center try_now_desc">Try Now</Link>
        <p className="text-[#8B8BAA] try_now_l_desc">Experience our dashboard firsthand</p>
      </div>
    </div>
  );
}
