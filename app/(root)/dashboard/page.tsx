import DashboardHeader from '@/components/DashboardHeader'
import SideBar from '@/components/SideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'
import Image from 'next/image'
import MobileNav from '@/components/MobileNav'
import RightSideBar from '@/components/RightSideBar'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { redirect } from 'next/navigation'
import { getAccount, getAccounts } from '@/lib/actions/bank.actions'
import { SearchParamProps } from '@/types'
import RecentTransactions from '@/components/RecentTransactions'


const Dashboard = async ({ searchParams: {id, page }}: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();

  if(!loggedIn) redirect('/sign-in');

  const accounts = await getAccounts({ 
    userId: loggedIn.$id
  });

  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account  = await getAccount({ appwriteItemId });

  if(!accounts) return;

  
  
  
  return (
    <section className="flex flex-col dark:bg-[#1A1A23]">
          <div className="flex size-full flex-col">
              <div className="root-layout">
                <Image src='/icons/logo.svg' width={30} height={30} alt="logo" />
                <div className="">
                  <MobileNav user={loggedIn}/>
                </div>
              </div>
          </div>
        <div className="flex h-screen w-full">
            <SideBar user={loggedIn}/>
          <div className='home'>
              <div className="home-content">
                <header className="home-header">
                  <DashboardHeader
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transactions efficiently"
                  />
                  <TotalBalanceBox
                    accounts={accountsData}
                    totalBanks={accounts?.totalBanks}
                    totalCurrentBalance={accounts?.totalCurrentBalance}
                  />
                </header>
                <RecentTransactions
                  accounts={accountsData}
                  transactions={account?.transactions}
                  appwriteItemId={appwriteItemId}
                  page={currentPage}
                />
              </div>
          </div>
            <RightSideBar
              user={loggedIn}
              transactions={account?.transactions}
              banks={accountsData?.slice(0,2)}
            />
          </div>
    </section>
  )
}

export default Dashboard