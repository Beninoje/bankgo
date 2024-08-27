"use client"
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
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
      <main className="flex min-h-screen w-full justify-between">
          {children}
          <div className="auth-asset dark:bg-[#1a1a23] overflow-hidden">
            <div className=" pl-20 mr-[-100px] rounded-[20px]">
              <Image src={isDarkTheme ? "/icons/dark-dashboard.svg" : "/icons/auth_img.svg"} alt="homepage img" width={750} height={750} className=' border-4 border-[#FF7E61] rounded-[20px]'/>
            </div>
          </div>
      </main>
    );
  }
  