import { logoutAccount } from '@/lib/actions/user.actions'
import { FooterProps } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react';
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
  

const DashboardFooter = ({user, type='desktop'}:FooterProps) => {
    const router = useRouter();

    const handleLogOut = async () => {
        const loggedOut = await logoutAccount();
        if(loggedOut)
        {
            router.push('/sign-in');
            return;
        }
    }
  return (
    <footer className={type==='mobile' ? 'flex cursor-pointer items-center justify-between gap-2 pb-14' : 'flex cursor-pointer items-center justify-between gap-2'} >
        <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
            <p className='text-xl font-bold text-gray-700'>{user?.firstName[0]}</p>
        </div>
        <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
            <h1 className='text-14 truncate font-bold text-gray-600'>{user?.firstName}</h1>
            <h2 className='text-14 truncate font-normal text-gray-300'>{user?.email}</h2>
        </div>
        <div className="">
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
    </footer>
  )
}

export default DashboardFooter