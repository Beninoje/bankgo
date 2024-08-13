import DashboardHeader from '@/components/DashboardHeader'
import SideBar from '@/components/SideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'
import Image from 'next/image'
import MobileNav from '@/components/MobileNav'


const Dashboard = () => {
  const loggedIn = {firstName:'Beni', lastName:'Noje'}
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
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.32}
                  />
                </header>
              </div>
            </div>
          </div>
    </section>
    
  )
}

export default Dashboard