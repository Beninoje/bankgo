"use client"
import { logoutAccount } from '@/lib/actions/user.actions'
import { FooterProps } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const DashboardFooter = ({user, type='desktop'}:FooterProps) => {
    const router = useRouter();
    const { setTheme } = useTheme();

    const { theme, resolvedTheme } = useTheme(); 
    const [isDarkTheme, setIsDarkTheme] = useState<boolean | null>(null);
    
    useEffect(() => {
        setIsDarkTheme(resolvedTheme === 'dark');
      }, [resolvedTheme]);
    
      if (isDarkTheme === null) {
        return <div>Loading...</div>; 
      }
    const handleLogOut = async () => {
        const loggedOut = await logoutAccount();
        if(loggedOut)
        {
            router.push('/sign-in');
            return;
        }
    }
  return (
    <footer className={type==='mobile' ? 'flex cursor-pointer items-center justify-between gap-2 pb-14' : 'flex cursor-pointer items-center justify-center gap-2'} >
        <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
            <p className='text-xl font-bold text-gray-700'>{user?.firstName[0]}</p>
        </div>
        <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
            <h1 className='text-14 truncate font-bold text-gray-600'>{user?.firstName}</h1>
            <h2 className='text-14 truncate font-normal text-gray-300'>{user?.email}</h2>
        </div>
        <div className="">
<Popover>
      <PopoverTrigger asChild>
        <div>
            <Image src={isDarkTheme ? "/icons/dots_horizontal_dark.svg" : "/icons/dots_horizontal.svg"} width={15} height={15} alt="dots" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex flex-col gap-3">
            <div className="flex gap-3 justify-start p-3">
                <span className='text-[#344054] dark:text-[#AEAEAE]'>Set Theme</span>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
            </div>
            <div className="flex gap-3 justify-start p-3">
                <span className='text-[#344054] dark:text-[#AEAEAE]'>Logout</span>
            <AlertDialog>
                <AlertDialogTrigger>
                    <Image src='/icons/logout.svg' width={20} height={20} alt="logout"/>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
                    {/* <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </AlertDialogDescription> */}
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleLogOut}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
        </div>
      </PopoverContent>
    </Popover>
        </div>
        
    </footer>
  )
}

export default DashboardFooter