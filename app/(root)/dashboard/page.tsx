import DashboardHeader from '@/components/DashboardHeader'
import SideBar from '@/components/SideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Dashboard = () => {
  const loggedIn = {firstName:'Beni', lastName:'Noje'}
  return (
    <section className="flex h-screen w-full font-inter">
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
    </section>
  )
}

export default Dashboard