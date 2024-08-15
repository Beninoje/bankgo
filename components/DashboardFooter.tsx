import { logoutAccount } from '@/lib/actions/user.actions'
import { FooterProps } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const DashboardFooter = ({user, type='desktop'}:FooterProps) => {
    const router = useRouter();

    const handleLogOut = async () => {
        const loggedOut = await logoutAccount();
        if(loggedOut)
        {
            router.push('/sign-in');
        }
    }
  return (
    <footer className={type==='mobile' ? 'flex cursor-pointer items-center justify-between gap-2 pb-14' : 'flex cursor-pointer items-center justify-between gap-2'} >
        <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
            <p className='text-xl font-bold text-gray-700'>{user?.name[0]}</p>
        </div>
        <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
            <h1 className='text-14 truncate font-bold text-gray-600'>{user?.name}</h1>
            <h2 className='text-14 truncate font-normal text-gray-300'>{user?.email}</h2>
        </div>
        <div className="">
            <button onClick={handleLogOut}>
                <Image src='/icons/logout.svg' width={20} height={20} alt="logout"/>
            </button>
        </div>
    </footer>
  )
}

export default DashboardFooter