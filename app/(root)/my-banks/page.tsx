// "use client"
import BankCard from '@/components/BankCard'
import HeaderBox from '@/components/HeaderBox'
import MobileNav from '@/components/MobileNav'
import SideBar from '@/components/SideBar'
import { Toaster } from '@/components/ui/toaster'
import { getAccounts } from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { Account } from '@/types'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const MyBanks = async () => {
  // const { resolvedTheme } = useTheme();
  // const [isDarkTheme, setIsDarkTheme] = useState<boolean | null>(null);

  // useEffect(() => {
  //   setIsDarkTheme(resolvedTheme === "dark");
  // }, [resolvedTheme]);

  // if (isDarkTheme === null) {
  //   return <div>Loading...</div>; // Or a skeleton loader
  // }
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) redirect('/sign-in');

  const accounts = await getAccounts({ 
      userId: loggedIn.$id 
  });

  if (!accounts) return;
  return (
    <section className="flex flex-col">
      <div className="flex size-full flex-col">
              <div className="root-layout">
                <Image src='/icons/logo.svg' width={30} height={30} alt="logo" />
                <div className="">
                  <MobileNav user={loggedIn}/>
                </div>
              </div>
          </div>
          <div className="flex  ">
              <SideBar user={loggedIn}/>
              <div className="my-banks dark:bg-[#1A1A23]">
                <HeaderBox 
                  title="My Bank Accounts"
                  subtext="Effortlessly manage your banking activites."
                />

                <div className="space-y-4">
                  <h2 className="header-2">
                    Your cards
                  </h2>
                  <div className="flex flex-wrap gap-6">
                    {accounts && accounts.data.map((a: Account) => (
                      <BankCard 
                        key={accounts.id}
                        account={a}
                        userName={loggedIn?.firstName}
                      />
                    ))}
                  </div>
                </div>
              </div>
          </div>
          <Toaster />
    </section>
    
    
  )
}

export default MyBanks