import BankCard from '@/components/BankCard'
import HeaderBox from '@/components/HeaderBox'
import MobileNav from '@/components/MobileNav'
import SideBar from '@/components/SideBar'
import { getAccounts } from '@/lib/actions/bank.actions'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { Account } from '@/types'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ 
      userId: loggedIn.$id 
  });

  if (!loggedIn) redirect('/sign-in');

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
          <div className="flex">
              <SideBar user={loggedIn}/>
              <div className="my-banks">
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
    </section>
    
    
  )
}

export default MyBanks